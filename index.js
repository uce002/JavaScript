// 1 BASICS
/*console.log('Hello');
console.log('i like pizza');

window.alert('This is an alert!');
*/
document.getElementById(`myH1`).textContent = `1. Basics`;
document.getElementById("myP").textContent = "I like pizza";


// 2 VARIABLES
/* variable = a container that stores a value. It behaves as if it were the value it contains
1. declaration =    let x;
2. assignment  =    x = 100; */

let x = 100; // if you know what the value is you can declare & assign it in 1 line
console.log(x);

let price = 10.99;
let firstName = "Uce";
let email = "test@gmail.com";
// number, string, email, boolean

//console.log(`You are ${age} years old`); //use backticks `` for embedding variables (template literals). otherwise use ""
console.log(`The price is £${price}`); //£ goes before $ otherwise its included in the literal

console.log(`Your name is ${firstName}`);
console.log(typeof firstName);

console.log(`Your email is ${email}`);


let fullName = "Uce McJuce";
let age = 22;
let isStudent = false;

document.getElementById("variable-h1").textContent = "2. Variables";
document.getElementById("variable-p1").textContent = `Your name is ${fullName}`;
document.getElementById("variable-p2").textContent = `Your age is ${age}`;
document.getElementById("variable-p3").textContent = `${fullName} is a student: ${isStudent}`;


// 3 ARITHMETIC OPERATORS
document.getElementById("arithmetic-h1").textContent = "3. Arithmetic Operators";

/* arithmetic operators = operands (values, variables etc)
                          operators (+ - * /)
                          e.g. 11 = x + 5 */
let students = 30;

//students = students + 1; - * / etc
//students = students ** 2; ** is exponent (to the power of)
//let extraStudents = students % 3;  % is modulus. the remainder after being divided by 3 in this case 1 (31/3 = 0 remainder 1)

// augmented assignment operators
//students += 1;  %= **= -= etc

// increment and decrement (by 1, helpful in a loop)
students++;
//students --;
let extraStudents = students % 3; //put line 53 here to show the remainder (modulus)

/* operator precedence
   1. ().    brackets
   2. **.    exponent
   3. * / %. multiplication & division & modulus
   4. + -.   addition & subtraction
*/
let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);
console.log(students);
console.log(extraStudents);


// 4 ACCEPT USER INPUT
document.getElementById("userInput-h1").textContent = "4. Accept User Input";

/* 1. Easy way = window prompt
   2. Professional way = HTML textbox */

//let username = window.prompt("What's your username");
//console.log(username);

let username;

document.getElementById("submitInput").onclick = function() {
    username = document.getElementById("userInput").value;
    document.getElementById("userInput-p").textContent = `Good evening ${username}.`;
}


// 5 TYPE CONVERSION
document.getElementById("typeConversion-h1").textContent = "5. Type Conversion";

// type conversion = change the datatype of a value to another (strings, numbers, booleans)
// if you need to use userinput (string) for math you need to convert it to a number

//let pizzaPrice = window.prompt("How much is a medium pizza?");
//pizzaPrice = Number(pizzaPrice);
//pizzaPrice += 1;

//console.log(pizzaPrice, typeof age);

let tcX = "0"; //can't convert string to number pizza shows as NaN with the type being number
let tcY = "0"; //can convert numbers to strings
let tcZ = "0"; //will only be false if empty, otherwise true. USEFUL FOR CHECKING WHETHER USER INPUT IS EMPTY AND TELL THEM TO ENTER SOMETHING

tcX = Number(tcX);
tcY = String(tcY);
tcZ = Boolean(tcZ);

console.log(tcX, typeof tcX);
console.log(tcY, typeof tcY);
console.log(tcZ, typeof tcZ);


// 6 CONSTANTS
document.getElementById("constants-h1").textContent = "6. Constants";

// const a variable that can't be changed
const PI = 3.14159; // when using a const capitalise primitive data types (numbers, booleans), not strings
let radius;
let circumference;

document.getElementById("radiusSubmit").onclick = function() {
    radius = document.getElementById("radiusInput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius
    document.getElementById("circumf-p").textContent = circumference + " cm";
}


// 7 COUNTER PROGRAM
document.getElementById("counter-h1").textContent = "7. Counter Program";

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}


// 8 MATH OBJECT
document.getElementById("mathObject-h1").textContent = "8. Math Object";

// Math = built-in object that provides a collection of properties (console.log(Math.PI);) and methods (below)
let mathX = 3.21;
let mathY = 2;
let mathZ; 

let maxX = 2;
let maxY = 5;
let maxZ = 3;

mathZ = Math.round(mathX); //ceil(mathX) = always round up
//mathZ = Math.floor(mathX); //change mathX to 3.99 to show this (floor always rounds down)
//mathZ = Math.ceil(mathX); //ceiling always rounds up
//mathZ = Math.trunc(mathX); //truncate gets rid of all numbers after the decimal point
//mathZ = Math.pow(mathX, mathY); //change x to 3 and y to 2. x is the number y is the power
//mathZ = Math.sqrt(mathX); // sqaure root
//mathZ = Math.abs(mathX); //absolute gets rid of the - sign and makes the value positive

let max = Math.max(maxX, maxY, maxZ);
let min = Math.max(maxX, maxY, maxZ);
console.log(mathZ);
console.log(max);


// 9 RANDOM NUMBER GENERATOR
document.getElementById("rng-h1").textContent = "9. Random Number Generator";

//let randomNum = Math.floor(Math.random() * 6) + 1; // random number 0-6 inclusive (because of +1) rounded down
//console.log(randomNum);

const practiceMin = 50;
const practiceMax = 100;

let randomNum2 = Math.floor(Math.random() * (practiceMax - practiceMin)) + practiceMin; //random number from 50-99
console.log(randomNum2);

const rngLabel = document.getElementById("rngLabel");
const rngBtn = document.getElementById("rngBtn");
const rngMin = 1;
const rngMax = 6;
let RandomNum3;

rngBtn.onclick = function() {
    RandomNum3 = Math.floor(Math.random() * rngMax) + rngMin;
    rngLabel.textContent = RandomNum3;
}


// 10 IF STATEMENTS
document.getElementById("ifStatements-h1").textContent = "10. If Statements";

// if statements = if a condition is true, exexcute some code. if not, do something else

//using boolean in an if statement
let isStudent2 = false;
if(isStudent2) {
    console.log("Good evening student");
} else {
    console.log("Good evening sir");
}

let isAge = 15;
let hasLicense = false 

//nested if statement
if(isAge >= 16) {
    console.log("You are old enough to drive");

    if(hasLicense) {
        console.log("You have your license");
    } else {
        console.log("You don't have your license yet");
    }
}
else {
    console.log("You must be 16+ to have a license");
}

//else if statement. order is important (age>=100 has to be first as >=18 will execute first if it's at the top)
let isAge2;

const ifSInput = document.getElementById("ifSInput");
const ifSBtn = document.getElementById("ifSBtn");
const resultP = document.getElementById("resultP")

ifSBtn.onclick = function() {
    isAge2 = ifSInput.value;
    isAge2 = Number(isAge2)
    if(isAge2 >= 100) {
        resultP.textContent = "You are too old to enter this site";
    }
    else if(isAge2 == 0) { //== compare values. = is assignment
        resultP.textContent = "You can't enter. You a baby bruh";
    }
    else if(isAge2 >= 18) {
        resultP.textContent = "You are old enough to enter this site";
    } 
    else if (isAge2 < 0) {
        resultP.textContent = "Your age can't be below 0";
    }
    else {
        resultP.textContent = "You must be 18+ to enter this site";
    }
}