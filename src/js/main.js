import '../scss/main.scss';

// hamburger menu 
const menu = document.querySelector('.hamburger-menu--js');
menu.addEventListener('click', (e) => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--close');
    nav.classList.toggle('navigation--add-top-padding');
})

