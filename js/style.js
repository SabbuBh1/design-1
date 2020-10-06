var togglebtn = document.getElementById('togglebtn');
var dropdowm = document.getElementById('dropdown');

togglebtn.addEventListener('click', function () {
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
})


$(".navbars a").on('click', function () {
    $('.navbars').hide(1000);
});


// var search = $('#search');
// var check = $('#check');

// search.on('click', function () {
//     check.fadeToggle();

// });


AOS.init();

var toggelbutton = $('#toggelbutton');
var toggelbttn = $('#toggelbttn');

toggelbutton.on('click', function () {
    toggelbttn.fadeToggle();

})
