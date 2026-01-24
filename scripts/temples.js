const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.querySelector('ul').classList.toggle('show');
  hamburger.textContent = hamburger.textContent === "☰" ? "✖" : "☰";
});

const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastMod = document.getElementById('lastModified');
if (lastMod) {
  lastMod.textContent = `Last modified: ${document.lastModified}`;
}
