function highlightCurrentPage() {
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(link => {
    const linkPath = link.getAttribute('href');
    // Remove 'current-page' class from all links first
    link.classList.remove('current-page');
    // Check if link matches current page (including index.html vs eazys_cars.html)
    if (currentPath === linkPath || 
        (currentPath === 'index.html' && linkPath === 'eazys_cars.html') ||
        (currentPath === '' && linkPath === 'eazys_cars.html')) {
      link.classList.add('current-page');
    }
  });
}

window.onload = function() {
  checkLogin(); // Your existing function
  highlightCurrentPage(); // Add this line
};