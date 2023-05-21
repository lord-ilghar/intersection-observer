const cards = document.getElementsByClassName("card");
console.log(cards);
const delay = 1;
const observer = new IntersectionObserver(
  (ent) => {
    ent.forEach((i) => {
      if (!i.isIntersecting) return;
      if (i.target.classList.contains("fade-in-animation")) {
        i.target.style.animation = `fade-in ${delay}s`;
        i.target.style.opacity = 1;
      }
      if (i.target.classList.contains("transform-from-right-animation")) {
        i.target.style.animation = `transform-from-right ${delay + 0.5}s`;
        i.target.style.opacity = 1;
      }
      if (i.target.classList.contains("transform-from-left-animation")) {
        i.target.style.animation = `transform-from-left ${delay + 0.5}s`;
        i.target.style.opacity = 1;
      }
      if (i.target.classList.contains("transform-from-top-animation")) {
        i.target.style.animation = `transform-from-top ${delay}s`;
        i.target.style.opacity = 1;
      }
      if (i.target.classList.contains("transform-from-bottom-animation")) {
        i.target.style.animation = `transform-from-bottom ${delay}s`;
        i.target.style.opacity = 1;
      }
    });
  },
  { threshold: 1 }
);
for (let i = 0; i < cards.length; i++) {
  observer.observe(cards[i]);
}
