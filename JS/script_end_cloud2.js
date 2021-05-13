
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

}