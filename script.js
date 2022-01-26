const contactBtn = document.querySelector(".contact-me");
const mainTextContainer = document.querySelector(".main-text-container");
const contactBtnContainer = document.querySelector(".contact-button");
const otherBtn = document.querySelector(".other-buttons");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav");

const main = document.querySelector("main");
const bankistWeb = document.querySelector(".bankist-web");
const projectImage = document.querySelectorAll(".project-image");
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

// console.log(projectClicker);

// console.log(projectImage.target);

// projectImage.target.addEventListener("mouseover", function (e) {
//   if (projectClicker.classList.contains("hidden"))
//     projectClicker.classList.remove("hidden");
//   projectClicker.style.opacity = 1;
// });

console.log(projectImage);

// projectImage.forEach(function (item) {
//   console.log(item.target);
//   item.addEventListener("mouseover", function (e) {
//     if (item.target.firstChild.classList.contains("hidden"))
//       item.target.firstChild.classList.remove("hidden");
//     // projectClicker.style.opacity = 1;
//   });
// });
// projectImage.forEach(function (item) {
//   item.addEventListener("mouseout", function (e) {
//     if (!item.target.firstChild.classList.contains("hidden"))
//       item.target.firstChild.classList.add("hidden");
//     // projectClicker.style.opacity = 0;
//   });
// });

function revealSection(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

sections.forEach(function (section) {
  sectionObserver.observe(sections);
  section.classList.add("hidden");
});
