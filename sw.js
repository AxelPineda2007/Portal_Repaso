const CACHE_NAME = 'repaso-hub-v1';
const APP_SHELL = new URL('./index.html', self.location).href;
const APP_ASSETS = [
    APP_SHELL,
    new URL('./manifest.webmanifest', self.location).href,
    new URL('./icon.svg', self.location).href
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(APP_ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => Promise.all(
                cacheNames
                    .filter(cacheName => cacheName.startsWith('repaso-hub-') && cacheName !== CACHE_NAME)
                    .map(cacheName => caches.delete(cacheName))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then(response => {
                    if (response.ok) {
                        const copy = response.clone();
                        event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put(APP_SHELL, copy)));
                    }
                    return response;
                })
                .catch(() => caches.match(APP_SHELL))
        );
        return;
    }

    event.respondWith(
        caches.match(request)
            .then(cachedResponse => cachedResponse || fetch(request))
    );
});
