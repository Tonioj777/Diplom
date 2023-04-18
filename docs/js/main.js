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


$(function () {
    $('.testimonials__slider').slick({
        arrows: true,
        dots: false,
        speed: 800,
        infinite: false,
        slidesToShow: 1,
        // adaptiveHeight: true,
        

    })





})
$(document).ready(function () {
    $('.testimonials__slide-link').fancybox({
        width: 740,
        height: 360,
    });
});