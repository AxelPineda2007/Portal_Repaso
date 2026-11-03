const modulosData = [
    {
        id: "3.0",
        titulo: "Módulo 3.0 · Orientación y Equipos",
        docente: "Profesor Javier Mineros",
        desc: "Organización inicial del tercer año, conformación de equipos de trabajo técnico, portafolios digitales y distribución de accesos QR para el seguimiento académico.",
        investigacion: [],
        herramientas: ["Google Classroom", "Drive", "Generadores QR"],
        tags: ["#Organización", "#Equipos", "#Portafolio"]
    },
    {
        id: "3.2",
        titulo: "Módulo 3.2 · Mantenimiento y Operación de Sistemas",
        docente: "Profesor Javier Mineros",
        desc: "Investigación profunda sobre el ciclo de vida del software (SDLC), metodologías de soporte técnico, normativas ISO, ITIL 4, SLAs y planes de contingencia (DRP/BCP).",
        investigacion: [
            "Ciclo de vida (SDLC) y Mantenimiento (Correctivo, Adaptativo, Perfectivo, Preventivo).",
            "Niveles de Soporte Técnico (Tier 1 a Tier 4).",
            "Versionamiento Semántico (SemVer: MAJOR.MINOR.PATCH) y Git.",
            "Normativas ISO (27001, 20000, 25010) e ITIL 4 (SVS y Cadena de Valor).",
            "SLA (MTTR, MTBF), Pruebas de Software y Seguridad (Tríada CID).",
            "Planes Contingenciales (DRP/BCP, RTO, RPO) y Servidores de Pruebas (Staging)."
        ],
        herramientas: ["Git", "GitHub", "Visual Studio Code", "Docker", "SQL Server", "Excel", "Jira / Helpdesk"],
        tags: ["#Investigacion", "#SLA", "#ITIL 4", "#SemVer", "#ISO 27001", "#Mantenimiento"]
    },
    {
        id: "3.3",
        titulo: "Módulo 3.3 · Administración de Bases de Datos",
        docente: "Profesor Javier Mineros",
        desc: "Gestión de bases de datos relacionales, ejecución de consultas SQL complejas, creación de dashboards interactivos en Excel y análisis visual de datos con Power BI.",
        investigacion: [],
        herramientas: ["SQL Server", "Microsoft Excel", "Power BI", "Visual Studio Code"],
        tags: ["#Power BI", "#Excel", "#SQL Server", "#Dashboards"]
    },
    {
        id: "3.4",
        titulo: "Módulo 3.4 · Documentación y Creación de Apps",
        docente: "Profesor Arcides Canales",
        desc: "Desarrollo de software en Python, interfaces gráficas con Avalonia UI y Flet, integración con Odoo ERP, arquitectura por fases y la Práctica 11 (CRUD con SQLite y DataBinding en .NET MAUI).",
        investigacion: [
            "DataBinding y DemoIntroAsync.",
            "Aplicaciones TodoSuCarnet con CRUD en SQLite.",
            "Integración de IA (Servidor MPC con Excalidraw y Spec-driven con OpenSpec)."
        ],
        herramientas: ["Python", "Avalonia UI", "Flet", "Odoo ERP", "Visual Studio Code", "IA de Visual Studio Code", ".NET MAUI", "SQLite"],
        tags: ["#Python", "#Odoo", "#Avalonia", "#IA de VS Code", "#.NET MAUI", "#CRUD"]
    },
    {
        id: "3.8",
        titulo: "Módulo 3.8 · Proyecto Innovador de Desarrollo",
        docente: "Profesor Arcides Canales",
        desc: "Ciclo completo de ingeniería de software: manuales de usuario/sistema, proyecto UNA ESTRELLA en .NET MAUI (pares, regresiva, multiplicaciones, sueldos, divisas), exposiciones, y puesta en marcha de tiendas con PrestaShop.",
        investigacion: [
            "Configuración completa de PrestaShop (temas, categorías, productos, cupones, descargas virtuales y pasarelas).",
            "Desarrollo colaborativo SCRUM en GitHub con aplicaciones interconectadas por menú en .NET MAUI."
        ],
        herramientas: ["Visual Studio Code", "IA de VS Code", "Git", "GitHub", "ASP.NET WebForms", ".NET MAUI", "PrestaShop"],
        tags: ["#Proyecto Innovador", "#EXPOS", "#IA de VS Code", "#PrestaShop", "#.NET MAUI", "#GitHub"]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-modulos");
    const buscador = document.getElementById("buscador");

    function normalizar(texto) {
        return texto ? texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
    }

    function renderizar(lista) {
        if (!contenedor) return;
        if (lista.length === 0) {
            contenedor.innerHTML = `<p style="color:var(--mut); grid-column: 1/-1; text-align:center; padding: 20px;">No se encontraron resultados.</p>`;
            return;
        }
        contenedor.innerHTML = lista.map(m => `
            <article class="card" style="background:var(--panel); border:1px solid var(--line); border-radius:14px; padding:22px; display:flex; flex-direction:column; gap:12px;">
                <h3 style="color:var(--tx); font-size:18px;">${m.titulo}</h3>
                <span class="badge-doc" style="color: var(--cy); font-size: 13px; font-weight: bold;">👨‍🏫 ${m.docente}</span>
                <p style="color:var(--mut); font-size:14.5px; line-height:1.5;">${m.desc}</p>
                
                ${m.investigacion.length > 0 ? `
                    <div class="sec-investigacion" style="background:var(--panel2); padding:10px; border-radius:8px; border:1px solid var(--line);">
                        <h4 style="font-size:13px; color:var(--gr); margin-bottom:5px;">📋 Puntos Clave / Prácticas:</h4>
                        <ul style="font-size:12.5px; color:var(--mut); padding-left:18px;">
                            ${m.investigacion.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}

                <p style="font-size: 13px; color: #fff;"><b>Herramientas:</b> ${m.herramientas.join(', ')}</p>
                
                <div class="tags" style="display:flex; flex-wrap:wrap; gap:6px; margin-top:auto;">
                    ${m.tags.map(t => `<span class="tag" style="font-size:12px; background:var(--panel2); border:1px solid var(--line); color:var(--cy); padding:3px 10px; border-radius:6px;">${t}</span>`).join('')}
                </div>
            </article>
        `).join('');
    }

    renderizar(modulosData);

    if (buscador) {
        buscador.addEventListener("input", (e) => {
            const texto = normalizar(e.target.value.trim());
            const filtrados = modulosData.filter(m => 
                normalizar(m.titulo).includes(texto) || 
                normalizar(m.desc).includes(texto) ||
                normalizar(m.docente).includes(texto) ||
                m.investigacion.some(inv => normalizar(inv).includes(texto)) ||
                m.herramientas.some(h => normalizar(h).includes(texto)) ||
                m.tags.some(t => normalizar(t).includes(texto))
            );
            renderizar(filtrados);
        });
    }
});