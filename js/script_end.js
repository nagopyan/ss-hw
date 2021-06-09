
var modal = document.getElementById("myModal2");

var btn = document.getElementById("btn_start_again");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  $(".modal").animate({
    with: "100%",
    height: "100%"
  })
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function startOver() {
  window.location.href = "../HTML/index.html";
}

game = 0;
localStorage.setItem('game', game);