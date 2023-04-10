$(function () {

    $(".rateYo").rateYo({
        starWidth: "35px",
        normalFill: "#D7D1C7",
        ratedFill: "#FFB648",
        // rating: 4.5,
        // readOnly: true
    });


    // -------------------------------------------------------------------
    var mixer = mixitup('.blog__list')

    $('.button__item-btn').on('click', function () {
        $('.button__item-btn').removeClass('button__item-btn--active')
        $(this).addClass('button__item-btn--active')
    })

    // -----------------------------------------------------------------------

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        waitForAnimate: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint:900,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1
              }
            }
          ]
    })

    $('.slider__arrows-prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.slider__arrows-next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    // ----------------------------------------------------------------------

    // $('.faq__acc-link').on('click', function (e) {
    //     e.preventDefault()
    //     $(this).toggleClass('faq__acc-link--active')
    //     $(this).children('.faq__acc-text').slideToggle()
    // })
    $('.faq__acc-link').on('click', function(e) {
        e.preventDefault()
        if ($(this).hasClass('faq__acc-link--active')) {
          $(this).removeClass('faq__acc-link--active')
          $(this).children('.faq__acc-text').slideUp(1000)
        } else {
          $('.faq__acc-link').removeClass('faq__acc-link--active')
          $('.faq__acc-text').slideUp(1000)
          $(this).addClass('faq__acc-link--active')
          $(this).children('.faq__acc-text').slideDown(1000)
        }
      })

    // --------------------------------------------------------------------------------
    $(".header__nav-list a, .header__buttons, .process__button, .cta__btn, .footer__nav-list a, .footer__logo").on("click", function(e) {
        e.preventDefault()
        var id  = $(this).attr('href'),
        top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 1500)
      })

    setInterval(() => {
        if ($(window).scrollTop() > 0 ) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 100);

    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top-open')
        $('.overlay').toggleClass('overlay--show')
        $('.burger').toggleClass('open')
    
    })



});
// ---------------------------------------

var map;
ymaps.ready(init);
function init() {
    map = new ymaps.Map('map', {
        center: [45.352016, 36.472924],
        zoom: 16,
    })
    map.controls.remove('trafficControl')
    map.controls.remove('geolocationControl')
    map.controls.remove('rulerControl')
    map.behaviors.disable('scrollZoom')
    map.controls.remove('searchControl')
    let placemark = new ymaps.Placemark([45.352016, 36.472925],)
    map.geoObjects.add(new ymaps.Placemark([45.352016, 36.472925]))
    
}
// ----------------------------------------------

// var $page = $('html, body');
// $('a[href*="#"]').click(function() {
//     $page.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 1200);
//     return false;
// });

// -------------------------------------------------
