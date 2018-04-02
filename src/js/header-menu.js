let navButton=document.querySelector('.menu-button');
let navList=document.querySelector('.header__vertical-menu');

navButton.addEventListener('click', menuDisplay);

let navLink=document.querySelectorAll(".header-nav__item_vert");
console.log(navLink);

for (var i=0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', menuDisplay);
}


function menuDisplay(){
    navList.classList.toggle("menu-show");
    navButton.classList.toggle("menu-button_rotate");
}

