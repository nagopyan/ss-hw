
let myVar2 = setInterval(myTimer7, 150); // refresh speed

function myTimer7() {

    $(document).ready(function() {
        $('#cloud2').animate({
            top: '0px',
        }, 1250);

        $('#cloud2').animate({
            top: '50px'
        }, 1700);
    });
}