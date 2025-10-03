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
