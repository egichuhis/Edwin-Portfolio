// const showMobileMenu = () => {
//   const menu = document.getElementById('mobile-menu');
//   menu.style.display = 'block';
// };

// const closeMobileMenu = () => {
//   const menu = document.getElementById('mobile-menu');
//   menu.style.display = 'none';
// };

const menu = document.getElementById('mobile-menu');
menu.addEventListener('click', () => {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});
