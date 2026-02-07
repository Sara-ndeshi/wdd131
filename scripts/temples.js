// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.querySelector('ul').classList.toggle('show');
  hamburger.textContent = hamburger.textContent === "☰" ? "✖" : "☰";
});

// Footer year and last modified
const yearSpan = document.getElementById('currentyear');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const lastMod = document.getElementById('lastModified');
if (lastMod) lastMod.textContent = `Last modified: ${document.lastModified}`;

// --- Temple Data Array ---
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/7210c09be95c4474772ae52e5f31c23c08112784/full/640%2C/0/default"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/d9c313eb96c173d0ad32f21f461ce994129c9e8d/full/640%2C/0/default"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 22",
    area: 6861,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/9f541175bcfc11eca77eeeeeac1ea52488fbff2f/full/640%2C/0/default"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://churchofjesuschrist.org/imgs/9bbc2a18ee4b11eb90efeeeeac1e68824aabff60/full/640%2C/0/default"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/b800f5245ce311fb987aabd6ee6b2230b7c8b04f/full/640%2C/0/default"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/2dbb637a01da374959e9b50dd072294645917ea4/full/640%2C/0/default"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 12500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca/full/640%2C/0/default"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 105000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-8154-thumb.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 9500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/640%2C/0/default"
  },
  {
    templeName: "Sydney Australia",
    location: "Carlingford, New South Wales, Australia",
    dedicated: "1984, September, 20",
    area: 85000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/8dd109cda45dda79ebe30b0461d5d0afba41f653/full/640%2C/0/default"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/640%2C/0/default"
  }
];

// Select DOM elements for temple cards
const templeGrid = document.getElementById("templeGrid");
const filterTitle = document.getElementById("filter-title");
const navLinks = document.querySelectorAll("#nav-menu a");

// Function to create a temple card
function createTempleCard(temple) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy"; // Native lazy loading
  figure.appendChild(img);

  const caption = document.createElement("figcaption");
  caption.innerHTML = `
    <strong>${temple.templeName}</strong><br>
    Location: ${temple.location}<br>
    Dedicated: ${temple.dedicated}<br>
    Area: ${temple.area.toLocaleString()} sq ft
  `;
  figure.appendChild(caption);

  templeGrid.appendChild(figure);
}

// Function to display temples based on filter
function displayTemples(filter = "all") {
  templeGrid.innerHTML = ""; // Clear previous temples

  let filteredTemples = temples;

  switch (filter) {
    case "old":
      filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
      break;
    case "new":
      filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      break;
    case "large":
      filteredTemples = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filteredTemples = temples.filter(t => t.area < 10000);
      break;
  }

  filterTitle.textContent = filter.charAt(0).toUpperCase() + filter.slice(1);
  filteredTemples.forEach(createTempleCard);
}

// Add event listeners to nav links
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = link.dataset.filter;
    displayTemples(filter);
  });
});

// Initial load: show all temples
displayTemples();
