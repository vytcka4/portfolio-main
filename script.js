const contactBtn = document.querySelector(".contact-me");
const mainTextContainer = document.querySelector(".main-text-container");
const contactBtnContainer = document.querySelector(".contact-button");
const otherBtn = document.querySelector(".other-buttons");

// contactBtn.addEventListener("click", function(){
//   mainTextContainer.classList.add("hidden");
//   contactBtnContainer.classList.add("hidden");
//   otherBtn.classList.add("hidden");
// })

//NAVIGATION////
//smooth scrolling

const nav = document.querySelector("nav");

nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////////////////
