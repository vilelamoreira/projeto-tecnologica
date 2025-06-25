// futuristic.js

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  // Fade-in animado quando entra na viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => {
    card.classList.add("pre-fade");
    observer.observe(card);
  });

  // Hover glow dinâmico
  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const { offsetX, offsetY } = e;
      card.style.setProperty('--x', `${offsetX}px`);
      card.style.setProperty('--y', `${offsetY}px`);
    });
  });
});