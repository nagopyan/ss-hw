
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
}