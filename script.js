let navbar = document.querySelector('.header .navbar');
let menubtn = document.querySelector('#menu-btn');

menubtn.onclick = () =>{
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation:{
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    }
});