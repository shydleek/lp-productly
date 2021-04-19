$(function(){
    $('.strategies__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 781,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.menu__btn').on('click', function(){
        $('.header__list').toggleClass('header__list--active')
    });

});