
//print "Hello JavaScript!" to console
console.log("Hello JavaScript!"); 


//define integers "a"/"b" and print to console basic math operations
var a = 7;
var b = 3;
var ansAdd = a + b;
var ansSub = a - b;
var ansMult = a * b;
var ansDiv = a / b;
console.log("Add = " + ansAdd);
console.log("Subtract = " + ansSub);
console.log("Multiply = " + ansMult);
console.log("Divide = " + ansDiv);

//calculate perimerer and area of circle by radius form input

console.log("Enter circle radius: ");
var rad = prompt("Enter input:");

var perimeter = 2 * 3.14 * rad;
var area = 3.14 * Math.pow(rad, 2);

console.log("The Perimeter is: " + perimeter);
console.log("The Area is: " + area);

//value of "m" defines value of "n"
var m = prompt("Enter value in range [-1/0/1]:");
if(m > 0) {
    var n = 1;
    console.log("n is: " + n);
} else if(m == 0) {
    var n = 0;
    console.log("n is: " + n);
} else if(m < 0){
    var n = -1;
    console.log("n is: " + n);
}
