let header = document.querySelector('header');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
});
