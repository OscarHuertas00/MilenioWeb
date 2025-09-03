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





document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
