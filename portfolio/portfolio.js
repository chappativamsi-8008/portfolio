/* LOADER*/

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  loader.style.opacity = "0";

  loader.style.visibility = "hidden";

  loader.style.transition = "0.6s";
});
/*STICKY NAVBAR*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

/* MOBILE MENU*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/*  CLOSE MENU AFTER CLICK*/

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
/* TYPING ANIMATION */

const typingText = document.getElementById("typing");

const words = [
  "Software Developer",

  "Python Developer",

  "Frontend Developer",

  "Problem Solver",
];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;

      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();
/*SCROLL REVEAL ANIMATION*/

const revealElements = document.querySelectorAll(
  ".section-title, .skill-card, .info-card, .stat-box, .project-container, .timeline-item, .highlight-card, .contact-info, .contact-form",
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/*  ACTIVE NAVBAR */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
/* SCROLL TO TOP*/

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.pointerEvents = "auto";
    scrollTopBtn.style.transform = "translateY(0)";
  } else {
    scrollTopBtn.style.opacity = "0";
    scrollTopBtn.style.pointerEvents = "none";
    scrollTopBtn.style.transform = "translateY(20px)";
  }
});
