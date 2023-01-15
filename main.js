'use strict';


// navbar 스크롤시 배경색 변경 효과
const navbar = document.querySelector('#navbar');
const navHeight = navbar.getBoundingClientRect().height;

function scrollHandler () {
    const currentHeight = window.scrollY;
    // console.log('currentHeight', currentHeight);
    // console.log('navHeight', navHeight);

    if (currentHeight > navHeight) {
        navbar.classList.add('navbar-dark');
    } else navbar.classList.remove('navbar-dark');

}

document.addEventListener('scroll', scrollHandler);