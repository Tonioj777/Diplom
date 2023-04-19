// --------------range slider---------------------
var slider = document.getElementById("slider");
var minval = slider.min = 10;
var maxval = slider.max = 300;
var selector = document.getElementById("selector");
var selectvalue = document.getElementById("selectvalue");
var progressbar = document.getElementById("progressbar");

selectvalue.innerHTML = slider.value;

slider.oninput = function () {
    selectvalue.innerHTML = this.value;
    var percent = (this.value - minval) / (maxval - minval) * 100
    selector.style.left = percent + "%";
    progressbar.style.width = percent + "%";
}

// -------------------------------input phone---------------------------
var input = document.querySelector("#phone");
window.intlTelInput(input, ({
    onlyCountries: ["ru", "by", "ua", "kz"],
    separateDialCode: true,
    initialCountry: "RU",
    placeholderNumberType: "MOBILE",
    utilsScript: "/js/utils.js",

}));

// ----------------------------slick slider---------------
$(function () {
    $('.testimonials__slider').slick({
        arrows: true,
        dots: false,
        speed: 800,
        infinite: false,
        slidesToShow: 1,
        // adaptiveHeight: true,
    })

// -----------------------------accordeon------------------------------
    $('.questions__accordeon-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('questions__accordeon-link--active')) {
            $(this).removeClass('questions__accordeon-link--active')
            $(this).children('.questions__accordeon-text').slideUp(500)
        } else {
            $('.questions__accordeon-link').removeClass('questions__accordeon-link--active')
            $('.questions__accordeon-text').slideUp(500)
            $(this).addClass('questions__accordeon-link--active')
            $(this).children('.questions__accordeon-text').slideDown(500)
        }
    })

    $('.testimonials__slide-link').fancybox({
        width: 740,
        height: 360,
    });



    
})


// $(document).ready(function () {
    
// });


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