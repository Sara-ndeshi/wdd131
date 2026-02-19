/* --- Data Array (Objects) --- */
const attractions = [
    { 
        id: 1, 
        name: "The Jetty", 
        type: "Landmark", 
        img: "images/jetty.webp", 
        desc: "Historic walkway stretching far over the Atlantic waves." 
    },
    { 
        id: 2, 
        name: "Dune 7", 
        type: "Adventure", 
        img: "images/dune7.webp", 
        desc: "Challenge yourself by climbing the highest dune in the area." 
    },
    { 
        id: 3, 
        name: "Marine Aquarium", 
        type: "Family", 
        img: "images/aquarium.webp", 
        desc: "Get an up-close look at the fascinating local sea life." 
    },
    { 
        id: 4, 
        name: "Skydiving", 
        type: "Adventure", 
        img: "images/skydiving.webp", 
        desc: "The ultimate adrenaline rush with a desert-meets-ocean view." 
    }
];

/* --- Page Initialization --- */
document.addEventListener("DOMContentLoaded", () => {
    // Set Footer Dates
    const yearSpan = document.querySelector("#year");
    const lastModSpan = document.querySelector("#lastUpdated");
    
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModSpan) lastModSpan.textContent = document.lastModified;

    // Load Attractions if on the Attractions page
    const container = document.querySelector("#activities");
    if (container) {
        displayAttractions(attractions);
        displayFavorites();
    }

    // Initialize Global Favorite Count (Nav Badge)
    updateFavCount();
});

/* --- Core Functions --- */

// 1. Display Function (DOM Interaction & Template Literals)
function displayAttractions(items) {
    const container = document.querySelector("#activities");
    if (!container) return;

    container.innerHTML = ""; // Clear existing content

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        
        // Exclusively using template literals for output
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" loading="lazy" width="400" height="250">
            <h3>${item.name}</h3>
            <p class="category">Category: ${item.type}</p>
            <p>${item.desc}</p>
            <button onclick="saveFavorite(${item.id})">Add to Favorites ❤️</button>
        `;
        container.appendChild(card);
    });
}

// 2. Filtering Function (Array Method & Conditional Branching)
function filterActivities(type) {
    // If 'all' is passed, show everything, otherwise filter by type
    const filtered = type === 'all' 
        ? attractions 
        : attractions.filter(attr => attr.type.toLowerCase() === type.toLowerCase());
    
    displayAttractions(filtered);
}

// 3. LocalStorage Logic
function saveFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem("swakopFavs")) || [];
    
    if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem("swakopFavs", JSON.stringify(favorites));
        
        // Visual feedback
        updateFavCount();
        displayFavorites();
        alert(`Activity added to your favorites!`);
    } else {
        alert(`This activity is already in your favorites list.`);
    }
}

// 4. Display Favorites (DOM Manipulation & Objects)
function displayFavorites() {
    const favListContainer = document.querySelector("#favorites");
    if (!favListContainer) return;

    const favorites = JSON.parse(localStorage.getItem("swakopFavs")) || [];
    
    if (favorites.length === 0) {
        favListContainer.innerHTML = `<p>You haven't saved any favorites yet.</p>`;
        return;
    }

    // Filter our main array to find the objects that are in our favorites list
    const favItems = attractions.filter(attr => favorites.includes(attr.id));

    favListContainer.innerHTML = "";
    favItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "fav-item";
        div.innerHTML = `
            <span>${item.name} (${item.type})</span>
            <button onclick="removeFavorite(${item.id})">Remove</button>
        `;
        favListContainer.appendChild(div);
    });
}

function removeFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem("swakopFavs")) || [];
    favorites = favorites.filter(favId => favId !== id);
    localStorage.setItem("swakopFavs", JSON.stringify(favorites));
    
    updateFavCount();
    displayFavorites();
}

function updateFavCount() {
    const countDisplay = document.querySelector("#fav-count");
    if (countDisplay) {
        const favorites = JSON.parse(localStorage.getItem("swakopFavs")) || [];
        countDisplay.textContent = favorites.length;
    }
}
