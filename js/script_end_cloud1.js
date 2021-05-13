
var circle = document.querySelector(".cloud1"); //attach to class
var moveBy = 10; // change amount
var myVar = setInterval(myTimer, 150); // refresh speed
var direction2 = "down"; //vertical flag


//attach to load event
window.addEventListener("load", () => {
    circle.style.position = "absolute";
    circle.style.left = 10;
    circle.style.top = 0;
});


//runtime loop
function myTimer() {

    //vertical control starts here

    if((direction2 == "down")) {
        circle.style.top = parseInt(circle.style.top) + moveBy + "px";
     
        if(parseInt(circle.style.top) == 150) {
            direction2 = "up";
        }
    }

    if(direction2 == "up") {
        circle.style.top = parseInt(circle.style.top) - moveBy + "px";

        if(parseInt(circle.style.top) == 50) {
            direction2 = "down";
        }
    }

}
