<<<<<<< HEAD:JS/script_index_sun.js

var myVarSun = setInterval(myTimerSun, 200);

$(document).ready(function() {
    $('#sun').fadeIn(500);
});

function myTimerSun() {

    $(document).ready(function() {
        $('#sun').animate({
            right: '25px',
            top: '25px',
            width: '325px',
            height: '525px'
        }, 750);
        $('#sun').animate({
            right: '0px',
            top: '0px',
            width: '370px',
            height: '575px'
        }, 1250);
    });

=======

var sun = document.querySelector(".sun");
var moveSun = 40;
var myVarSun = setInterval(myTimerSun, 200);
var directionSun = "up";

window.addEventListener("load", () => {
    sun.style.position = "absolute";
    sun.style.right = 0;
    sun.style.top = 0;
});

function myTimerSun() {

    if(directionSun == "up") {
        sun.style.top = parseInt(sun.style.top) - moveSun + "px";

        if(parseInt(sun.style.top) == -400) {
            directionSun = "down";
        }
    }

    if((directionSun == "down")) {
        sun.style.top = parseInt(sun.style.top) + moveSun + "px";
     
        if(parseInt(sun.style.top) == -240) {
            directionSun = "up";
        }
    }
>>>>>>> 6b83958e72d3c140d39c72c836139ead64202874:js/script_index_sun.js
}