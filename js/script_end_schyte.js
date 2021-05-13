
var schyte = document.querySelector(".schyte"); //attach to class
var moveByS = 20; // change amount
var myVar = setInterval(myTimer3, 750); // refresh speed
var directionS = "down"; //vertical flag

window.addEventListener("load", () => {
    schyte.style.position = "absolute";
    schyte.style.left = 1;
    schyte.style.top = 0;
});

function myTimer3() {

    if((directionS == "down")) {
        schyte.style.top = parseInt(schyte.style.top) + moveByS + "px";
     
        if(parseInt(schyte.style.top) == 560) {
            directionS = "up";
        }
    }

    if(directionS == "up") {
        schyte.style.top = parseInt(schyte.style.top) - moveByS + "px";

        if(parseInt(schyte.style.top) == 520) {
            directionS = "down";
        }
    }

}