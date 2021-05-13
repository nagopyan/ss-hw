
var myVar = setInterval(myTimer, 1000);

function myTimer() {

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ':' + seconds + " " + ampm;
    return strTime;

  }

  document.getElementById("clock").innerHTML = formatAMPM(new Date);

}

function selectPetType() {
  let petType = document.getElementById("petType").value;
  let petColor = document.getElementById("petColor").value;
  localStorage.setItem("petType", petType);
  localStorage.setItem("petColor", petColor);
  window.location.href = "../HTML/play.html"
}