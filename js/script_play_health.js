
var thirst = document.getElementById("thirst");
var hunger = document.getElementById("hunger");
var cry = false;
var mad = false;
//session persistency cariables
var game = localStorage.getItem('game');
let TimerHealth = setInterval(statsTimerHealth, 100);

//load stored stats values
function setStats() {
    if(game == 1){
        thirst.value = localStorage.getItem('thirstStore');
        hunger.value = localStorage.getItem('hungerStore');
    } else {
        thirst.value = 1;
        hunger.value = 1;
    }
}
setStats();
//runtime loop
function statsTimerHealth() {
    //set hunger decay rate
    hunger.value = hunger.value - 0.015; 
    //set thirst decay rate
    thirst.value = thirst.value - 0.010;

    if(hunger.value < 0.4 || thirst.value < 0.4) {
        moodSad();
        if(hunger.value < 0.25 || thirst.value < 0.25) {
            moodAngry();
            if(hunger.value == 0 || thirst.value == 0) {
                game = 0;
                localStorage.setItem('game', game);
                window.location.href = "../HTML/end.html"
            }
        }
    }
    //loop tear animation
    if(cry) {
        $('#tear').animate({
            with: '2%',
            height: '3%'
        }, 250);
    
        $('#tear').animate({
            with: '3%',
            height: '2%'
        }, 250);
    }
    //loop anger animation
    if(mad) {
        $('#angry').animate({
            with: '2%',
            height: '3%'
        }, 250);
        $('#angry').animate({
            with: '3%',
            height: '2%'
        }, 250);
    }

    //set game in progress flag
    game = 1;
    //record status to memoru
    sessionMemory();
}

function sessionMemory() {
    localStorage.setItem("game", game);

    thirstStore = thirst.value;
    localStorage.setItem("thirstStore", thirstStore)

    hungerStore = hunger.value;
    localStorage.setItem("hungerStore", hungerStore)
}

function clearAnger() {    
    if(mad) {
        let a1 = document.getElementById('angry');
        a1.parentNode.removeChild(a1);
        mad = false;
    }
}

function clearSorrow() {
    if(cry) {
        let a2 = document.getElementById('tear');
        a2.parentNode.removeChild(a2);
        cry = false;
    }
}

function giveFood() {
    hunger.value = 1;
    clearSorrow();
    clearAnger();
}

function giveWater() {
    thirst.value = 1;
        clearSorrow();
        clearAnger();

}

function moodSad() {
    if(cry == false && mad == false) {
        cry = true;
        let sad = document.createElement("IMG");
        sad.setAttribute("src", "../IMG/tear.png");
        sad.setAttribute("id", "tear");
        sad.setAttribute("alt", "tear");
        document.body.appendChild(sad);
    }
}

function moodAngry() {
    if(mad == false) {
        let tearRem = document.getElementById('tear');
        tearRem.parentNode.removeChild(tearRem);
        cry = false;
        mad = true;

        let angry = document.createElement("IMG");
        angry.setAttribute("src", "../IMG/angry.png");
        angry.setAttribute("id", "angry");
        angry.setAttribute("alt", "angry");
        document.body.appendChild(angry);
    }
}