// Navbar starts
let myNav = document.getElementById('Navbar');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
        myNav.classList.add('navbar-scroll');
    } else {
        myNav.classList.remove('navbar-scroll');
    }
};
// Navbar ends