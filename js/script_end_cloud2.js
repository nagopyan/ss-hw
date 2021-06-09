<<<<<<< HEAD:JS/script_end_cloud2.js

var myVar = setInterval(myTimer2, 250); // refresh speed

$(document).ready(function() {
    $('#cloud2').fadeIn(1250);
});

function myTimer2() {

    $(document).ready(function() {
        $('#cloud2').animate({
            top: '50px',
        }, 2000);
        $('#cloud2').animate({

            top: '0px',
        }, 1500);
    });

=======

var cloud2 = document.querySelector(".cloud2"); //attach to class
var moveBy2 = 10; // change amount
var myVar = setInterval(myTimer2, 250); // refresh speed
var direction = "down"; //vertical flag


//attach to load event
window.addEventListener("load", () => {
    cloud2.style.position = "absolute";
    cloud2.style.left = 0;
    cloud2.style.top = 0;
});


//runtime loop
function myTimer2() {

    //vertical control starts here

    if((direction == "down")) {
        cloud2.style.top = parseInt(cloud2.style.top) + moveBy2 + "px";
     
        if(parseInt(cloud2.style.top) == 150) {
            direction = "up";
        }
    }

    if(direction == "up") {
        cloud2.style.top = parseInt(cloud2.style.top) - moveBy2 + "px";

        if(parseInt(cloud2.style.top) == 50) {
            direction = "down";
        }
    }

>>>>>>> 6b83958e72d3c140d39c72c836139ead64202874:js/script_end_cloud2.js
}