// Menu mobile
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Année dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

// Galerie : affichage des photos en grand (lightbox)
const galleryLinks = Array.from(document.querySelectorAll("#gallery a"));
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
let currentIndex = 0;

function showPhoto(index) {
  currentIndex = (index + galleryLinks.length) % galleryLinks.length;
  const link = galleryLinks[currentIndex];
  lightboxImg.src = link.href;
  lightboxImg.alt = link.querySelector("img").alt;
  lightbox.hidden = false;
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = "";
}

galleryLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPhoto(index);
  });
});

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", () => showPhoto(currentIndex - 1));
document.getElementById("lightboxNext").addEventListener("click", () => showPhoto(currentIndex + 1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (lightbox.hidden) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showPhoto(currentIndex - 1);
  if (event.key === "ArrowRight") showPhoto(currentIndex + 1);
});

// Formulaire de contact
// NOTE: un site statique ne peut pas envoyer d'email directement.
// Pour recevoir les messages, connectez ce formulaire à un service comme
// Formspree (https://formspree.io) ou EmailJS, puis remplacez la logique ci-dessous.
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent =
    "Merci pour votre message ! (Formulaire à connecter à un service d'envoi d'email, voir js/script.js)";
  contactForm.reset();
});
