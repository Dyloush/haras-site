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
