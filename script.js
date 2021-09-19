const contactBtn = document.querySelector(".contact-me");
const mainTextContainer = document.querySelector(".main-text-container");
const contactBtnContainer = document.querySelector(".contact-button");
const otherBtn = document.querySelector(".other-buttons");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav");

const main = document.querySelector("main");
const bankistWeb = document.querySelector(".bankist-web");
const projectImage = document.querySelector(".project-image");
const projectClicker = document.querySelector(".project-clicker");

const sections = document.querySelectorAll(".title");

//NAVIGATION////
//smooth scrolling

nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////////////////

///sticky nav/////
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("nav-sticky");
    navLinks.forEach((nav) => nav.classList.add("nav-sticky-font"));
  } else {
    nav.classList.remove("nav-sticky");
    navLinks.forEach((nav) => nav.classList.remove("nav-sticky-font"));
  }
};
const mainObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.05,
  // margin: "10px",
});

mainObs.observe(main);

///////////////////////////////////////////////

bankistWeb.addEventListener("click", function () {
  window.open("https://vytcka4.github.io/bankist-website/", "_blank");
});

projectImage.addEventListener("mouseover", function (e) {
  projectClicker.classList.remove("hidden");
  projectClicker.style.opacity = 1;
});
projectImage.addEventListener("mouseout", function (e) {
  projectClicker.classList.add("hidden");
  projectClicker.style.opacity = 0;
});
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

sections.forEach(function (section) {
  sectionObserver.observe(sections);
  section.classList.add("hidden");
});
