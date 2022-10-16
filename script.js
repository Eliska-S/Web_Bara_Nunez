let menu = document.querySelector('.header__hamburger-menu');
let nav = document.querySelector('.header__nav');

menu.addEventListener ('click', () => {
    menu.classList.toggle('open');
    nav.classList.toggle('open');
});