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


// navbar 메뉴 클릭시 해당 메뉴로 이동
const navbarMenu = document.querySelector('.navbar__menu');

function clickHandler (event) {
    const target = event.target;
    target.classList.toggle('active');

    const link = target.dataset.link;
    // console.log(link);

    if (link == null) {
        return;
    }

    scrollIntoView(link);

}

navbarMenu.addEventListener('click', clickHandler);

// Contact버튼 클릭시 해당 영역 이동
const contactMe = document.querySelector('.home__contact');

function contactMeHandler () {
    scrollIntoView('#contact');
}

contactMe.addEventListener('click', contactMeHandler);

// 해당 메뉴 이동 공통 함수로 빼기
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector)
    scrollTo.scrollIntoView({behavior:'smooth', block:'nearest'});
}

// 스크롤 내릴 때 Home화면 투명하게 만들어주기
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

function homeScrollHandler() {
    const currentHeight = window.scrollY;
    
    if(currentHeight > navHeight) {
        home.style.opacity = (1 - currentHeight/homeHeight);
    } else {
        home.style.opacity = 1;
    }
}

document.addEventListener('scroll', homeScrollHandler)


// arrowUp
const arrowUp = document.querySelector('#arrowUp');

function arrowClickHandler() {
    scrollIntoView('#home');
}

arrowUp.addEventListener('click', arrowClickHandler);


function arrowUpscrollHandler () {
    if (window.scrollY > homeHeight/2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
}

document.addEventListener('scroll', arrowUpscrollHandler)