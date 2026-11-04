const modulosData = [
    {
        id: "3.0",
        titulo: "Módulo 3.0 · Orientación y Equipos",
        docente: "Profesor Javier Mineros",
        categoria: "mineros",
        desc: "Organización inicial del tercer año, conformación de equipos de trabajo técnico, portafolios digitales y distribución de accesos QR para el seguimiento académico.",
        investigacion: [],
        herramientas: ["Google Classroom", "Drive", "Generadores QR"],
        tags: ["#Organización", "#Equipos", "#Portafolio"]
    },
    {
        id: "3.2",
        titulo: "Módulo 3.2 · Mantenimiento y Operación de Sistemas",
        docente: "Profesor Javier Mineros",
        categoria: "mineros",
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
        categoria: "mineros",
        desc: "Gestión de bases de datos relacionales, ejecución de consultas SQL complejas, creación de dashboards interactivos en Excel y análisis visual de datos con Power BI.",
        investigacion: [],
        herramientas: ["SQL Server", "Microsoft Excel", "Power BI", "Visual Studio Code"],
        tags: ["#Power BI", "#Excel", "#SQL Server", "#Dashboards"]
    },
    {
        id: "3.4",
        titulo: "Módulo 3.4 · Documentación y Creación de Apps",
        docente: "Profesor Arcides Canales",
        categoria: "canales",
        desc: "Desarrollo de software en Python, interfaces gráficas con Avalonia UI y Flet, integración con Odoo ERP, arquitectura por fases y ejecución de prácticas avanzadas en .NET MAUI.",
        investigacion: [
            "Práctica 11 (Base de datos CRUD-IA): DataBinding y DemoIntroAsync (Individual).",
            "Aplicación TodoSuCarnet con CRUD en SQLite.",
            "Uso de IA: Servidor MPC con Excalidraw y Spec-driven development con OpenSpec.",
            "Práctica 10 y guías de desarrollo con .NET MAUI y SQLite."
        ],
        herramientas: ["Python", "Avalonia UI", "Flet", "Odoo ERP", "Visual Studio Code", "IA de Visual Studio Code", ".NET MAUI", "SQLite"],
        tags: ["#Python", "#Odoo", "#CRUD-IA", "#Práctica 11", "#.NET MAUI", "#SQLite"]
    },
    {
        id: "3.8",
        titulo: "Módulo 3.8 · Proyecto Innovador de Desarrollo",
        docente: "Profesor Arcides Canales",
        categoria: "canales",
        desc: "Ciclo completo de ingeniería de software: manuales de usuario/sistema, metodología SCRUM, proyecto UNA ESTRELLA en .NET MAUI, exposiciones y tiendas virtuales.",
        investigacion: [
            "Puesta en marcha de PrestaShop: temas, categorías, 5 productos por categoría, 4 Packs, cupones de descuento, descargas virtuales y marcas.",
            "MatchGame (Investigación complementaria con figuras aleatorias, timer y reinicio).",
            "Análisis de resultados y SCRUM (Equipos de 5): 6 aplicaciones en .NET MAUI (pares, cuenta regresiva, tablas de multiplicar, sueldos, tarifas de 'La langosta ahumada' y conversor de moneda mexicana)."
        ],
        herramientas: ["Visual Studio Code", "IA de VS Code", "Git", "GitHub", "ASP.NET WebForms", ".NET MAUI", "PrestaShop", "XAMPP"],
        tags: ["#Proyecto Innovador", "#PrestaShop", "#SCRUM", "#.NET MAUI", "#MatchGame", "#GitHub"]
    },
    {
        id: "3.9",
        titulo: "Módulo 3.9 · Integración y Feria de Portales",
        docente: "Profesor Arcides Canales y Javier Mineros",
        categoria: "ambos",
        desc: "Módulo integrador enfocado en la consolidación del Portal HUB de Repaso Anual, empaquetado de versiones (v0.2 a v1.0), despliegue en GitHub Pages y defensa individual.",
        investigacion: [
            "Estructuración de componentes web reutilizables (HTML5, CSS Grid/Flexbox y JavaScript nativo sin frameworks).",
            "Control estricto de versiones en repositorio público con convenciones de commits y etiquetado.",
            "Verificación de criterios de calidad: diseño responsivo para dispositivos móviles, accesibilidad y rendimiento óptimo."
        ],
        herramientas: ["Git", "GitHub Pages", "Visual Studio Code", "Markdown", "Live Server"],
        tags: ["#FeriaDePortales", "#GitHubPages", "#EvaluaciónFinal", "#RepasoIntegral"]
    }
];

const quizPreguntas = [
    {
        pregunta: "¿Qué significa el número '2' en el versionamiento semántico v2.4.1 (SemVer)?",
        opciones: ["Versión Parche / Patch", "Versión Menor / Minor", "Versión Mayor / Major", "Número de Build"],
        correcta: 2,
        explicacion: "En SemVer (MAJOR.MINOR.PATCH), la primera posición es MAJOR e indica cambios incompatibles hacia atrás."
    },
    {
        pregunta: "¿Qué normativa ISO especifica los requisitos para un Sistema de Gestión de Seguridad de la Información (SGSI)?",
        opciones: ["ISO/IEC 20000", "ISO/IEC 27001", "ISO 9001", "ISO/IEC 25010"],
        correcta: 1,
        explicacion: "ISO/IEC 27001 es la norma internacional centrada en la seguridad de la información y la tríada CID."
    },
    {
        pregunta: "En la práctica 11 de .NET MAUI con SQLite, ¿qué mecanismo se usó para vincular datos a la interfaz?",
        opciones: ["Entity Framework", "DataBinding", "REST API", "GraphQL"],
        correcta: 1,
        explicacion: "Se implementó DataBinding junto con procedimientos asíncronos para actualizar vistas en tiempo real."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-modulos");
    const buscador = document.getElementById("buscador");
    const filterBtns = document.querySelectorAll(".btn-filter");
    const themeBtn = document.getElementById("theme-toggle");
    const progresoTexto = document.getElementById("progreso-texto");
    const barProgreso = document.getElementById("bar-progreso");

    let filtroActual = "todos";
    let progresoRepaso = JSON.parse(localStorage.getItem("progreso_repaso_indel")) || {};

    // 1. Modo Claro / Oscuro
    const themeGuardado = localStorage.getItem("theme_indel") || "dark";
    if (themeGuardado === "light") {
        document.body.classList.add("light-mode");
        themeBtn.textContent = "☀️ Modo Claro";
    }

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const esLight = document.body.classList.contains("light-mode");
        themeBtn.textContent = esLight ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
        localStorage.setItem("theme_indel", esLight ? "light" : "dark");
    });

    // 2. Control de Progreso
    function actualizarProgresoGlobal() {
        const total = modulosData.length;
        const completados = Object.values(progresoRepaso).filter(Boolean).length;
        const porcentaje = Math.round((completados / total) * 100);
        progresoTexto.textContent = `${porcentaje}%`;
        barProgreso.value = porcentaje;
    }

    function normalizar(texto) {
        return texto ? texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
    }

    // 3. Renderizar Módulos con Filtros y Buscador
    function renderizar() {
        if (!contenedor) return;
        const texto = normalizar(buscador ? buscador.value.trim() : "");

        const filtrados = modulosData.filter(m => {
            const coincideFiltro = 
                filtroActual === "todos" ||
                (filtroActual === "mineros" && m.categoria === "mineros") ||
                (filtroActual === "canales" && m.categoria === "canales") ||
                (filtroActual === "m32" && m.id === "3.2");

            const coincideTexto = 
                normalizar(m.titulo).includes(texto) ||
                normalizar(m.desc).includes(texto) ||
                normalizar(m.docente).includes(texto) ||
                m.investigacion.some(inv => normalizar(inv).includes(texto)) ||
                m.herramientas.some(h => normalizar(h).includes(texto)) ||
                m.tags.some(t => normalizar(t).includes(texto));

            return coincideFiltro && coincideTexto;
        });

        if (filtrados.length === 0) {
            contenedor.innerHTML = `<p style="color:var(--mut); grid-column: 1/-1; text-align:center; padding: 20px;">No se encontraron resultados.</p>`;
            return;
        }

        contenedor.innerHTML = filtrados.map(m => {
            const estaRevisado = !!progresoRepaso[m.id];
            return `
                <article class="card">
                    <div class="card-header">
                        <h3>${m.titulo}</h3>
                        <input type="checkbox" class="chk-repasado" data-id="${m.id}" ${estaRevisado ? 'checked' : ''} title="Marcar como repasado">
                    </div>
                    <span class="badge-doc">👨‍🏫 ${m.docente}</span>
                    <p style="color:var(--mut); font-size:14.5px;">${m.desc}</p>
                    
                    ${m.investigacion.length > 0 ? `
                        <div class="sec-investigacion">
                            <h4>📋 Prácticas y Contenido Detallado:</h4>
                            <ul>
                                ${m.investigacion.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}

                    <p style="font-size: 13px;"><b>Herramientas:</b> ${m.herramientas.join(', ')}</p>
                    
                    <div class="tags">
                        ${m.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                </article>
            `;
        }).join('');

        // Eventos para Guardar Progreso en localStorage
        document.querySelectorAll(".chk-repasado").forEach(chk => {
            chk.addEventListener("change", (e) => {
                const id = e.target.dataset.id;
                progresoRepaso[id] = e.target.checked;
                localStorage.setItem("progreso_repaso_indel", JSON.stringify(progresoRepaso));
                actualizarProgresoGlobal();
            });
        });
    }

    // Eventos de Filtros y Búsqueda
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtroActual = btn.dataset.filter;
            renderizar();
        });
    });

    if (buscador) {
        buscador.addEventListener("input", renderizar);
    }

    // 4. Quiz Interactivo
    let quizIndex = 0;
    const quizContainer = document.getElementById("quiz-container");

    function renderizarQuiz() {
        if (!quizContainer) return;
        if (quizIndex >= quizPreguntas.length) {
            quizContainer.innerHTML = `
                <p style="color:var(--gr); font-weight:bold;">🎉 ¡Has completado el Quiz de Repaso!</p>
                <button class="btn-next" onclick="location.reload()">Reiniciar Quiz</button>
            `;
            return;
        }

        const q = quizPreguntas[quizIndex];
        quizContainer.innerHTML = `
            <p style="font-weight:bold; margin-bottom:10px;">Pregunta ${quizIndex + 1} de ${quizPreguntas.length}: ${q.pregunta}</p>
            <div>
                ${q.opciones.map((op, idx) => `
                    <button class="quiz-option" data-idx="${idx}">${op}</button>
                `).join('')}
            </div>
            <div id="quiz-feedback"></div>
        `;

        document.querySelectorAll(".quiz-option").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const seleccionado = parseInt(e.target.dataset.idx);
                const feedbackDiv = document.getElementById("quiz-feedback");
                document.querySelectorAll(".quiz-option").forEach(b => b.disabled = true);

                if (seleccionado === q.correcta) {
                    feedbackDiv.className = "feedback correct";
                    feedbackDiv.innerHTML = `✅ ¡Correcto! ${q.explicacion}`;
                } else {
                    feedbackDiv.className = "feedback incorrect";
                    feedbackDiv.innerHTML = `❌ Incorrecto. ${q.explicacion}`;
                }

                feedbackDiv.innerHTML += `<br><button id="btn-sig" class="btn-next">Siguiente Pregunta ➔</button>`;
                document.getElementById("btn-sig").addEventListener("click", () => {
                    quizIndex++;
                    renderizarQuiz();
                });
            });
        });
    }

    actualizarProgresoGlobal();
    renderizar();
    renderizarQuiz();
});