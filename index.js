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


// 11 CHECKED PROPERTY
document.getElementById("checkedProperty-h1").textContent = "11. Checked Property";

// checked = property that determines the checked state of a HTML checkbox or radio button. 
const checkBox = document.getElementById("checkBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const cpSubmit = document.getElementById("cpSubmit");
const subscribeResult = document.getElementById("subscribeResult");
const paymentResult = document.getElementById("paymentResult");

cpSubmit.onclick = function() {
    if(checkBox.checked) {
        subscribeResult.textContent = "Thanks for subscribing";
    } else {
        subscribeResult.textContent = "You aren't subscribed";
    }

    if(visaBtn.checked) {
        paymentResult.textContent = "You are paying with Visa";
    } 
    else if(masterCardBtn.checked) {
        paymentResult.textContent = "You are paying with MasterCard";
    }
    else if(payPalBtn.checked) {
        paymentResult.textContent = "You are paying with PayPal";
    }
    else {
        paymentResult.textContent = "You must select a payment type";
    }
}


//12 TERNARY OPERATOR
document.getElementById("ternaryOperator-h1").textContent = "12. Ternary Operator";

/* shortcut to if{} and else{} statements, helps to assign a variable based on a condition
   condition ? codeIfTrue : codeIfFalse; */
let time = 16;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting);

let ternaryIsStudent = false;
let message = ternaryIsStudent ? "You are a student" : "You are NOT a student";
console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0; //is someones purchase over 100. if so add a 10% discount
console.log(`You're total is £${purchaseAmount - purchaseAmount * (discount/100)}`) // 10/100 = 0.1. 125 x 0.1 = 12.5 (10%) 125 - 12.5


// 13 SWITCHES
document.getElementById("switches-h1").textContent = "13. Switches";

// can be an efficient replacement to many else if statements
let day = 1;
switch(day) {
    case 1:
        console.log("It's Monday");
        break; //to stop executing this code and move on
    case 2:
        console.log("It's Tuesday");
        break;
    case 3:
        console.log("It's Wednesday");
        break;
    case 4:
        console.log("It's Thursday");
        break;
    case 5:
        console.log("It's Friday");
        break;
    case 6:
        console.log("It's Saturday");
        break;
    case 7:
        console.log("It's Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
        break;
}

let testScore = 62;
let letterGrade;
switch(true) {
    case testScore >= 90: //if this is true, grade is A
        letterGrade = "A";
        break;
    case testScore >=80:
        letterGrade = "B";
        break;
    case testScore >=70:
        letterGrade = "C";
        break;
    case testScore >=60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);


// 14 STRING METHODS
document.getElementById("stringMethods-h1").textContent = "14. String Methods";

//string methods = allow you to mainpulate and work with text (strings)
let userName = "uce mcjuce";

console.log(userName.charAt(1)); //index starts at 0 (u).
console.log(userName.indexOf("u")) //find the first instance of u (0)
console.log(userName.lastIndexOf("u")) //find the last instance of u (7)
console.log(userName.length); //length of string 10 characters including space
//console.log(userName.trim()); // trims any whitespace (space before or after string, not in between)
//console.log(userName.toUpperCase()); // make all characters uppercase
//console.log(userName.toLowerCase());
//console.log(userName(repeat(3))); //repeat 3 times
console.log(userName.startsWith("s")); //returns boolean. false, uce doesn't start with s. there's .endsWidth aswell

//below uses above with an if statement to check if username has a space which isn't usually allowed
let userName2 = " uce mcjuce";
let result2 = userName2.startsWith(" "); //.includes(" ") to check if there's a space like there is in mine. no spaces allowed in a username
if(result2) {
    console.log("Your username can't begin with ` `"); //can't include for .include
} else {
    console.log(userName2);
}

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);

//phoneNumber = phoneNumber.padStart(15, "0"); //padEnd aswell. pad the string with 0's (anything) until it's 15 (or however) many characters long


// 15 STRING SLICING
document.getElementById("stringSlicing-h1").textContent = "15. String Slicing";

// string slicing = creating a substring from a portion of another string. string.slice(start, end)
const ssfFullName = "Uceicle McJuceicles";

// FROM HERE CHANGE ssFullName BACK TO Uce McJuce
//let ssFirstName = ssfFullName.slice(0, 3); //ending index is exclusive. if it was 0, 2 it would be uc because 3 is excluded
//let ssLastName = ssfFullName.slice(4); //if you're going to the end you don't an ending index
//console.log(ssFirstName);
//console.log(ssLastName);

//let firstChar = ssfFullName.slice(0, 1);
//let lastChar = ssfFullName.slice(-1); // - index starts at the end. -2 is c, -3 = u etc
//console.log(firstChar);
//console.log(lastChar);

// use index of to find a space, anything before space print as firstname, anything after is lastname
let ssFirstName2 = ssfFullName.slice(0, ssfFullName.indexOf(" ")); //from index 0 (U) to index 8 (index of the space)
let ssLastName2 = ssfFullName.slice(ssfFullName.indexOf(" ") + 1); //from index 8 + 1 (to not include the space) to the end

console.log(ssFirstName2);
console.log(ssLastName2);

const ssEmail = "ucemcjuce@gmail.com";

let ssUsername = ssEmail.slice(0, ssEmail.indexOf("@"));
let ssExtension = ssEmail.slice(ssEmail.indexOf("@") + 1);

console.log(ssUsername);
console.log(ssExtension);


// 16 METHOD CHAINING
document.getElementById("methodChaining-h1").textContent = "16. Method Chaining";

// method chaining = calling one method after another in one continuous line of code
// both programs will trim any whitespace, find the first letter make it upper case and make everything after it lowercase

let mcUsername = window.prompt("Enter your username: ");

// NO METHOD CHAINING
mcUsername = mcUsername.trim();
let nmcLetter = mcUsername.charAt(0);
nmcLetter = nmcLetter.toUpperCase();

let nmcExtraChars = mcUsername.slice(1);
nmcExtraChars = nmcExtraChars.toLowerCase();
mcUsername = nmcLetter + nmcExtraChars;

console.log(mcUsername);

// METHOD CHAINING
mcUsername = mcUsername.trim().charAt(0).toUpperCase() + mcUsername.trim().slice(1).toLowerCase();
console.log(mcUsername);


// 17 LOGICAL OPERATORS
document.getElementById("logicalOperators-h1").textContent = "17. Logical Operators";

// logical operators = used to combine or mainpulate boolean values (true or false)
// AND = && (both need to be true)    OR = || (at least one has to be true (one or more))    NOT = !
const andTemp = 31;
if(andTemp > 0 && andTemp <= 30) {
    console.log("The weather is good");
} else {
    console.log("The weather is bad");
}

const ifTemp = 20;
if(ifTemp <= 0 || ifTemp > 30) {
    console.log("Weather is bad")
} else {
    console.log("weather is good")
}

const isSunny = true;
if(!isSunny) {
    console.log("it's cloudy");
} else {
    console.log("it's sunny in philadelphia");
}


// 18 STRICT EQUALITY
document.getElementById("strictEquality-h1").textContent = "18. Strict Equality";

/*  = assignment operator
    == comparison operator (compare is values are equal)
    === strict equality operator (compare if values and datatype are equal)
    != inequality operator
    !== strict inequality operator
*/
const PI2 = 3.14;
if(PI2 === "3.14") { //== returns true. === returns false as it's a string not a number
    console.log("thats pi");
} else {
    console.log("that isnt pi");
}

if(PI2 !== 3.14) { //if value isn't 3.14 number data type its not pi
    console.log("thats not PI")
} else {
    console.log("thats pi"); //PI2 !== 3.14 is false, meaning that value is PI
}


// 19 WHILE LOOPS
document.getElementById("whileLoop-h1").textContent = "19. While Loops";

// while loop = repeat some code WHILE some condition is true (sometimes infinitely so be careful)
//let wlUsername = "";

//while(wlUsername === "" || wlUsername === null) {
//    wlUsername = window.prompt("Enter your name")

//console.log(`Hello ${wlUsername}`);

//BELOW IS THE MAIN EXAMPLE. DONT WANT ANYMORE WINDOW PROMPTS. CAN USE HMTL AND DO IT PROPERLY BUT DOESNT REALLY WORK WHEN TRYING TO USE A WHILE LOOP, ITS MUCH SIMPLER THAN THAT
/*let wlLoggedIn = false;
let wlUsername2;
let wlPassword;

while(!wlLoggedIn) { //while wlLoggedIn = false
    wlUsername2 = window.prompt("Enter your username");
    wlPassword = window.prompt("Enter your password");

    if(wlUsername2 === "uce" && wlPassword === "juce") {
        wlLoggedIn = true;
        console.log("Welcome back sir");
    } else {
        console.log("Try again. Invalid credentials");
    }
} */


// 20 FOR LOOPS
document.getElementById("forLoop-h1").textContent = "20. For Loops";

// for loop = repeat some code a LIMITED amount of times
for(let i = 0; i <= 2; i++) { // i is a temporary counter (keeps track of the loops). 
                           // 2nd statement is the condition (do code for this long) - 0, 1, 2. 3 times
                           // 3rd increment/decrement counter each iteration
    console.log(i);
}
//change line 541. i = 2; i<=10; i+=2 start from 2 to 10 in increments of 2
                // i = 10; i>0;  i--  start from 10 and -1 until you reach 0

/*for(let i = 1; i <= 20; i++) {
    if(i == 13) {
        continue; //skip this iteration
        // break; logs 1-12 then breaks out the loop
    } else {
        console.log(i);
    }
} */


// 21 NUMBER GUESSING GAME
document.getElementById("numberGuess-h1").textContent = "21. Number Guessing Game";

const ngMinNum = 1;
const ngMaxNum = 100;
const ngAnswer = Math.floor(Math.random() * (ngMaxNum - ngMinNum + 1)); //Math.random = random number from 0-1 so we x by 100

// MAIN EXAMPLE
/*let ngAttempts = 0;
let ngGuess;
let ngRunning = true;

while(ngRunning) {
    ngGuess = window.prompt(`Guess a number between ${ngMinNum} - ${ngMaxNum}`);
    ngGuess = Number(ngGuess);

    if(isNaN(ngGuess)) { //if the guess isn't a number (string etc)
        window.alert("Please enter a valid number");
    }
    else if(ngGuess < ngMinNum || ngGuess > ngMaxNum) {
        window.alert("Please enter a valid number");
    }
    else {
        ngAttempts++;
        if(ngGuess < ngAnswer) {
            window.alert("Too LOW. Try again");
        }
        else if(ngGuess > ngAnswer) {
            window.alert("Too HIGH. Try again");
        }
        else {
            window.alert(`Well done. The answer was ${ngAnswer} it took you ${ngAttempts} attempts`)
            ngRunning = false;
        }
    }
}*/


// 22 FUNCTIONS
document.getElementById("functions-h1").textContent = "22. Functions";

// function = a section of reusable code. declare code once, call the function to execute that code

// NORMAL FUNCTION
/*function happyBirthday() {
    console.log("happy birthday to you");
    console.log("happy birthday dear uce");
}
happyBirthday(); */

// FUNCTION WITH PARAMATERS & ARGUMENTS
function happyBirthdayArgument(fName, fAge) { //parameters
    console.log("happy birthday to you");
    console.log(`Happy brithday dear ${fName}`);
    console.log(`You're ${fAge} years old`);
}
happyBirthdayArgument("uce", 22);//arguments
happyBirthdayArgument("juce", 30);

// FUNCTION TO ADD 2 NUMBERS
function add(x, y) {
    return x + y; // can do x-y, x*y x/y
    //let fResult = x + y;
    //return fResult; // need to return the value otherwise it returns undefined. if you need a result from a function you have to use return to retrieve the result
}
let fAnswer = add(2, 3);
console.log(fAnswer);

function isEven(number) {
    return number % 2 === 0 ? true : false; //return if the number divided by 2 gives remainder 0 true, else return false
}
console.log(isEven(11));

function isValidEmail(fEmail) { //can do if statements or ternary operators like above
    // return email.includes("@") ? true : false;
    if(fEmail.includes("@")) {
        return true;
    } else {
        return false;
    }
}
console.log(isValidEmail("uce@gmai.com"))


// 23 VARIABLE SCOPE
document.getElementById("variableScope-h1").textContent = "23. Variable Scope";

// variable scope = where a variable is recognised and accessible (local vs global)

// this is global as it can be seen and outputted by a function (recognised and accesible program wide). can't have 2 of the same variable name
let vsX = 4;
//let vsX = 1;
function1();

// this is local as functions can't see what's inside the other (only recognisde within the {}). also true for anything within {}. can have 2 or more of the same variable name and value
// e.g. if function1 console.logged y and function2 had let y = 2 and console.logged x, it returns an error
function function1() {
    let x = 1;
    console.log(x);
    console.log(vsX);
}
function function2() {
    let x = 2;
    console.log(x);
}


// 24 TEMPERATURE CONVERSION PROGRAM
document.getElementById("tempConvert-h1").textContent = "24. Temperature Conversion Program";

const tempTextbox = document.getElementById("tempTextbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const tempResult = document.getElementById("tempResult");
let temp;

function convert() {
    if(toFahrenheit.checked) {
        temp = Number(tempTextbox.value);
        temp = temp * 9 / 5 + 32
        tempResult.textContent = temp.toFixed(1) + "°F"; //to fixed is accurate to 1 decimal place
    }
    else if(toCelcius.checked) {
        temp = Number(tempTextbox.value);
        temp = (temp - 32) * (5/9);
        tempResult.textContent = temp.toFixed(1) + "°C";
    }
    else {
        tempResult.textContent = "Select a unit";
    }
}


// 25 ARRAYS
document.getElementById("arrays-h1").textContent = "25. Arrays";

// array = a variable like structure that can hold more than 1 value
//let fruit = "apple" variable stores 1 value
let fruits = ["apple", "orange", "banana"]; // [] around the values makes an array, comma separated

//fruits[1] = "cocount"; //can change any index after it's already been declared in the array
//fruits.push("coconut");  //push. add an element and value to end of array
//fruits.pop();            //pop. removes last element from array
//fruits.unshift("mango"); //unshift. add element to start of array
//fruits.shift();          //shift. removes first element from array
//fruits.sort();           //sort. sort array by alphabetical order
//fruits.sort().reverse(); //sorts array from z-a

let numOfFruits = fruits.length;
let fruitIndex = fruits.indexOf("apple"); // if i put mango it logs -1. useful to say, if this === -1 alert index/item not found

console.log(numOfFruits);
console.log(fruitIndex);

//print full array
//console.log(fruits);

//print each individual element
/*console.log(fruits[0]);
console.log(fruits[1]); etc*/

//print all elements separately
/*for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); //don't print the index, print the value
}*/

//enhanced for loop
for(let fruit of fruits) {
    console.log(fruit);
}


// 26 SPREAD OPERATOR
document.getElementById("spreadOperator-h1").textContent = "26. Spread Operator";

// spread operator = ... allows an iterable (array or string) to be expanded into separate elements (unpacks the elements)
let spreadNumbers = [1, 2, 3, 4, 5]
let spreadMax = Math.max(...spreadNumbers); //Math.max(spreadNumbers) doesn't work because it can't access within the array. 
                                            //... unpacks them into separate elements so it can read each one
console.log(spreadMax);

let spreadUsername = "Uce McJuce";
let spreadLetters = [...spreadUsername].join("-"); //separates each letter then joins them together with a - inbetween
console.log(spreadLetters);

let spreadFruits = ["apple", "orange", "banana"];
//shallow copy. different data structure with identical values as above
//let newSpreadFruits = [...fruits]
let spreadVeg = ["carrots", "celery", "potatoes"];

let foods = [...spreadFruits, ...spreadVeg, "eggs", "milk"]; //separate values from array spreadFruit and veg and put in a new array called food with 2 more groceries(array elements).
console.log(foods);


// 27 REST PARAMETERS
document.getElementById("restParameters-h1").textContent = "27. Rest Parameters";

// rest parameter = (...rest) allow a function to work with a variable number of arguments by bundling them into an array
// spread         = expands an array into separate elements
// rest           = bundles separate elements into an array.  ...numbers (for example) accept any number of arguments


function openFridge(...restFoods) { // rest ... is used for paramaters.
    console.log(...restFoods); // spread ... is used for arrays
}

function getFood(...getRestFoods) {
    return getRestFoods;
}

const restFood1 = "pizza";
const restFood2 = "cheeseburger";
const restFood3 = "hotdog";
const restFood4 = "sushi";

openFridge(restFood1, restFood2, restFood3, restFood4); //what this function does is take restFood 1-4 and bundles them into an array. then spread them on console.log to separate them

const getRestFood = getFood(restFood1, restFood2, restFood3, restFood4); //this one rest(joins) restFood1-4 into an array from single instances
console.log(getRestFood);


function sum(...numbers) {
    let result = 0;
    for(let number of numbers) { //go through each index of rNumbers and add that number to the result
        result += number;
    }
    return result;
}
const rTotal = sum(1, 2, 3, 4, 5);
console.log(`You're total is £${rTotal}`);

function getAverage(...numbers) {
    let result = 0;
    for(let number of numbers) { //go through each index of rNumbers and add that number to the result
        result += number;
    }
    return result / numbers.length;
}
const avgTotal = getAverage(75, 100, 85, 90, 50);
console.log(avgTotal);


function combineStrings(...strings) {
    return strings.join(" ");
}
const rFullname = combineStrings("Mr", "Spongebob", "Squarepants", "III")
console.log(rFullname);


// 28 DICE ROLLER PROGRAM
document.getElementById("diceRoll-h1").textContent = "28. Dice Roller Program";

//didn't do. don't really see the point in it but I did rwatch the video


// 29 RANDOM PASSWORD GENERATOR
document.getElementById("rpg-h1").textContent = "29. Random Password Generator";

function generatePassword(rpgLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) { //parameters

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@£$%^&*()_+-=";

    let allowedChars = "";
    let rpgPassword = "";

    //if includeLowercase etc is true then add it to the string allowedChars
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(rpgLength <= 0) {
        return "(password length must be at least 1)";
    }
    if(allowedChars.length === 0) { // if password parameters are false (0)
        return "(At least 1 set of characters needs to be selected";
    }

    //get random letter, number, symbol from allowedChars 12 times and you have a random password
    for(let i = 0; i < rpgLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        rpgPassword += allowedChars[randomIndex];
    }

    return rpgPassword;
}

//password arguments
const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const rpgPassword = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols); //arguments
console.log(`Generated password: ${rpgPassword}`);


// 30 CALLBACKS
document.getElementById("callback-h1").textContent = "30. Callbacks";

// callback = a function that's passed as an argument to another function
// used to handle asynchronous operations e.g. reading a file only when it's fully read, then display it. JS will move on to the next bit of code if one bit takes a while. callback is to stop this if order matters (which it usually does)
// e.g. network request, interacting with DB's. when done with that, call this next

hello(goodbye); //no () after goodbye. callback ensures goodbye is executed straight after hello

function hello(callback) { //do hello first then callback to goodbye (line 867)
    console.log("hello");
    callback();
}

function goodbye() {
    console.log("goodbye");
}

callbackSum(displayPage, 1, 2);

function callbackSum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {
    document.getElementById("callback-p").textContent = result;
}


// 31 FOREACH()
document.getElementById("forEach-h1").textContent = "31. forEach()";

// .forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element. 
// array.forEach(callback)
// element, index, array are provided. forEach knows and keeps track of each element, it's index and the array it's working on
let feNumbers = [1, 2, 3, 4, 5];

feNumbers.forEach(double);
feNumbers.forEach(display);

function double(element, index, array) {
    array[index] = element * 2; //forEach index, get the element and * by 2
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}

function display(element) {
    console.log(element);
}

let feFruits = ["apple", "banana", "orange", "coconut"];

feFruits.forEach(feCaptialise);
feFruits.forEach(display);

function feUppercase(element, index, array) {
    array[index] = element.toUpperCase();
}

function feCaptialise(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1); //for array at index index(it keeps track by itself like i=0; i<length; i++), make element 0 (first letter) uppercase then the rest of the word
}

function display(element) {
    console.log(element);
}


// 32 MAP()
document.getElementById("map-h1").textContent = "32. map()";

// .map() = accepts a callback and applies that function to each element of an array, then returns a new array. forEach will change the array itself, map creates a new array and keeps the orignal array
const mapNumbers = [1, 2, 3, 4, 5];
const cubes = mapNumbers.map(cube);

console.log(cubes);

function cube(element) {
    return Math.pow(element, 3)
}

const mapDates = ["2024-01-10", "2025-02-20", "2026-03-30"];
const formattedDates = mapDates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
    const parts = element.split("-"); //split the elements from each dash
    return `${parts[2]}/${parts[1]}/${parts[0]}}`; //10/01/2024
}


// 33 FILTER()
document.getElementById("filter-h1").textContent = "33. filter()";

// .filter() = creates a new array by filtering out elements
let filterNumbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = filterNumbers.filter(filterIsEven);
let oddNums = filterNumbers.filter(filterIsOdd);

console.log(evenNums);
console.log(oddNums);

function filterIsEven(element) {
    return element % 2 === 0; //if number / 2 doesn't remainder 0, filter it out
}

function filterIsOdd(element) {
    return element % 2 !== 0;
}

const filterAges = [16, 17, 18, 18, 20, 55];
const adults = filterAges.filter(isAdult);

console.log(adults);

function isAdult(element) {
    return element >= 18;
}

const words = ["apple", "orange", "banana", "grape", "cocount", "pomegranate", "kiwi"];
const shortWords = words.filter(getShortWords);

console.log(shortWords);

function getShortWords(element) {
    return element.length <= 6; //getLongWords is length >6
}


// 34 REDUCE()
document.getElementById("reduce-h1").textContent = "34. reduce()";

// .reduce() = reduce the elements of an array to a single value
const reducePrices = [5, 30, 10, 25, 15, 20];
const reduceTotal = reducePrices.reduce(reduceSum);

console.log(`£${reduceTotal}`);

function reduceSum(accumulator, element) { //previous element + next element. accumulator keeps count of the sum then + next element
    return accumulator + element;
}

const reduceGrades = [75, 50, 90, 80, 65, 95];
const reduceMax = reduceGrades.reduce(getMax);
const reduceMin = reduceGrades.reduce(getMin);

console.log(reduceMax);
console.log(reduceMin);

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element);
}