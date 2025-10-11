// ==================== ANIMACIONES EN SCROLL ====================
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // se anima una vez
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

// ==================== MENÚ HAMBURGUESA ====================
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
});

// ==================== CAMBIO ENTRE PERSONAS Y EMPRESAS ====================
document.addEventListener("DOMContentLoaded", () => {
  // Botones del panel
  const btnPersonas = document.getElementById("btn-personas");
  const btnEmpresas = document.getElementById("btn-empresas");

  // Enlaces del header
  const headerPersonas = document.getElementById("header-personas");
  const headerEmpresas = document.getElementById("header-empresas");

  // Grupos de servicios
  const grupoPersonas = document.getElementById("servicios-personas");
  const grupoEmpresas = document.getElementById("servicios-empresas");
  const serviciosSection = document.getElementById("servicios");
  const header = document.querySelector("header");

  if (!grupoPersonas || !grupoEmpresas || !serviciosSection) return;

  // 🔧 Función de scroll ajustado
  function scrollASeccion() {
    const headerHeight = header ? header.offsetHeight : 120;
    // ⬇️ Ajuste: baja un poco más (antes era - (headerHeight + 20))
    const y = serviciosSection.getBoundingClientRect().top + window.scrollY - (headerHeight - 120);
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  // 🔁 Función para mostrar cada grupo
  function mostrarPersonas() {
    grupoPersonas.style.display = "flex";
    grupoEmpresas.style.display = "none";

    btnPersonas?.classList.add("active");
    btnEmpresas?.classList.remove("active");
    headerPersonas?.classList.add("active");
    headerEmpresas?.classList.remove("active");

    scrollASeccion();
  }

  function mostrarEmpresas() {
    grupoPersonas.style.display = "none";
    grupoEmpresas.style.display = "flex";

    btnEmpresas?.classList.add("active");
    btnPersonas?.classList.remove("active");
    headerEmpresas?.classList.add("active");
    headerPersonas?.classList.remove("active");

    scrollASeccion();
  }

  // 🎯 Eventos de botones del panel
  btnPersonas?.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarPersonas();
  });

  btnEmpresas?.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarEmpresas();
  });

  // 🎯 Eventos de enlaces del header
  headerPersonas?.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarPersonas();
  });

  headerEmpresas?.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarEmpresas();
  });
});
