
var myVar = setInterval(myTimer2, 250); // refresh speed

$(document).ready(function() {
    $('#cloud2').fadeIn(1250);
});

function myTimer2() {

    $(document).ready(function() {
        $('#cloud2').animate({
            top: '50px',
        }, 2000);
        $('#cloud2').animate({

            top: '0px',
        }, 1500);
    });

}