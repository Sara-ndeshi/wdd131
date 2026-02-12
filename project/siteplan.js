// Show wireframe sketch + link dynamically
function showWireframe(type) {
  const container = document.getElementById('wireframe-container');
  container.classList.remove('hidden');

  if (type === 'mobile') {
    container.innerHTML = `
      <h3>Mobile Wireframe Sketch</h3>
      <ul>
        <li>Header + Logo  + menu </li>
        <li>Hero / Intro</li>
        <li>Attractions Section</li>
        <li>Adventure Activities</li>
        <li>Restaurants & Hotels</li>
        <li>Gallery</li>
        <li>Contact Form</li>
        <li>Footer</li>
      </ul>
      <p>Or view the live Wireframe.cc version:</p>
      <a href="https://wireframe.cc/prb6Up" target="_blank">Mobile Wireframe on Wireframe.cc</a>
    `;
  } else if (type === 'desktop') {
    container.innerHTML = `
      <h3>Desktop Wireframe Sketch</h3>
      <ul>
        <li>Header + Navigation + Logo</li>
        <li>Hero Banner</li>
        <li>Intro Section (2 columns)</li>
        <li>Feature Section (3 columns: Attractions, Activities, Dining)</li>
        <li>Gallery Section</li>
        <li>Contact / Info Section</li>
        <li>Footer</li>
      </ul>
      <p>Or view the live Wireframe.cc version:</p>
      <a href="https://wireframe.cc/2WhJ8M" target="_blank">Desktop Wireframe on Wireframe.cc</a>
    `;
  }
}

// Show live project link dynamically
function showLiveProject() {
  const container = document.getElementById('live-project-container');
  container.classList.remove('hidden');
  container.innerHTML = `
    <a href="" target="_blank">
      Visit Swakopmund Live Project
    </a>
  `;
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
