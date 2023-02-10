const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuIcon = document.getElementById('close-menu');

menuIcon.addEventListener('click', () => {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
  }
});

closeMenuIcon.addEventListener('click', () => {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  }
});

mobileMenu.addEventListener('click', () => {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  }
});
