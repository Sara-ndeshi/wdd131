function showWireframe(type) {
  const container = document.getElementById('wireframe-container');
  container.classList.remove('hidden');

  if (type === 'mobile') {
    container.innerHTML = `
      <h3>Mobile Wireframe</h3>
      <p>Click the link below to view the mobile wireframe on Wireframe.cc:</p>
      <a href="https://wireframe.cc/prb6Up" target="_blank">View Mobile Wireframe</a>
    `;
  } else if (type === 'desktop') {
    container.innerHTML = `
      <h3>Desktop Wireframe</h3>
      <p>Click the link below to view the desktop wireframe on Wireframe.cc:</p>
      <a href="https://wireframe.cc/2WhJ8M" target="_blank">View Desktop Wireframe</a>
    `;
  }
}
