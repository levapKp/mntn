const mobileBtn = document.querySelector('.header-burger');
const mobileNav = document.querySelector('.header-mobile');

mobileBtn.addEventListener('click', function () {
  mobileNav.classList.toggle('header-mobile-active');
  mobileBtn.classList.toggle('header-burger-close');
})