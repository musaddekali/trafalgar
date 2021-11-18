const header = document.querySelector('.header');
const hamburger = document.querySelector('.nav-menu-hamburger');
const navMenuContent = document.querySelector('.nav-menu ul');
const navLinks = navMenuContent.querySelectorAll('li a');


let isNavMenuOpen = false;

// header sticky in on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

if (window.scrollY > 100) {
    header.classList.add('header-scrolled');
}

// open navMenuContent and active hamburger

const openNavMenu = () => {
    hamburger.classList.add('open');
    navMenuContent.classList.add('open');
    document.body.classList.add('mobile-nav-active');
    header.classList.add('header-scrolled');
    isNavMenuOpen = true;
}

const closeNavMenu = () => {
    hamburger.classList.remove('open');
    navMenuContent.classList.remove('open');
    document.body.classList.remove('mobile-nav-active');
    isNavMenuOpen = false;
}

hamburger.addEventListener('click', () => {
    if (!isNavMenuOpen) {
        openNavMenu();
    } else {
        closeNavMenu();
    }
});


navLinks.forEach(link => link.addEventListener('click', function () {
    closeNavMenu();
    // add active class in navlink 
    const currentLink = document.querySelectorAll('.nav-menu a.active');
    if (currentLink.length > 0) {
        currentLink[0].classList.remove('active');
    }
    this.classList.add('active');
}));

