
let myVar = setInterval(myTimer, 150); // refresh speed

function myTimer() {

    $(document).ready(function() {
        $('#cloud1').animate({
            top: '50px',
        }, 1500);

        $('#cloud1').animate({
            top: '0px'
        }, 1700);
    });

}