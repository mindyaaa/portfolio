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

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth", block: "nearest"});
    

}

navbarMenu.addEventListener('click', clickHandler);

// Contact버튼 클릭시 해당 영역 이동
const contactMe = document.querySelector('.home__contact');

function contactMeHandler () {
    const scrollToContact = document.querySelector("#contact")
    scrollToContact.scrollIntoView({behavior:"smooth"});
}

contactMe.addEventListener('click', contactMeHandler);