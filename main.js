// ==================== CARRUSEL ====================
let slides = document.querySelectorAll(".slide");
let index = 0;
let interval;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active", "fade-in", "fade-out");
    if (idx === i) {
      slide.classList.add("active", "fade-in");
    } else if (idx === index) {
      slide.classList.add("fade-out");
    }
  });
  index = i;
}

// Botón siguiente
document.querySelector(".next").addEventListener("click", () => {
  let nextIndex = (index + 1) % slides.length;
  showSlide(nextIndex);
});

// Botón anterior
document.querySelector(".prev").addEventListener("click", () => {
  let prevIndex = (index - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
});

// Auto play
function startAutoPlay() {
  interval = setInterval(() => {
    let nextIndex = (index + 1) % slides.length;
    showSlide(nextIndex);
  }, 5000);
}

function stopAutoPlay() {
  clearInterval(interval);
}

startAutoPlay();

// Pausar en hover
document.querySelector(".carousel-container").addEventListener("mouseenter", stopAutoPlay);
document.querySelector(".carousel-container").addEventListener("mouseleave", startAutoPlay);


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

var swiper = new Swiper(".aseguradorasSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    1024: { slidesPerView: 5, spaceBetween: 40 }
  }
});

