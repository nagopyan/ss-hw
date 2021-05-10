
var circle = document.querySelector(".ball"); //attach to class
var moveBy = 10; // change amount
var myVar = setInterval(myTimer, 50); // refresh speed
var direction = "right"; //horizontal flag
var direction2 = "down"; //vertical flag


//attach to load event
window.addEventListener("load", () => {
    circle.style.position = "absolute";
    circle.style.left = 0;
    circle.style.top = 0;
});


//runtime loop
function myTimer() {

    //horizontal control starts here
    if((direction == "right")) {
        circle.style.left = parseInt(circle.style.left) + moveBy + "px";
     
        if(parseInt(circle.style.left) == 350) {
            direction = "left";
        }
    }

    if(direction == "left") {
        circle.style.left = parseInt(circle.style.left) - moveBy + "px";

        if(parseInt(circle.style.left) == 100) {
            direction = "right";
        }
    }

    //vertical control starts here

    if((direction2 == "down")) {
        circle.style.top = parseInt(circle.style.top) + moveBy + "px";
     
        if(parseInt(circle.style.top) == 350) {
            direction2 = "up";
        }
    }

    if(direction2 == "up") {
        circle.style.top = parseInt(circle.style.top) - moveBy + "px";

        if(parseInt(circle.style.top) == 100) {
            direction2 = "down";
        }
    }

}
  
