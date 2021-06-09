
var myVarSun = setInterval(myTimerSun, 200);

$(document).ready(function() {
    $('#sun').fadeIn(500);
});

function myTimerSun() {

    $(document).ready(function() {
        $('#sun').animate({
            right: '25px',
            top: '25px',
            width: '325px',
            height: '525px'
        }, 750);
        $('#sun').animate({
            right: '0px',
            top: '0px',
            width: '370px',
            height: '575px'
        }, 1250);
    });

}