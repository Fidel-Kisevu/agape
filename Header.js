
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const menu = document.getElementById('menu-open');

  // Open menu when the menu icon is clicked
  menuToggle.addEventListener('click', function() {
    menu.style.display = 'block';
    menuToggle.style.display = 'none';
    closeMenu.style.display = 'inline-block';
  });

  // Close menu when the close icon is clicked
  closeMenu.addEventListener('click', function() {
    menu.style.display = 'none';
    menuToggle.style.display = 'inline-block';
    closeMenu.style.display = 'none';
  });
});