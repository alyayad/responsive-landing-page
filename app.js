const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar_menu'); 
const navlogo = document.querySelector('#navbar_logo');

// display menubar
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
}
menu.addEventListener('click',mobileMenu);






