burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', () => {
    //For Visibility
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    //For hidding classes
    navbar.classList.toggle('h-nav-resp');
});