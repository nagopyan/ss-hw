
let myVar = setInterval(myTimer, 1000);

//run loop
function myTimer() {
  document.getElementById("clock").innerHTML = formatAMPM(new Date);
}

//Get time
function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ':' + seconds + " " + ampm;
  return strTime;
}

let game = localStorage.getItem('game');

//new game modal
function selectPetType() {
  let petType = document.getElementById("petType").value;
  let petColor = document.getElementById("petColor").value;
  localStorage.setItem("petType", petType);
  localStorage.setItem("petColor", petColor);
  localStorage.setItem("ongoing", true)
  game = 0;
  localStorage.setItem('game', game);
  window.location.href = "../HTML/play.html"
}

//check for progress flag
if(game == 0) {
  var modal = document.getElementById("gameStart");
  var span = document.getElementsByClassName("close")[0];
} else {
  var modal = document.getElementById("gameSwitch");
  var span = document.getElementsByClassName("close2")[0];
}

let btn = document.getElementById("adopt");

btn.onclick = function() {
  modal.style.display = "block"; 
}

//close choice modal and load new game modal
function selectNew() {
  span = document.getElementsByClassName("close")[0];
  modal.style.display = "none";
  modal = document.getElementById("gameStart");
  modal.style.display = "block";
}

function continueOld() {
  window.location.href = "../HTML/play.html"
}
