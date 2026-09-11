const translations = {
  en: {
    "nav.features": "Features",
    "nav.engines": "Engines",
    "nav.comparison": "Comparison",
    "nav.gallery": "Showcase",
    "nav.docs": "Documentation",
    "nav.download": "Download",
    
    "hero.badge": "v0.1.0 · Built for macOS",
    "hero.title": "The fast, lightweight container manager for macOS",
    "hero.subtitle": "One unified client for Docker Desktop, OrbStack, Colima, Rancher, and Podman. Instant engine switching, native multi-window workflows, and in-container file editing.",
    "hero.cta_download": "Download for Mac",
    "hero.cta_docs": "Documentation",
    "hero.mac_only": "macOS 12.0+ (Apple Silicon & Intel)",
    
    "tab.fleet": "Overview",
    "tab.terminal": "Console",
    "tab.files": "File Manager",
    "tab.metrics": "Live Stats",
    "mockup.engine_active": "OrbStack (Default)",
    
    "ecosystem.title": "Supported Engines",
    
    "bento.title": "Engineered for developer speed",
    "bento.subtitle": "Designed for instant startup, minimal resource usage, and deep macOS integration.",
    
    "bento.card1.title": "Multi-Engine Hot Switching",
    "bento.card1.desc": "Switch between Docker Desktop, OrbStack, Colima, and Podman runtimes in under 100ms without restarting the app.",
    "bento.card1.item1": "Automatic socket autodetection in /var/run and ~/.docker",
    "bento.card1.item2": "Live daemon health probes and version diagnostics",
    "bento.card1.item3": "Independent engine telemetry streams",
    
    "bento.card2.title": "Native macOS Multi-Window",
    "bento.card2.desc": "Detach terminals, live streaming logs, or telemetry into independent native macOS desktop windows.",
    "bento.card2.item1": "Full state synchronization across detached windows",
    "bento.card2.item2": "macOS traffic lights and custom overlay titlebars",
    
    "bento.card3.title": "In-Container File Editor",
    "bento.card3.desc": "Browse directories and edit config files inside running containers without manual docker cp commands.",
    "bento.card3.item1": "In-place editing with syntax highlighting",
    "bento.card3.item2": "Breadcrumb navigation for container paths",
    
    "bento.card4.title": "Lightweight Native Core",
    "bento.card4.desc": "Only 11.3 MB installed. Starts cold in under 200 milliseconds and runs in ~35 MB of idle RAM.",
    
    "bento.card5.title": "Command Palette & Shortcuts",
    "bento.card5.desc": "Search containers, switch runtimes, and trigger actions directly with keyboard shortcuts.",

    "comparison.title": "Architecture & Footprint Comparison",
    "comparison.subtitle": "Measured against standard container desktop applications on macOS.",
    "comp.col.feature": "Capability",
    "comp.col.ilc": "I Love Containers",
    "comp.col.docker": "Docker Desktop",
    "comp.col.podman": "Podman Desktop",
    
    "comp.row.size": "Install Size",
    "comp.row.memory.ilc": "11.3 MB",
    "comp.row.memory.docker": "450 MB – 1.2 GB",
    "comp.row.memory.podman": "320 MB – 650 MB",
    
    "comp.row.engines": "Multi-Engine Support",
    "comp.row.engines.ilc": "Docker, OrbStack, Colima, Podman, Rancher",
    "comp.row.engines.docker": "Docker Desktop daemon only",
    "comp.row.engines.podman": "Podman + partial Docker bridge",
    
    "comp.row.multiwin": "Detached Native Windows",
    "comp.row.multiwin.ilc": "Full support (Terminals, Logs, Stats, Files)",
    "comp.row.multiwin.docker": "Not supported",
    "comp.row.multiwin.podman": "Not supported",
    
    "comp.row.fileedit": "In-Container File Editing",
    "comp.row.fileedit.ilc": "Native visual tree & editor",
    "comp.row.fileedit.docker": "Basic file list only",
    "comp.row.fileedit.podman": "Requires external shell",
    
    "comp.row.startup": "Cold Startup Time",
    "comp.row.startup.ilc": "< 200 ms",
    "comp.row.startup.docker": "8 – 20 seconds",
    "comp.row.startup.podman": "4 – 10 seconds",

    "comp.row.ram": "Idle RAM Usage",
    "comp.row.ram.ilc": "~35 MB",
    "comp.row.ram.docker": "450 MB – 1.2 GB",
    "comp.row.ram.podman": "320 MB – 650 MB",

    "comp.row.engines_count": "Engines Supported",
    "comp.row.engines_count.ilc": "5 (Docker, OrbStack, Colima, Podman, Rancher)",
    "comp.row.engines_count.docker": "1",
    "comp.row.engines_count.podman": "2 (Podman + partial Docker)",

    "comp.row.palette": "Command Palette",
    "comp.row.palette.ilc": "⌘K global shortcuts",
    "comp.row.palette.docker": "Not available",
    "comp.row.palette.podman": "Not available",

    "comp.row.opensource": "Open Source",
    "comp.row.opensource.ilc": "Yes (MIT License)",
    "comp.row.opensource.docker": "No (Proprietary)",
    "comp.row.opensource.podman": "Yes (Apache 2.0)",

    "comp.row.metrics": "Live Resource Metrics",
    "comp.row.metrics.ilc": "CPU, Memory, Disk I/O, Network",
    "comp.row.metrics.docker": "Basic container stats",
    "comp.row.metrics.podman": "Basic container stats",

    "gallery.title": "Application Showcase",
    "gallery.subtitle": "Core views and management surfaces in the macOS desktop client.",
    "gallery.c1.title": "Fleet & System Status",
    "gallery.c1.desc": "Inspect status badges, port forwards, and health indicators across local containers.",
    "gallery.c2.title": "Interactive Terminal",
    "gallery.c2.desc": "Interactive container shell powered by xterm.js with ANSI colors and WebGL rendering.",
    "gallery.c3.title": "In-Container File Manager",
    "gallery.c3.desc": "Browse the filesystem, view contents, and edit config files directly inside containers.",
    "gallery.c4.title": "Multi-Window Workspace",
    "gallery.c4.desc": "Pop out inspector panes to secondary monitors in synchronized native windows.",
    "gallery.c5.title": "Live I/O & Telemetry",
    "gallery.c5.desc": "Live CPU usage curves, memory working sets, and disk I/O updated in real-time.",

    "docs.title": "Documentation",
    "docs.subtitle": "Socket detection, engine detection, and workflow reference.",
    "docs.nav.engines": "Engine Detection",
    "docs.nav.files": "File Operations",
    "docs.nav.multiwin": "Multi-Window",
    "docs.nav.shortcuts": "Shortcuts",
    
    "docs.pane2.title": "Engine Detection",
    "docs.pane2.p1": "ILC inspects standard macOS socket paths and presents available engines in the sidebar and Command Palette (⌘K).",

    "docs.pane3.title": "In-Container File Operations",
    "docs.pane3.p1": "The built-in file manager connects directly to the container API streaming layer. Navigate folder hierarchies, download files to your Mac, or edit configurations in place.",
    "docs.pane3.p2": "Changes are written back via streaming tar archives, preserving container permissions and timestamps.",

    "docs.pane4.title": "Multi-Window Workflows",
    "docs.pane4.p1": "Click the pop-out button on any inspector tab (Terminal, Logs, Stats, Files) to detach it into an independent macOS WebKit window.",
    "docs.pane4.p2": "Detached windows maintain live synchronization with the primary application session and theme state.",

    "docs.pane5.title": "Keyboard Shortcuts",
    "docs.pane5.p1": "Keybindings available globally throughout the desktop client:",
    "docs.sc.key": "Shortcut",
    "docs.sc.action": "Action",
    "docs.sc.k": "Open Command Palette",
    "docs.sc.b": "Toggle Sidebar",
    "docs.sc.r": "Refresh Resources",
    "docs.sc.m": "Toggle Fleet / System View",
    "docs.sc.t": "Open Shell in Selected Container",
    "docs.sc.l": "Open Logs in Selected Container",
    "docs.sc.s": "Open Stats in Selected Container",
    "docs.sc.esc": "Dismiss Overlays & Modals",

    "download.title": "Download for macOS",
    "download.subtitle": "Native build for Apple Silicon Macs.",
    "download.arm.title": "Apple Silicon",
    "download.btn": "Download .DMG",
    "download.footnote": "Requires macOS 12.0 or later.",

    "footer.desc": "The lightweight, multi-engine container manager crafted natively for macOS developers.",
    "footer.links": "Navigation",
    "footer.engines": "Runtimes",
    "footer.legal": "Project",
    "footer.copy": "© 2026 I Love Containers. Open source under the MIT License."
  },
  es: {
    "nav.features": "Características",
    "nav.engines": "Motores",
    "nav.comparison": "Comparativa",
    "nav.gallery": "Vistas",
    "nav.docs": "Documentación",
    "nav.download": "Descargar",
    
    "hero.badge": "v0.1.0 · Creado para macOS",
    "hero.title": "El gestor de contenedores rápido y ligero para macOS",
    "hero.subtitle": "Un único cliente para Docker Desktop, OrbStack, Colima, Rancher y Podman. Cambio de motor al instante, ventanas nativas desacoplables y edición de archivos dentro del contenedor.",
    "hero.cta_download": "Descargar para Mac",
    "hero.cta_docs": "Documentación",
    "hero.mac_only": "macOS 12.0+ (Apple Silicon e Intel)",
    
    "tab.fleet": "Vista General",
    "tab.terminal": "Consola",
    "tab.files": "Explorador de Archivos",
    "tab.metrics": "Métricas en Vivo",
    "mockup.engine_active": "OrbStack (Predeterminado)",
    
    "ecosystem.title": "Motores Compatibles",
    
    "bento.title": "Diseñado para la velocidad del desarrollador",
    "bento.subtitle": "Diseñado para un arranque instantáneo, consumo mínimo de recursos e integración profunda con macOS.",
    
    "bento.card1.title": "Cambio en Caliente entre Motores",
    "bento.card1.desc": "Alterna entre Docker Desktop, OrbStack, Colima y Podman en menos de 100 ms sin reiniciar la aplicación ni perder tu sesión.",
    "bento.card1.item1": "Autodetección de sockets en /var/run y ~/.docker",
    "bento.card1.item2": "Comprobación de salud del daemon y versión en vivo",
    "bento.card1.item3": "Telemetría de recursos independiente por motor",
    
    "bento.card2.title": "Multi-Ventana Nativa de macOS",
    "bento.card2.desc": "Desacopla terminales, logs o gráficos de uso en ventanas independientes de macOS con sincronización en tiempo real.",
    "bento.card2.item1": "Sincronización de estado entre todas las ventanas",
    "bento.card2.item2": "Controles de ventana y barra de título integrada en macOS",
    
    "bento.card3.title": "Editor de Archivos en Contenedor",
    "bento.card3.desc": "Explora carpetas y modifica archivos de configuración dentro de tus contenedores sin usar comandos manuales de docker cp.",
    "bento.card3.item1": "Edición in situ con resaltado de sintaxis",
    "bento.card3.item2": "Navegación visual de rutas del contenedor",
    
    "bento.card4.title": "Nativo Ultraligero",
    "bento.card4.desc": "Solo 11.3 MB instalados. Arranca en frío en menos de 200 milisegundos y consume apenas ~35 MB de RAM en reposo.",
    
    "bento.card5.title": "Paleta de Comandos y Atajos",
    "bento.card5.desc": "Busca contenedores, cambia de motor y ejecuta acciones directamente desde el teclado.",

    "comparison.title": "Comparativa de Arquitectura y Consumo",
    "comparison.subtitle": "Medido frente a las aplicaciones de escritorio tradicionales en macOS.",
    "comp.col.feature": "Capacidad",
    "comp.col.ilc": "I Love Containers",
    "comp.col.docker": "Docker Desktop",
    "comp.col.podman": "Podman Desktop",
    
    "comp.row.size": "Tamaño de Instalación",
    "comp.row.memory.ilc": "11.3 MB",
    "comp.row.memory.docker": "450 MB – 1.2 GB",
    "comp.row.memory.podman": "320 MB – 650 MB",
    
    "comp.row.engines": "Soporte Multi-Motor",
    "comp.row.engines.ilc": "Docker, OrbStack, Colima, Podman, Rancher",
    "comp.row.engines.docker": "Únicamente daemon de Docker Desktop",
    "comp.row.engines.podman": "Podman + puente parcial Docker",
    
    "comp.row.multiwin": "Ventanas Nativas Desacoplables",
    "comp.row.multiwin.ilc": "Total (Terminal, Logs, Métricas, Archivos)",
    "comp.row.multiwin.docker": "No soportado",
    "comp.row.multiwin.podman": "No soportado",
    
    "comp.row.fileedit": "Edición de Archivos en Contenedor",
    "comp.row.fileedit.ilc": "Árbol visual nativo y editor integrado",
    "comp.row.fileedit.docker": "Solo listado básico",
    "comp.row.fileedit.podman": "Requiere consola externa",
    
    "comp.row.startup": "Arranque en Frío",
    "comp.row.startup.ilc": "< 200 ms",
    "comp.row.startup.docker": "8 – 20 segundos",
    "comp.row.startup.podman": "4 – 10 segundos",

    "comp.row.ram": "Uso de RAM en Reposo",
    "comp.row.ram.ilc": "~35 MB",
    "comp.row.ram.docker": "450 MB – 1.2 GB",
    "comp.row.ram.podman": "320 MB – 650 MB",

    "comp.row.engines_count": "Motores Soportados",
    "comp.row.engines_count.ilc": "5 (Docker, OrbStack, Colima, Podman, Rancher)",
    "comp.row.engines_count.docker": "1",
    "comp.row.engines_count.podman": "2 (Podman + puente Docker parcial)",

    "comp.row.palette": "Paleta de Comandos",
    "comp.row.palette.ilc": "Atajos globales ⌘K",
    "comp.row.palette.docker": "No disponible",
    "comp.row.palette.podman": "No disponible",

    "comp.row.opensource": "Código Abierto",
    "comp.row.opensource.ilc": "Sí (Licencia MIT)",
    "comp.row.opensource.docker": "No (Propietario)",
    "comp.row.opensource.podman": "Sí (Apache 2.0)",

    "comp.row.metrics": "Métricas de Recursos en Vivo",
    "comp.row.metrics.ilc": "CPU, Memoria, Disco I/O, Red",
    "comp.row.metrics.docker": "Estadísticas básicas del contenedor",
    "comp.row.metrics.podman": "Estadísticas básicas del contenedor",

    "gallery.title": "Vistas de la Aplicación",
    "gallery.subtitle": "Paneles principales y controles de administración en macOS.",
    "gallery.c1.title": "Estado de Flota y Sistema",
    "gallery.c1.desc": "Revisa estados, puertos y contenedores activos en tu entorno local.",
    "gallery.c2.title": "Terminal Interactiva",
    "gallery.c2.desc": "Consola interna basada en xterm.js con soporte ANSI y aceleración WebGL.",
    "gallery.c3.title": "Gestor de Archivos",
    "gallery.c3.desc": "Navega y edita archivos de configuración directamente dentro del contenedor.",
    "gallery.c4.title": "Espacio Multi-Ventana",
    "gallery.c4.desc": "Desacopla paneles de inspección a pantallas secundarias manteniendo tu sesión.",
    "gallery.c5.title": "Telemetría y Rendimiento",
    "gallery.c5.desc": "Consumo de CPU, memoria y transferencia de red actualizados al segundo.",

    "docs.title": "Documentación",
    "docs.subtitle": "Detección de motores y atajos.",
    "docs.nav.engines": "Detección de Motores",
    "docs.nav.files": "Gestión de Archivos",
    "docs.nav.multiwin": "Multi-Ventana",
    "docs.nav.shortcuts": "Atajos de Teclado",
    
    "docs.pane2.title": "Detección de Motores",
    "docs.pane2.p1": "ILC comprueba las rutas habituales en macOS y muestra los motores listos para usar en la barra lateral y en la Paleta de Comandos (⌘K).",

    "docs.pane3.title": "Gestión de Archivos en Contenedor",
    "docs.pane3.p1": "El gestor se conecta directamente a la API de streaming. Puedes navegar carpetas, descargar archivos a tu Mac o modificarlos directamente.",
    "docs.pane3.p2": "Los cambios se guardan mediante flujos tar, respetando permisos y marcas de tiempo del contenedor.",

    "docs.pane4.title": "Flujos Multi-Ventana",
    "docs.pane4.p1": "Haz clic en el botón de desacoplar en cualquier pestaña para abrirla en una ventana independiente de macOS.",
    "docs.pane4.p2": "Las ventanas desacopladas sincronizan tema y estado en tiempo real con la ventana principal.",

    "docs.pane5.title": "Atajos de Teclado",
    "docs.pane5.p1": "Atajos globales disponibles en toda la aplicación:",
    "docs.sc.key": "Atajo",
    "docs.sc.action": "Acción",
    "docs.sc.k": "Abrir Paleta de Comandos",
    "docs.sc.b": "Mostrar / Ocultar Barra Lateral",
    "docs.sc.r": "Recargar Recursos",
    "docs.sc.m": "Alternar Vista Cuadrícula / Tabla",
    "docs.sc.t": "Abrir Terminal en Contenedor",
    "docs.sc.l": "Abrir Logs en Contenedor",
    "docs.sc.s": "Abrir Métricas en Contenedor",
    "docs.sc.esc": "Cerrar Ventanas Emergentes",

    "download.title": "Descargar para macOS",
    "download.subtitle": "Compilación nativa para Macs con Apple Silicon.",
    "download.arm.title": "Apple Silicon",
    "download.btn": "Descargar .DMG",
    "download.footnote": "Requiere macOS 12.0 o posterior.",

    "footer.desc": "El gestor de contenedores ligero y multi-motor creado nativamente para desarrolladores en macOS.",
    "footer.links": "Navegación",
    "footer.engines": "Motores",
    "footer.legal": "Proyecto",
    "footer.copy": "© 2026 I Love Containers. Código abierto bajo Licencia MIT."
  }
};

function applyTranslations(lang) {
  const currentLang = translations[lang] ? lang : "en";
  const dict = translations[currentLang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.documentElement.lang = currentLang;
  localStorage.setItem("ilc_lang", currentLang);

  const langBtn = document.getElementById("btn-lang-toggle");
  if (langBtn) {
    langBtn.textContent = currentLang === "en" ? "ES" : "EN";
  }
}
