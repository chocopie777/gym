import './libs.js';
import $ from "jquery";
import '../../node_modules/inputmask/dist/jquery.inputmask.js';

$('.reviews-slider').slick({
    arrows: false,
    fade: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
});

$('#phone').inputmask({"mask": "+7 (999) 999-99-99"});
$('#email').inputmask('email');

const burger = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu__list');
burger.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
})