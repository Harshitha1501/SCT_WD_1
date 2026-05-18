// script.js

// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", function(){

  const navbar = document.querySelector(".navbar");

  navbar.classList.toggle("scrolled", window.scrollY > 50);

});


//Moblie menu 

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});