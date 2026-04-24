const mobileButton = document.querySelector("[data-mobile-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (mobileButton && mobileMenu) {
  mobileButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

const slides = Array.from(document.querySelectorAll("[data-hero-slide]"));
const dots = Array.from(document.querySelectorAll("[data-hero-dot]"));
let currentSlide = 0;

function showSlide(index) {
  if (!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentSlide);
  });
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentSlide);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

if (slides.length) {
  showSlide(0);
  setInterval(() => showSlide(currentSlide + 1), 5200);
}

document.querySelectorAll("[data-faq-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    item?.classList.toggle("open");
  });
});
