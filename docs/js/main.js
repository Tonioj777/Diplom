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
    onlyCountries: ["ru", "by","ua", "kz"],
    separateDialCode: true,
    initialCountry: "RU",
    placeholderNumberType: "MOBILE",
    utilsScript: "/js/utils.js",

}));
$('#phone').intlTelInput({
  
    
})

