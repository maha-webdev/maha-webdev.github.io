// Mobile Nav Animation
const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");
const intro = document.querySelector(".intro");

burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  mobileNav.classList.toggle("nav-appear");
  intro.classList.toggle("invisible");
  document.body.classList.toggle("no-scroll");
});

// GSAP Animation
const tl = gsap.timeline({ duration: 1, ease: "Power2" });

tl.from(".main-nav", {
  y: -100,
})
  .from(".nav-logo", {
    opacity: 0,
  })
  .from(
    ".nav-links",
    {
      opacity: 0,
    },
    "-=0.5"
  )
  .from(".intro-title", {
    x: -200,
    opacity: 0,
  })
  .from(
    ".intro-subtitle",
    {
      x: -200,
      opacity: 0,
    },
    "-=0.5"
  )
  .from(".intro-button", {
    y: 100,
    opacity: 0,
  });

// ScrollTrigger Animation
gsap.registerPlugin(ScrollTrigger);

gsap.from("#selling-point", {
  backgroundPosition: "center bottom -300px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#main-footer",
    start: "top 100%",
  },
});

gsap.from("#main-footer", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#main-footer",
    start: "top 90%",
  },
});
