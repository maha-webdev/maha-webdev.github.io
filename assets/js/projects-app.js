// Mobile Nav Animation
const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  mobileNav.classList.toggle("nav-appear");
  document.body.classList.toggle("no-scroll");
});
