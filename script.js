document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-modulos");
    const buscador = document.getElementById("buscador");

    // Función para quitar tildes y buscar sin problemas de mayúsculas
    function normalizar(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    function renderizar(lista) {
        if (!contenedor) return;
        if (lista.length === 0) {
            contenedor.innerHTML = `<p style="color:var(--mut); grid-column: 1/-1; text-align:center; padding: 20px;">No se encontraron módulos con ese término.</p>`;
            return;
        }
        contenedor.innerHTML = lista.map(m => `
            <article class="card" style="background:var(--panel); border:1px solid var(--line); border-radius:14px; padding:22px; display:flex; flex-direction:column; gap:12px;">
                <h3 style="color:var(--tx); font-size:18px;">${m.titulo}</h3>
                <p style="color: var(--cy); font-size: 13px; font-weight: bold;">👨‍🏫 ${m.docente}</p>
                <p style="color:var(--mut); font-size:14.5px; line-height:1.5;">${m.desc}</p>
                <p style="font-size: 13px; color: #fff;"><b>Herramientas:</b> ${m.herramientas.join(', ')}</p>
                <div class="tags" style="display:flex; flex-wrap:wrap; gap:6px; margin-top:auto;">
                    ${m.tags.map(t => `<span class="tag" style="font-size:12px; background:var(--panel2); border:1px solid var(--line); color:var(--cy); padding:3px 10px; border-radius:6px;">${t}</span>`).join('')}
                </div>
            </article>
        `).join('');
    }

    // Renderiza todos al iniciar
    renderizar(modulosData);

    // Evento de búsqueda inteligente (sin importar tildes o mayúsculas)
    if (buscador) {
        buscador.addEventListener("input", (e) => {
            const texto = normalizar(e.target.value.trim());
            const filtrados = modulosData.filter(m => 
                normalizar(m.titulo).includes(texto) || 
                normalizar(m.desc).includes(texto) ||
                normalizar(m.docente).includes(texto) ||
                m.herramientas.some(h => normalizar(h).includes(texto)) ||
                m.tags.some(t => normalizar(t).includes(texto))
            );
            renderizar(filtrados);
        });
    }
});