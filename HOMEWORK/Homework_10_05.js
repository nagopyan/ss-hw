
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

//check if number is Even or Odd
var number = prompt("Enter a number: ");
if(number % 2 == 0) {
    console.log("The number is Even.");
} else {
    console.log("The number is Odd.");
}

//sum and prdouct of first 10 natural numbers
const natNum = 10;
var sum = 0;
var prod = 1;

for (let i = 1; i <= natNum; i++) {
    sum += i;
}

for (let i = 1; i <= natNum; i++) {
    prod *= i;
}

console.log('The sum of natural numbers:', sum);
console.log('The product of natural numbers:', prod);

//sum of series of "n" term
var series = prompt("Enter series length: ");
var ans1 = 0;
var sum = 0;

for(let i = 1; i <= series; i++) {
    ans1 = ((ans1 * 10) + 1);
    sum = sum + ans1;
}

console.log(" ");
console.log("Series: " + sum);

//array operations biggest // smallest // sumPositive // productNegative // amountNegativePositive
const array1 = [10, -3, 5, -47, 47, 6, -90, 175, 2, 11];
var arrMax = 0;
var arrMin = 0;
var overZero = array1.filter(positiveFilter);
var underZero = array1.filter(negativeFilter);
const arrSum = arr => arr.reduce((a,b) => a + b, 0);
const arrProd = arr => arr.reduce((a,b) => a * b, 0);

function positiveFilter(overZero) {
    return overZero > 0;
}

function negativeFilter(underZero) {
    return underZero < 0;
}

function arrayOps() {
    arrMax = Math.max(...array1);
    arrMin = Math.min(...array1);

    return arrMax, arrMin;
  }

arrayOps();

console.log("Biggest value: " + arrMax);
console.log("Smallest valaue: " + arrMin);
console.log("Sum positive values: " + arrSum(overZero));
console.log("Prod negative values: " + arrProd(overZero));
console.log("Number positive values: " + overZero.length);
console.log("Number negative values: " + underZero.length);