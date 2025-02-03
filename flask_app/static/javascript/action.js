// Smooth Scroll & Parallax Effects
gsap.registerPlugin(ScrollTrigger);

gsap.to("body", {
  scrollTo: 0,
  duration: 1,
  ease: "power2.inOut",
});

gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.3,
  ease: "none",
});

// Scroll-Based Animations
gsap.from(".feature-cards .card", {
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
});

gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
});

// Micro-Interactions & Hover Effects
const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 500);
  });
});

// Interactive Cursor Effects
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

const hoverElements = document.querySelectorAll("a, button");

hoverElements.forEach(element => {
  element.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
  });
  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});