const contactBtn = document.querySelector(".contact-me");
const mainTextContainer = document.querySelector(".main-text-container");
const contactBtnContainer = document.querySelector(".contact-button");
const otherBtn = document.querySelector(".other-buttons");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav");

const main = document.querySelector("main");

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
  console.log(entry);
  if (!entry.isIntersecting) {
    console.log(nav);
    nav.classList.add("nav-sticky");
    console.log(navLinks);
    navLinks.forEach((nav) => nav.classList.add("nav-sticky-font"));
  } else {
    nav.classList.remove("nav-sticky");
    navLinks.forEach((nav) => nav.classList.remove("nav-sticky-font"));
  }
};
const mainObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  margin: "-30px",
});

mainObs.observe(main);

///////////////////////////////////////////////
