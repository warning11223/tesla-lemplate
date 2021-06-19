$(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
    })

    $('.header__btn').on('click',function () {
        $('.menu').toggleClass('menu__active')
    })

    $('.close__btn').on('click', function () {
        $('.menu').toggleClass('menu__active')
    })
});