
// Atlasa visus slaidus un pogas
const slides = document.querySelectorAll(".slide"); //iekavās ir klases nosaukums no HTML
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0; // sāk ar pirmo slaidu (indekss 0)

function showSlide(index) { //funkcijas apraksts
    // ja indekss pārsniedz diapazonu, apgriež atpakaļ
    if (index >= slides.length) { //slides.;length ir kopējais slaidu skaits listā
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // noņem "active" visiem
    slides.forEach(slide => slide.classList.remove("active"));
    // pievieno tikai pašreizējam
    slides[currentSlide].classList.add("active");
}

// Pogu klikšķi
nextBtn.addEventListener("click", () => showSlide(currentSlide + 1)); //funkijas izsaukums uz pogu klikšķi
prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));

setInterval(() => showSlide(currentSlide + 1), 5000);

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function showMenu() {
  navLinks.classList.add('active');
}

function hideMenu() {
  navLinks.classList.remove('active');
}

// Pele uz toggle pogas
menuToggle.addEventListener('mouseenter', showMenu);
menuToggle.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!navLinks.matches(':hover') && !menuToggle.matches(':hover')) hideMenu();
  }, 100);
});

// Pele uz pašas izvēlnes
navLinks.addEventListener('mouseenter', showMenu);
navLinks.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!navLinks.matches(':hover') && !menuToggle.matches(':hover')) hideMenu();
  }, 100);
});


