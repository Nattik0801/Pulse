$(document).ready(function () {
    $('.carousel__inner').slick(
        {
            speed: 1200,
            // adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src=img/left.svg></button>',
            nextArrow: '<button type="button" class="slick-next"><img src=img/right.svg></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        arrows: true
                    }
                }
            ]
        }
    );

    // работа с табами

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    // работа с кнопками подробнее-назад
    // $('.catalog-item__link').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // });

    // $('.catalog-item__back').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })

    // });

    //оптимизированный код с кнопками
    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

});