'use strict';

window.addEventListener("scroll", () => {
  document.querySelector(".header").classList.toggle("window-scrolled", window.scrollY > 100);
})


const closeBtn = document.querySelector(".menu-close-btn");
const openBtn = document.querySelector(".menu-open-btn");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");

closeBtn.addEventListener("click", () => {
  navbar.style.display = "none";
  openBtn.style.display = "block";

})

openBtn.addEventListener("click", () => {
  navbar.style.display = "grid";
  openBtn.style.display = "none";
  
});

/*

const navElemArr = [openBtn, closeBtn, overlay];

for (let i = 0; i < navElemArr.length; 1++) {
  navElemArr[i].addEventListener("click", function () {


    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}


const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  window.scrollY > 20 ? header.classList.add("active") : header.classList.remove("active")
})

 */

const goTop = document.querySelector(".go-top");

window.addEventListener("scroll", () => {
  goTop.classList.toggle("active", window.scrollY > 200);
})
/*
window.addEventListener("scroll", () => {
  window.scrollY > 100 ? goTop.classList.add("active") : goTop.classList.remove("active");
})*/

/*window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    goTop.classList.add("active");
  } else{
    goTop.classList.remove("active");
  }
})*/