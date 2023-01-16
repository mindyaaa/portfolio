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
let currentMenu ;

function clickHandler (event) {
    const target = event.target;

    // console.log(currentMenu);
    if(currentMenu) {
        currentMenu.classList.remove('active');
    }
    target.classList.add('active');
    currentMenu = target;


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

document.addEventListener('scroll', arrowUpscrollHandler);


// My Work filtering
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
const allFilter = document.querySelector('.category__btn')

let currentFilter ;

function workBtnClickHandler (e) {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    // console.log(filter);

    if (currentFilter) {
        currentFilter.classList.remove('active')
    }

    allFilter.classList.remove('active')
    e.target.classList.add('active');
    currentFilter = e.target;

    if (filter === null) {
        return;
    }

    projectContainer.classList.add('anim-out');

    setTimeout(() => {
        projects.forEach((i) => {
            // console.log(i.dataset.type);
            if (filter === '*' || filter === i.dataset.type) {
                i.classList.remove('invisible');
            } else i.classList.add('invisible');
        });
        projectContainer.classList.remove('anim-out');
    }, 300)

}

workBtnContainer.addEventListener('click', workBtnClickHandler)