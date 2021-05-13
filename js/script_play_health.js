
let thirst = document.getElementById("thirst");
var hunger = document.getElementById("hunger");
thirst.value = 1;
hunger.value = 1;

let TimerHunger = setInterval(statsTimerHunger, 50);
let TimerThirst = setInterval(statsTimerThirst, 50);

function statsTimerHunger() {

    hunger.value = hunger.value - 0.007;

    if(hunger.value < 0.4) {
        moodSadH();
        if(hunger.value < 0.25) {
            moodAngryH();
            if(hunger.value == 0) {
                window.location.href = "../HTML/end.html"
            }
        }
    }

if(hunger.value > 0.4) {
    let tear = document.getElementById("tearH");
    tear.remove();
    let angry = document.getElementById("angryH");
    angry.remove();
}

}

function statsTimerThirst() {
    thirst.value = thirst.value - 0.004;

    if(thirst.value < 0.4) {
        moodSadW();
        if(thirst.value < 0.25) {
            moodAngryW();
            if(thirst.value == 0) {
                window.location.href = "../HTML/end.html"
            }
        }
    }

    if(thirst.value > 0.4) {
        let tear = document.getElementById("tearW");
        tear.remove();
        let angry = document.getElementById("angryW");
        angry.remove();
    }

}

function giveFood() {
    hunger.value = 1;
}

function giveWater() {
    thirst.value = 1;
}

function moodSadW() {
    var sad = document.createElement("IMG");
    sad.setAttribute("src", "../IMG/tear.png");
    sad.setAttribute("id", "tearW");
    sad.setAttribute("alt", "tearW");
    document.body.appendChild(sad);
    }

function moodAngryW() {
    let tear = document.getElementById("tearW");
    tear.remove();
    var angry = document.createElement("IMG");
    angry.setAttribute("src", "../IMG/angry.png");
    angry.setAttribute("id", "angryW");
    angry.setAttribute("alt", "angryW");
    document.body.appendChild(angry);
    }

function moodSadH() {
    var sad = document.createElement("IMG");
    sad.setAttribute("src", "../IMG/tear.png");
    sad.setAttribute("id", "tearH");
    sad.setAttribute("alt", "tearH");
    document.body.appendChild(sad);
    }

function moodAngryH() {
    let tear = document.getElementById("tearH");
    tear.remove();
    var angry = document.createElement("IMG");
    angry.setAttribute("src", "../IMG/angry.png");
    angry.setAttribute("id", "angryH");
    angry.setAttribute("alt", "angryH");
    document.body.appendChild(angry);
    }