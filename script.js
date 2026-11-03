document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-modulos");
    const buscador = document.getElementById("buscador");
function renderizar(lista) {
        if (lista.length === 0) {
            contenedor.innerHTML = `<p style="color:var(--mut); grid-column: 1/-1; text-align:center;">No se encontraron módulos.</p>`;
            return;
        }
        contenedor.innerHTML = lista.map(m => `
            <article class="card">
                <h3>${m.titulo}</h3>
                <p style="color: var(--cy); font-size: 13px; font-weight: bold;">👨‍🏫 ${m.docente}</p>
                <p>${m.desc}</p>
                <p style="font-size: 13px; color: #fff;"><b>Herramientas:</b> ${m.herramientas.join(', ')}</p>
                <div class="tags">
                    ${m.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </article>
        `).join('');
    }

    renderizar(modulosData);

    buscador.addEventListener("input", (e) => {
        const texto = e.target.value.toLowerCase();
        const filtrados = modulosData.filter(m => 
            m.titulo.toLowerCase().includes(texto) || 
            m.desc.toLowerCase().includes(texto) ||
            m.tags.some(t => t.toLowerCase().includes(texto))
        );
        renderizar(filtrados);
    });
});