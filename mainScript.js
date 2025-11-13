
// Atlasa visus slaidus un pogas
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;
let slideInterval; // šeit glabāsim intervāla ID

function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach(slide => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");
}

function startAutoSlide() {
  slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Pogu klikšķi
nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));

// Aptur ritināšanu, kad pele uz attēla
slides.forEach(slide => {
  slide.addEventListener("mouseenter", stopAutoSlide);
  slide.addEventListener("mouseleave", startAutoSlide);
});

startAutoSlide();


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

// Izveido pogu
let upButton = document.createElement('button');
upButton.innerText = '↑';
upButton.classList.add('up-button');

// Pamatstils
Object.assign(upButton.style, {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '12px 16px',
  backgroundColor: 'white',
  border: '1px solid #ddd',
  borderRadius: '50%',
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
  fontSize: '18px',
  transition: 'opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
  zIndex: '1000',
  opacity: '0',
  pointerEvents: 'none' // nepieļauj klikšķus, kamēr paslēpta
});

// Hover efekts
upButton.addEventListener('mouseenter', () => {
  upButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.25)';
  upButton.style.transform = 'translateY(-2px)';
});
upButton.addEventListener('mouseleave', () => {
  upButton.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.15)';
  upButton.style.transform = 'translateY(0)';
});

// Klikšķis — ritina uz augšu
upButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.body.appendChild(upButton);

// Ritināšanas loģika
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    upButton.style.opacity = '1';
    upButton.style.pointerEvents = 'auto';
  } else {
    upButton.style.opacity = '0';
    upButton.style.pointerEvents = 'none';
  }
});



