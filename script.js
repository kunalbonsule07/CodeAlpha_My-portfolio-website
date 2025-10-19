document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a'); // 👈 select all <a> tags

  // Toggle menu open/close
  hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('open');
  });

  // Close menu when any link is clicked
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburgerMenu.classList.remove('open');
    });
  });
});