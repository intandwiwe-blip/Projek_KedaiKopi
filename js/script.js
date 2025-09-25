/* tadi nya ada jadi gaada, gaada jadi ada*/
// Toggle class active 
const navbarNav = document.querySelector('.navbar-nav');
/* Ketika Hamburger menu di klik */
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

/*Agar ga harus balik pencet hamburger menu untuk menutup nya */
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});