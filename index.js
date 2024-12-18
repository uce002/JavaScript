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
feFruits.forEach(display2);

function feUppercase(element, index, array) {
    array[index] = element.toUpperCase();
}

function feCaptialise(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1); //for array at index index(it keeps track by itself like i=0; i<length; i++), make element 0 (first letter) uppercase then the rest of the word
}

function display2(element) {
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


// 35 FUNCTION EXPRESSIONS
document.getElementById("functionExpressions-h1").textContent = "35. Function Expressions";

// function delcaration = define a reusable block of code that performs a specific task
//function exampleHello() {
//    console.log("hello");
//}

// function expressions = a way to define functions as values or variables
// function as a variable
const feHello = function() {
    console.log("hello");
}
feHello();

// function as a value (argument)
setTimeout(function() {
    console.log("Hello");
}, 3000); //print hello after 3 seconds (3000 milliseconds)

// pro = no need to declare loads of functions and names. if you're only using the function once do it like this. case in point, all of my const and function names that I have to make sure I'm not reusing

// instead of line 940-947 do function as a value function expression
const funExpNumbers = [1, 2, 3, 4, 5, 6];
const funExpSquares = funExpNumbers.map(function(element) {
    return Math.pow(element, 2);
});
console.log(funExpSquares);

const funExpEvenNums = funExpNumbers.filter(function(element) {
    return element % 2 === 0;
});
console.log(funExpEvenNums);

const funExpTotal = funExpNumbers.reduce(function(accumulator, element) {
    return accumulator + element;
});
console.log(funExpTotal);


// 36 ARROW FUNCTIONS
document.getElementById("arrowFunctions-h1").textContent = "36. Arrow Functions";

// arrow functions = a concise way to write function expressions. good for simple functions that are only used once.
// e.g.
//const arrowFunHello = () => console.log("Hello");
//arrowFunHello();

// arrow function with parameters
const arrowFunHello = (name, age) => {console.log(`Hello ${name}`)
                                      console.log(`You are ${age} years old`)};
arrowFunHello("Uce", 22);

// instead of line 1043-1045
setTimeout(() => console.log("Hello"), 3000);

const arrowFunNumbers = [1, 2, 3, 4, 5, 6, 7];
const arrowFunCubes = arrowFunNumbers.map((element) => Math.pow(element, 3));
console.log(arrowFunCubes);

const arrowFunOddNums = arrowFunNumbers.filter((element) => element % 2 !== 0);
console.log(arrowFunOddNums);

const arrowFunTotal = arrowFunNumbers.reduce((accumulator, element) => accumulator + element);
console.log(arrowFunTotal);


// 37 JAVASCRIPT OBJECTS
document.getElementById("jsObjects-h1").textContent = "37. JavaScript Objects";

// object = a collection of related properties and/or methods. property is age, firtname etc, they're key value pairs. method is a function that an object can perform
//          objects can represent real world objects (people, products, places)
//          e.g. object = {key:value,
//                         function()};

const person1 = {
    objectFirstname: "Spongebob",
    objectLastname: "Squarepants",
    objectAge: 30,
    objectIsEmployed: true,
    sayHello: () => console.log("Hi, I'm Spongebob"),
    eat: () => console.log("I'm eating a krabby patty"),
}

const person2 = {
    objectFirstname: "Patrick",
    objectLastname: "Star",
    objectAge: 42,
    objectIsEmployed: false,
    sayHello: function(){console.log("Hey, I'm Patrick")},
}
console.log(person2.objectFirstname);

person2.sayHello();
person1.eat();


// 38 THIS
document.getElementById("this-h1").textContent = "38. This";

// this = reference to the object where THIS is used. (the object dependds on the immeadiate context) person.name = this.name
// this doesn't work with arrow functions so just use function expressions
const tPerson1 = {
    name: "spongebob",
    favFood: "krabby patty",
    sayHello: function(){console.log(`Hi! I'm ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}
tPerson1.sayHello();
tPerson1.eat();


// 39 CONSTRUCTORS
document.getElementById("constructors-h1").textContent = "39. Constructors";

// constructor = special method for defining the properties and methods of object
function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", "2024", "blue");
const car2 = new Car("Chevrolet", "Camaro", "2025", "yellow");
const car3 = new Car("Dodge", "Charger", "2026", "red");

car2.drive();
console.log(car1.make);


// 40 CLASSES
document.getElementById("classes-h1").textContent = "40. Classes";

// class = (ES6 feature). Provides a more structured and cleaner way to work with objects compared to traditional constructor functions.
// e.g. static keyword, encapsulation, inheritance
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05; //5% tax

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product3.displayProduct();

const classTotal = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): £${classTotal.toFixed(2)}`);


// 41 STATIC
document.getElementById("static-h1").textContent = "41. Static";

// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)
class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }
    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }
}
console.log(MathUtil.PI); // don't need to declare const MathUtil1 = new MathUtil etc. you just call it because the class owns it so you can call it directly
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));

class User {
    static userCount = 0;
    
    constructor(username) {
        this.username = username;
        User.userCount++;
    }
    static getUserCount() {
        console.log(`There are ${User.userCount} users online`);
    }
    sayHello() {
        console.log(`Hello my username is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Gary");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();


// 42 INHERITANCE
document.getElementById("inheritance-h1").textContent = "42. Inheritance";

// inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child). helps with code reusability
// parent class Animal
class Animal {
    alive = true;
    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

//children classes
class Rabbit extends Animal {
    name = "rabbit";
    run() {
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal {
    name = "fish";
}
class Hawk extends Animal {
    name = "hawk";
    fly() {
        console.log(`The ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;

hawk.eat();
console.log(rabbit.alive);
fish.sleep();
hawk.fly();


// 43 SUPER
document.getElementById("super-h1").textContent = "43. Super";

// super = keyword used in classes to call the constructor or access the properties and methods of a parent (superclass)
// this = this object.  super = the parent
// instead of having name and age in each child class, put it in the superclass and then call the super with the arguments in each child so name and age can be used
class SuperAnimal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}
class SuperRabbit extends SuperAnimal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    superRun() {
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed); // call super again to get the run speed console.log and pass in runSpeed, flySpeed etc
    }
}
class SuperFish extends SuperAnimal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    superSwim() {
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class SuperHawk extends SuperAnimal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
    superFly() {
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const superRabbit = new SuperRabbit("rabbit", 1, 25);
const superFish = new SuperFish("fish", 2, 12);
const superHawk = new SuperHawk("hawk", 3, 50);

superFish.superSwim();

console.log(superHawk.name);
console.log(superHawk.age);
console.log(superHawk.flySpeed);


// 44 GETTERS & SETTERS
document.getElementById("getterSetter-h1").textContent = "44. Getters & Setters";

// getter = special method that makes a property readable
// setter = special method that makes a property writeable
// by using both you can validate and modify a value when reading or writing a property
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    set width(newWidth) {
        if(newWidth > 0) { //validate that input is a positive number. you can now write a number
            this._width = newWidth; //_width means it's private and shouldn't be changed
        }
        else {
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight) {
        if(newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number");
        }
    }

    get width() { // now get the value
        return this._width;
    }
    get height() {
        return this._height;
    }
    get area() { //getter allows for additional functions that you don't want/need in the constructor but you can still call them even if they're not in there
        return this._height * this._width;
    }
}
// e.g. using a setter to ensure this doesn't happen
//const rectangle = new Rectangle(-1000, "pizza");

const rectangle = new Rectangle(3, 5);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person3 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName) {
        if(typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName; //this private firstname = the newFirstname we receive
        }
        else {
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(newLastName) {
        if(typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be a non-empty string");
        }
    }
    set age(newAge) {
        if(typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a non-negative number");
        }
    }

    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get age() {
        return this._age;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }

}

const person3 = new Person3("Spongebob", "Squarepants", 30);
console.log(person3.firstName);
console.log(person3.lastName);
console.log(person3.age);


// 45 DESTRUCTURING
document.getElementById("destructuring-h1").textContent = "45. Destructuring";

// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

// E.G. 1. SWAP THE VALUE OF 2 VARIABLES
let a = 1;
let b = 2;

[a, b] = [b, a]; //left is destructuring, right is new array
console.log(a);
console.log(b);

// E.G. 2. SWAP THE ELEMENTS IN AN ARRAY
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors [4]] = [colors[4], colors[0]];
console.log(colors);

// E.G. 3. ASSIGN ARRAY ELEMENTS TO VARIABLES
const colors2 = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors2; //destructure colors2 and make the first color its own varaible and so on. rest parameter the least 2 colours (bundle elements and put them into an array)

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// E.G. 4. EXTRACT VALUES FROM OBJECTS
const destructurePerson = {
    dFirstName: "Spongebob",
    dLastName: "Squarepants",
    dAge: 30,
    dJob: "fry cook",
}
const destructurePerson2 = {
    dFirstName: "Patrick",
    dLastName: "Star",
    dAge: 34,
}
const {dFirstName, dLastName, dAge, dJob="unemployed"} = destructurePerson2; //when a variable is undefined you can give it a default value, otherwise what the job is will be displayed
console.log(dFirstName);
console.log(dLastName);
console.log(dAge);
console.log(dJob);

// E.G. 5. DESTRUCTURE IN FUNCTION PARAMETERS
// when you receive the object into the function, destructure it using parameters and console.log them
function displayPerson({d5FirstName, d5LastName, d5Age, d5Job}) {
    console.log(`name: ${d5FirstName} ${d5LastName}`);
    console.log(`age: ${d5Age}`);
    console.log(`job: ${d5Job}`);
}
const destructurePerson3 = {
    d5FirstName: "Spongebob",
    d5LastName: "Squarepants",
    d5Age: 30,
    d5Job: "fry cook",
}
displayPerson(destructurePerson3);


// 46 NESTED OBJECTS
document.getElementById("nestedObjects-h1").textContent = "46. Nested Objects";

// nested objects = objects inside of other objects. Allows you to represent more complex data structures. Child Object is enclosed by a Parent Object. 2 e.g. below
// Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// Address is the child object of the Person object. and we access it by making a new object
class nestPerson {
    constructor(name, age, ...address) { // rest parameter. pass in different parts of an address and store it as an array
        this.name = name;
        this.age = age;
        this.address = new nestAddress(...address);
    }
}

class nestAddress {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const nestPerson1 = new nestPerson("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Intl Waters");
const nestPerson2 = new nestPerson("Patrick", 37, "128 Conch St", "Bikini Bottom", "Intl Waters");
const nestPerson3 = new nestPerson("Squidward", 45, "126 Conch St", "Bikini Bottom", "Intl Waters");

console.log(nestPerson1.name);
console.log(nestPerson1.age);
console.log(nestPerson1.address); // prints the object which is what we want
console.log(nestPerson3.name);
console.log(nestPerson3.address.street); // use another . (property accessor) to access properties in the nested object


// 47 ARRAYS OF OBJECTS
document.getElementById("arraysOfObjects-h1").textContent = "47. Arrays of Objects";

const aoFruits = [{name: "apple", color: "red", calories: 95},
                  {name: "orange", color: "orange", calories: 45},
                  {name: "banana", color: "yellow", calories: 105},
                  {name: "coconut", color: "white", calories: 159},
                  {name: "pineapple", color: "yellow", calories: 37},]
// access property in an array of objects
console.log(aoFruits[0].name); //index number and any property

//aoFruits.push({name: "grapes", color: "purple", calories: 62}); // add object to array of objects
//console.log(aoFruits);

//aoFruits.pop(); // remove last object
//console.log(aoFruits);

// splice remove object at given index
//aoFruits.splice(1, 2); // get rid of orange and banana
//console.log(aoFruits);

// forEach()
//aoFruits.forEach(fruit => console.log(fruit)); //prints each object separately
//aoFruits.forEach(fruit => console.log(fruit.name)); //print each name or color property etc

// map() loop through and create a new array
//const fruitNames = aoFruits.map(fruit => fruit.name); // for every fruit, get it's name property and put it into a new array called fruitNames
//const fruitColors = aoFruits.map(fruit => fruit.color);
//console.log(fruitNames);

// filter(). return a new array after checking all values against a given argument
//const yellowFruits = aoFruits.filter(fruit => fruit.color === "yellow");
//const lowCalFruits = aoFruits.filter(fruit => fruit.calories < 100);
//console.log(lowCalFruits);
//console.log(yellowFruits);

// reduce(). return a single value. in this instance a single object
const maxFruit = aoFruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max) ; //usually accumulator and element. max is the max cal at the moment and element is the next element
// if current fruit calories is more than max then that is the max else the previous max is still the max
console.log(maxFruit); //to get just the calories .calories

const minFruit = aoFruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit: min);
console.log(minFruit);


// 48 SORTING
document.getElementById("sorting-h1").textContent = "48. Sorting";

// sort() = method used to sort elements of an array in place. sorts elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + numbers + symbols) as strings
let sortingNumbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
//sortingNumbers.sort();
//console.log(sortingNumbers); // each element treated as strings so 1, 10, 2, 3, 4 etc. 1 and 10 both start with one so they are before 2, 3 etc

//sortingNumbers.sort((a, b) => a - b); //a, b = 2 contiguous numbers (1, 10.  10, 2.  2, 9 etc). a - b = 2 - 9 = -7 (2 stays where it is, to the left). 9 - 3 = 6 (9 moves right as the answer is positive). if the answer was 0 they both stay at the same place because they're the same number
//console.log(sortingNumbers);

//sortingNumbers.sort((a, b) => b - a); // reverse order is b - a
//console.log(sortingNumbers);

const sortingPeople = [{name: "Spongebob", age: 30, gpa: 3.0},
                       {name: "Patrick", age: 37, gpa: 1.5},
                       {name: "Squidward", age: 51, gpa: 2.5},
                       {name: "Sandy", age: 27, gpa: 4.0},]

//sortingPeople.sort((a, b) => a.age - b.age); //reverse age is b.age - a.age
//console.log(sortingPeople);

//sortingPeople.sort((a, b) => a.name - b.name); //this doesn't work because it's a string inside an object
sortingPeople.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortingPeople);


// 49 SHUFFLE AN ARRAY
document.getElementById("shuffleArray-h1").textContent = "49. Shuffle an Array";
// didn't do. was optional if I make a game where I need to shuffle an array I know I can come back here


// 50 DATES
document.getElementById("dates-h1").textContent = "50. Dates";

// date objects = objects that contain values that represent dates and times. they can be changed and formatted
// Date(year, month, day, hour, minute, second, ms)
//const date = new Date(2025, 0, 1, 2, 3, 4, 5); // 0 = jan, 1 = feb, 11 = dec

const date2 = new Date();
const year = date2.getFullYear();
const month = date2.getMonth();
const day2 = date2.getDate();
const dayOfWeek = date2.getDay(); //getHours()  getMinutes()    getSeconds()

console.log(year);
console.log(month);
console.log(day2);
console.log(dayOfWeek); // 0 = sun, 1 = mon etc

//date2.setFullYear(2024);
//date2.setMonth(0); etc to set the date

const date3 = new Date("2023-12-31");
const date4 = new Date("2024-01-01");
if(date4 > date3) {
    console.log("Happy New Year");
}


// 51 CLOSURES
document.getElementById("closures-h1").textContent = "51. Closures";

// closure = a function defined inside of another function, the inner function has access to the variables and scope of the outer function.
// allows for (1)private variables and (2)state maintenance. used frequently in JS frameworks: React, Vue, Angular
function outer() {
    let message = "hello"; //can only be accessed within the outer() function including the inner() function (closure). message is now (1)private

    function inner() {
        console.log(message);

    }
    inner();
}
outer(); // line 1642 comment

function createCounter() {

    let count = 0; // (2)maintain the state of this variable and remember what it was before and (1) keep it private by closure inside a function that can't be changed outside the function

    function increment() {
        count ++;
        console.log(`Count increased to ${count}`);
    }
    function getCount() {
        return count;
    }

    return {increment, getCount} //return an object that has an increment function and has access to the stored count number
}

const counter = createCounter(); //said object
counter.increment();
counter.increment();
counter.increment();

//console.log(counter.count); //undefined. can't change, view or access the count variable as it's in a closure. maintaining the state and keeping it private
console.log(`The current count is ${counter.getCount()}`);


// e.g. counter for a game
function createGame() {

    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }
    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore}; //return an object that has access to all the above functions
}

const game = createGame(); //said object

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`)


// 52 SETTIMEOUT()
document.getElementById("setTimeout-h1").textContent = "52. setTimeout()";

// setTimeout() = function that allows you to schedule the execution of a function after an amount of time (in milliseconds)
// times are approximate (varies based on the workload of the JS runtime environment) not suitable for stopwatch. setTimeout(callback, delay);

//function timeoutSayHello() {
//    window.alert("Hello");
//}
//setTimeout(timeoutSayHello, 3000);

//clearTimeout(timeoutId) = can cancel a timeout before it triggers
const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
clearTimeout(timeoutId);

let timeoutId2;

function startTimer() {
    timeoutId2 = setTimeout(() => window.alert("Hello"), 3000); //need to declare timeoutId2 so it can be used as a callback to clearTimer
    console.log("started");
}

function clearTimer() {
    clearTimeout(timeoutId2);
    console.log("stoped");
}


// 53 DIGITAL CLOCK PROGRAM
document.getElementById("digitalClock-h1").textContent = "53. Digital Clock Program";

function updateClock() {
    // get the current time. then each period of time put into a variable, then template literal them together and make this the textContent of the clock
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0); //to add a 0 before any value that needs it to pad it out so it looks like a clock
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}
updateClock();
// setInterval(updateClock, 1000); //update the clock every second


// 54 STOPWATCH PROGRAM
document.getElementById("stopwatch-h1").textContent = "54. Stopwatch Program";

const stopwatchDisplay = document.getElementById("stopwatchDisplay");
let timer = null; //keep track of when it's stopped. null to start with
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10); //get the time every 10ms
        isRunning = true;
    }
}

function stop() {
    if(isRunning) {
        clearInterval(timer); //stop the timer
        elapsedTime = Date.now() - startTime; //remember the time it was stopped at
        isRunning = false; //not running
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    stopwatchDisplay.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); //convert ms to hours
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60); //modulus 60, don't want minutes to go above 60 so it reset to 0
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let milliseconds = Math.floor(elapsedTime % 1000 / 10); // / by 10 to get 2 decimal place  milliseconds, not the full to the thousandth

    //convert time to strings and pad with a 0 or 2 0's so it looks like the time
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}


// CANT GET THE IMPORT TO WORK
// 55 ES6 MODULES
document.getElementById("es6Modules-h1").textContent = "55. ES6 Modules";

// ES6 Module = an external file that contains reusable code that can be imported into other JS files. Write reusable code for many different apps. Can contain variables, classes, functions and more
// object destructuring 
// import {es6PI, es6getCircumference, es6getArea} from `mathUti.js`;
// console.log(es6PI);
// const es6Circumference = es6getCircumference(10);
// const es6Area = es6getArea(10);

// console.log(`${es6Circumference.toFixed(2)}cm`);
// console.log(`${es6Area.toFixed(2)}cm^2`);


// 56 ASYNCHRONOUS CODE
document.getElementById("asynchronousCode-h1").textContent = "56. Asynchronous Code";

// synchronous = Executes line by line consecutively in a sequential manner. Code that waits for an operation to complete
// executes line by line. can't move onto task 2 until task 1 is completed

// console.log("task 1");
// console.log("task 2");
// console.log("task 3");

// asynchronous = Allows multiple operations to be performed concurrently without waiting. Doesn't block the execution flow and allows the program to continue.
            //    (I/O operations, network requests, fetching data). anything that takes an undetermined amount of time
            //    Handled with: Callbacks, Promises, Async/Await

// setTimeout is an e.g. of asynchronous code. It will allow the other tasks to be completed while waiting for it's code to execute after 3 secs
// setTimeout(() => console.log("Task 1"), 3000);
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");

// if synchronous code has to complete after asynchronous, make it a callback of that function
function func1(callback) {
    setTimeout(() => {console.log("Task 1") // with 2 pieces of code now put it in {}
                      callback()}, 3000); 
}
function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
func1(func2);


// 57 ERROR HANDLING
document.getElementById("errorHandling-h1").textContent = "57. Error Handling";

// error = an Object that is created to represent a problem that occurs. Occurs often with user input or establishing a connetion
// when uncaught, it will interrupt the flow of the program and not execute any code after the error

// try {  } = enclosed code that might potentialy cause an error
// catch {  } = catch and handle any thrown Errors from try { }
// finally {  } = (optional) Always executes. used mostly for clean up e.g. close files, close connections, release resources

// try {
//     console.log(c);
//     // if you experience errors put them in a try block, then the rest of your code can run and see what is or shouldn't be happening
//     // NETWORK ERRORS
//     // PROMISE REJECTION
//     // SECURITY ERRORS
// }
// catch(error) {
//     console.error(error); // catch and show any errors to make sure the rest of the code works
// }
// finally { // if any code doesn't work because of the errors, regardless, make sure the code to close connections etc is executed to avoid anything disastrous
//           // do any clean up needed, regardless of if an error occurs
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
//     console.log("This always executes");
// }
// console.log("You have reached the end");

// there's another example but i dont see the point as it's just an if statement to check if input is a number or not using try and then catch the error.
// when making an error use throw new Error("Value must be a number");


// 58 CALCULATOR PROGRAM
document.getElementById("calculator-h1").textContent = "58. Calculator Program";

const calculatorDisplay = document.getElementById("calculatorDisplay");

function appendToDisplay(input) {
    calculatorDisplay.value += input;
}

function clearDisplay() {
    calculatorDisplay.value = "";
}

function calculate() {
    try {
        calculatorDisplay.value = eval(calculatorDisplay.value); // e.g. 4+ returns an error because you need to finish the equation. eval is a built in calculate function
    }
    catch(error) {
        calculatorDisplay.value = "Error"; // catch the error and display error, you can then clear it
    }
}

// 59 DOM
document.getElementById("dom-h1").textContent = "59. DOM";

// DOM = DOCUMENT OBJECT MODEL
// Object that represents the page you see in the web browser and provides the API to interact with it.
// web browser constructs the DOM when it loads a HTML document and structures all the elements in a tree-like representation
// JS can acces the DOM dynamically to change the content, structure and style of a webpage e.g. .textContent

document.title = "JavaScript";
//console.log(document); //will display your html document
//console.dir(document); // directory will return all the properties of the document
//document.body.style.backgroundColor = "black"; //quick example to change to dark mode, although need to change all text to white

const domUsername = " Uce McJuce";
const welcomeMsg = document.getElementById("dom-h2");

welcomeMsg.textContent += domUsername === "" ? " Guest" : domUsername; //if username is empty say welcome guest else welcome username


// 60 ELEMENT SELECTORS
document.getElementById("elementSelector-h1").textContent = "60. Element Selectors";

// element selectors = methods used to target and manipulate HTML elements. They allow you to select one or multiple HTML elements from the DOM

// 1. document.getElementById()         ELEMENT OR NULL
// 2. document.getElementsClassName()   HTML COLLECTION // like arrays but less useful i.e. don't have a builtin forEach() method
// 3. document.getElementsByTagName()   HTML COLLECTION // live. do update automatically in the dom
// 4. document.querySelector()          FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()       NODELIST. static, don't update automatically in the dom. do have builtin functions unlike html collections

const selectorH2 = document.getElementById("selector-h2"); //if you misspell selector-h2 it will return null
selectorH2.style.backgroundColor = "yellow";
selectorH2.style.textAlign = "center";
console.log(selectorH2); //returns the HTML of this element including any styles applied here will be displayed as HTML attributes. will only return the shorthand if it is last in the code

const selectorFruits = document.getElementsByClassName("selectorFruits");
// selectorFruits[0].style.backgroundColor = "red"; //to style individually give the index apple is now red
// for(let sFruit of selectorFruits) { //let element of HTML collection (essentially an array)
//     sFruit.style.backgroundColor = "yellow"; //loop through and make each one yellow
// }

// typecast the HTML collection into an array to use forEach()
Array.from(selectorFruits).forEach(selFruit => {
    selFruit.style.backgroundColor = "yellow";
})
console.log(selectorFruits);

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

//h4Elements[1].style.backgroundColor = "yellow";
// for(let h4Element of h4Elements) {
//     h4Element.style.backgroundColor = "yellow";
// }
// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// })

// const qElement = document.querySelector(".selectorFruits"); //("ul") will highlight the first 3 bullet points. ("li") will highlight beets
// qElement.style.backgroundColor = "orange";

// const allFoods = document.querySelectorAll("li");
// allFoods[1].style.backgroundColor = "purple";
// allFoods.forEach(food => { // nodelists have a forEach() method
//     food.style.backgroundColor = "pink";
// })


// 61 DOM NAVIGATION
document.getElementById("domNavigation-h1").textContent = "61. DOM Navigation";

// dom navigation = the process of navigating through the structure of a HTML document using JS
// html elements include but aren't limited to .firstElementChild   .lastElementChild   .nextElementSibling    .previousElementSibling    .parentElement   .children

// .firstElementChild
const navElement1 = document.getElementById("navFruits") //"navVeg" "navDesserts" to highlight the firstChildElement of those ul (carrots and cake)
const firstChild = navElement1.firstElementChild;
firstChild.style.backgroundColor = "yellow";

// //this would work if there wasn't other ul's in my index.html. select all first children elements of all unordered lists and highlight yellow
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const qsaFirstChild = ulElement.firstElementChild;
//     qsaFirstChild.style.backgroundColor = "yellow";
// })

// .lastElementChild
const navElement2 = document.getElementById("navVeg"); //banana and icecream if you put in "navFruit" or "navDessert"
const lastChild = navElement2.lastElementChild;
lastChild.style.backgroundColor = "orange";

// //this would work if there wasn't other ul's in my index.html. select all last children elements of all unordered lists and highlight orange
// const ulElements2 = document.querySelectorAll("ul");
// ulElements2.forEach(ulElement => {
//     const qsaLastChild = ulElement.lastElementChild;
//     qsaLastChild.style.backgroundColor = "orange";
// })

// .nextElementSibling 
// if you select carrots, the next sibling is onions
const navElement3 = document.getElementById("cake");
const nextSibling = navElement3.nextElementSibling;
nextSibling.style.backgroundColor = "red";

//if you select navFruits, the next sibling is navVeg
// const navElement4 = document.getElementById("navFruits");
// const nextSibling2 = navElement4.nextElementSibling;
// nextSibling2.style.backgroundColor = "red";

// .previousElementSibling
const navElement5 = document.getElementById("pie"); // put "navDessert" it will highlight navVeg
const prevSibling = navElement5.previousElementSibling;
prevSibling.style.backgroundColor = "pink";

// .parentElement
// const navElement6 = document.getElementById("apple");
// const parent = navElement6.parentElement;
// parent.style.backgroundColor = "green";

// .childElement
// const navElement7 = document.getElementById("navVeg");
// const children = navElement7.children;

// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "blue";
// })
// // a sepeate navElement 8 and use any navfruit, navveg, navdessert. then choose which index you want a separate colour
// children[1].style.backgroundColor = "white";


// 62 ADD & CHANGE HTML
document.getElementById("addChangeHTML-h1").textContent = "62. Add & Change HTML";
// e.g. 1 <h1>

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1")

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "Uce likes pizza";
newH1.id = "myH1";
newH1.style.color = "red";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
document.getElementById("box1").append(newH1); // prepend puts it before any other code/elements, it's the first child of box1. append puts it at the end/bottom. it's the last child of box1

// to put h1 inbetween box1 and box2
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2) //insertBefore(new element, current element)

// select all elements with class of box, then use index to put h1 before a certain box
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[4]);

// REMOVE HTML ELEMENT
// document.getElementById("box1").removeChild(newH1); //can do document.body.removeChild if you want to get rid of one or all h1 elements within the body for example

// e.g. 2 <li>

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
document.getElementById("olFruits").append(newListItem); //prepend to put coconut at 1

// const orange = document.getElementById("olOrange");
// document.getElementById("olFruits").insertBefore(newListItem, orange); //puts coconut at number 2. to put it a 3 use olBanana

// if there was no id's or classes do this
// const listItems = document.querySelectorAll("#olFruits li") //get all list items in the ordered list olFruits
// document.getElementById("olFruits").insertBefore(newListItem, listItems[0]);

// REMOVE HTML ELEMENT
// document.getElementById("olFruits").removeChild(newListItem);


// 63 MOUSE EVENTS
document.getElementById("mouseEvents-h1").textContent = "63. Mouse Events";

// eventListener = listen for specific events to create interactive webpages.
// events: click, mouseover, mouseout.  .addEventListener(event, callback/arrow function) e.g. (click, changeColor)
const mouseEventBox = document.getElementById("mouseEventBox");

// function changeColor(event) {
//     //console.log(event) //event is an object given by JS and in this case returns PointerEvent. dont need to call or pass anything in line 2097
//     event.target.style.backgroundColor = "red"; //target is where you clicked, another JS object given for events
//     event.target.textContent = "ow"
// }
// mouseEventBox.addEventListener("click", changeColor)

mouseEventBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "OUCH 😵";
});

mouseEventBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😧";
});

mouseEventBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click me 😀";
});


// 64 KEY EVENTS
document.getElementById("keyEvents-h1").textContent = "64. Key Events";

// eventListener = listen for specific events to create interactive webpages.
// events: keydown, keyup. (press down a key, lift up a key)    (also keydown but can't use this in webpages)
// document.addEventListener("keydown", event => {
    //console.log(event); //returns KeyboardEvent
   //console.log(event.key); //tells you what key was pressed and will keep firing that if you hold it down or just once if you press it once
//    console.log(`Key down = ${event.key}`);
// });
// document.addEventListener("keyup", event => {
//     console.log(`Key up = ${event.key}`);
// });

const keyEventBox = document.getElementById("keyEventBox");
const moveAmount = 10;
let keyEventX = 0;
let keyEventY = 0;

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")) {
        switch(event.key) { //if the key of the event (keydown) matches the case do that code
            case "ArrowUp":
                keyEventY -= moveAmount; //essentially going backwards if you're confused
                break;
            case "ArrowDown":
                keyEventY += moveAmount;
                break;
            case "ArrowLeft":
                keyEventX -= moveAmount;
                break;
            case "ArrowRight":
                keyEventX += moveAmount;
                break;
        }
        keyEventBox.textContent = "😧";
        keyEventBox.style.backgroundColor = "red";
        keyEventBox.style.top = `${keyEventY}px`;
        keyEventBox.style.left = `${keyEventX}px`;
    }
});

document.addEventListener("keyup", event => {
        keyEventBox.textContent = "😀";
        keyEventBox.style.backgroundColor = "lightblue";
    });


// 65 HIDE/SHOW HTML
document.getElementById("hideShowHTML-h1").textContent = "65. Hide/Show HTML";

const hideBtn = document.getElementById("hideBtn");
const kermit = document.getElementById("kermit");

hideBtn.addEventListener("click", event => {
    if(kermit.style.visibility === "hidden") { //visibility retains the space occupied by the image so the button doesn't keep moving up and down. display = "none" doesn't keep this, just gets rid of the image and the space it took up
        kermit.style.visibility = "visible";
        hideBtn.textContent = "Hide";
    } 
    else {
        kermit.style.visibility = "hidden";
        hideBtn.textContent = "Show";
    }
});


// 66 NODELISTS
document.getElementById("nodelists-h1").textContent = "66. Nodelists";

// nodelist = static collection of HTML elements by (id, class, element). can be created using querySelectorAll(). similar to an array but no (map, filter, reduce) but do have forEach()
// nodelist won't update automatically to reflect changes to the DOM. if you want to remove an element from a nodelist that's in the dom you have to remove it from the dom and the nodelist
let buttons = document.querySelectorAll(".nodelistBtns"); //can queryselectall button elements by "button" but don't want to
console.log(buttons);

// add html/css properties to nodelist
// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "🫡";
// });

// click event listener to nodelist
// buttons.forEach(button => { //foreach element (button) in nodelist buttons do this
//     button.addEventListener("click", event => { // when you click on a button do this
//         event.target.style.backgroundColor = "red"; //event is registered and what was clicked will change red
//     });
// });

// mouseover & mouseout event listener to nodelist
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(229, 100%, 40%)";
    })
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(229, 100%, 62%)";
    })
});

// add an element to nodelist
// const newBtn = document.createElement("button");
// newBtn.textContent = "Button 5";
// newBtn.classList = "nodelistBtns";
// document.getElementById("nlBtnContainer").append(newBtn);
// console.log(buttons); //button 5 isn't in the nodelist but is in the dom as it doesn't automaticallty update, you have to manually add it

// buttons.document.querySelectorAll(".nodelistBtns");
// console.log(buttons); //button 5 is now in nodelist (nodelist has 5 element)

// remove an element from a nodelist and the dom
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".nodelistBtns");
        console.log(buttons);
    });
});


// 67 CLASSLIST
document.getElementById("classList-h1").textContent = "67. classList";

// classList = element property in JS used to interact with an element's list of classes (CSS classes). allows you to make reusable classes for many elements acrss your webpage
// add()    remove()    toggle(remove if present, add if not)    replace(oldClass, newClass)    contains()
const classListBtn = document.getElementById("classListBtn");
classListBtn.classList.add("enabled"); //added .enabled class to the button through JS

classListBtn.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
});
classListBtn.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
});

//toggle works the same as above
// classListBtn.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });
// classListBtn.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// });

classListBtn.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")) { //contains. if the buttons classList contains disabled (button is grey) and you click it angry face
        event.target.textContent += "🤬";
    } else {
        event.target.classList.replace("enabled", "disabled"); //replace enabled with disabled and change the colour of the button
    }
});

// use classlists with nodelists
let clBtns = document.querySelectorAll(".classlistBtns");

clBtns.forEach(button => {
    button.classList.add("enabled");
});

clBtns.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});
clBtns.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

clBtns.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")) { //contains. if the buttons classList contains disabled (button is grey) and you click it angry face
            event.target.textContent += "🤬";
        } else {
        event.target.classList.replace("enabled", "disabled");
    }
    });
});


// 68 ROCK PAPER SCISSORS
document.getElementById("rps-h1").textContent = "68. Rock Paper Scissors";

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const cpuDisplay = document.getElementById("cpuDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const cpuScoreDisplay = document.getElementById("cpuScoreDisplay");

let playerScore = 0;
let cpuScore = 0;

function playGame(playerChoice) {
    const cpuChoice = choices[Math.floor(Math.random() * 3)]; // will be random number from 0, 1, 2
    let result = "";

    if(playerChoice === cpuChoice) {
        result = "It's a tie";
    }
    else {
        switch(playerChoice) { //if player chooses rock and cpu chooses scissors you win. line 2306 both chose rock so it's a tie so the next thing in the ternary operator is you lose because cpu chose paper
            case "rock":
                result = (cpuChoice === "scissors") ? "You win" : "You lose";
                break;
            case "paper": // if you choose paper and cpu choose rock you win otherwise cpu chose scissors so you lose or line 2036 would happen first if it chose paper making a tie
                result = (cpuChoice === "rock") ? "You win" : "You lose";
                break;
            case "scissors":
                result = (cpuChoice === "paper") ? "You win" : "You lose";
                break;
        }
    }
    playerDisplay.textContent = `player: ${playerChoice}`;
    cpuDisplay.textContent = `cpu: ${cpuChoice}`;
    resultDisplay.textContent = result;

    //remove the classlists to revert text colour back to normal after each game
    resultDisplay.classList.remove("greenText", "redText");

    //classlist to add green or red text whether you won or lost
    switch(result) {
        case "You win":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lose":
            resultDisplay.classList.add("redText");
            cpuScore++;
            cpuScoreDisplay.textContent = cpuScore;
            break;
    }
}


// 69 IMAGE SLIDER
document.getElementById("imageSlider-h1").textContent = "69. Image Slider";

// make a nodelist for the image (querySelectorAll returns a nodelist)
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

initialiseSlider();

function initialiseSlider() { //the first image
    if(slides.length > 0) {//if there is an image in the nodelist of images, show it
        slides[slideIndex].classList.add("displaySlide"); //slides = lambo images nodelist at index 0, display as a block i.e. show not hide
        intervalId = setInterval(nextSlide, 5000); //after 5 seconds move to the next image and display the next slide
    }
}
function showSlide(index) {
    if(index >= slides.length) {
        slideIndex = 0; //if you go past the 3rd image reset to the begining
    }
    else if (index < 0) {  //if you press back when you're on index 0 (the first image) go to the last image
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide"); //for each slide in the nodelist, hide it then show the next one
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
    clearInterval(intervalId); //clear interval timer so it doesn't keep moving forward
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++; //move to the next slide
    showSlide(slideIndex); //show the next (that) slide
}


// 70 CALLBACK HELL
document.getElementById("callbackHell-h1").textContent = "70. Callback Hell";

// callback hell = situation in JS where callbacks are nested within other callbacks to the degree where the code is difficult to read. 
// old pattern to handle asynchronous functions. use promises + async/await to avoid callback hell
// usually 5 or more callbacks within each other is too much and callback hell. there is an example but i dont want to do it
// function walkDog(callback) {
//     setTimeout(() => {
//         console.log("You walk the dog");
//         callback();
//     }, 1500);
// }
// function cleanKitchen(callback) {
//     setTimeout(() => {
//         console.log("You clean the kitchen");
//         callback();
//     }, 2500);
// }
// function takeOutTrash(callback) {
//     setTimeout(() => {
//         console.log("You take out the trash");
//         callback();
//     }, 500);
// }
// //callback hell
// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => console.log("You finished all the chores."))
//     });
// });


// 71 PROMISES
document.getElementById("promises-h1").textContent = "71. Promises";

// promise = an object that manages asynchronous operations. wrap a promise object around {asynchronous code}.
// a promise promises to return a value, it will first be pending then either be resolved if completed or rejected if failed
// new Promise(resolve, reject) => {asynchronous code}

// do these chores in order
// 1. walk the dog
// 2. clean the kitchen
// 3. take out the trash

//with this being asynchronous code it has to be completed in a certain order, if not the reject won't let the code move on
// function walkDog2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = true;
            
//             if(dogWalked) {
//                 resolve("You walk the dog"); //completion message when the promise resolves
//             } else {
//                 reject("You DIDN'T walk the dog");
//             }
//         }, 1500);
//     });
// }
// function cleanKitchen2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchenCleaned = true;
            
//             if(kitchenCleaned) {
//                 resolve("You clean the kitchen");
//             } else {
//                 reject("You DIDN'T clean the kitchen");
//             }
//         }, 2500);
//     });
// }
// function takeOutTrash2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trashTakenOut = false;
            
//             if(trashTakenOut) {
//                 resolve("You take out the trash");
//             } else {
//                 reject("You DIDN'T take out the trash");
//             }
//         }, 500);
//     });
// }
// //method chaining
// walkDog2().then(value => {console.log(value); return cleanKitchen2()})
//           .then(value => {console.log(value); return takeOutTrash2()})
//           .then(value => {console.log(value); console.log("You finished all the chores")}) //the value is "you walk the dog", pass as a parameter then print it
//           .catch(error => console.error(error)); //catch the error so its not uncaught 


// 72 ASYNC/AWAIT
document.getElementById("asyncAwait-h1").textContent = "72. Async/Await";

// async/await = Async = makes a function return a promise
            //   Await = makes an async function wait for a promise
// allows you to write asynchronous code in a synchronous manner. Async doesn't have to resolve or reject parameters. everything afer Await is placed in an event queue

// using async and await together you dont need to resolve and reject code and dont need to use all the .then chains
function walkDog3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            
            if(dogWalked) {
                resolve("You walk the dog"); //completion message when the promise resolves
            } else {
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}
function cleanKitchen3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            
            if(kitchenCleaned) {
                resolve("You clean the kitchen");
            } else {
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}
function takeOutTrash3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            
            if(trashTakenOut) {
                resolve("You take out the trash");
            } else {
                reject("You DIDN'T take out the trash");
            }
        }, 500);
    });
}

async function doChores() {
    try {
        const walkDogResult = await walkDog3(); //wait for the promise rejection or resolve
        console.log(walkDogResult); //print all chores in a synchronous manner, line by line
    
        const cleanKitchenResult = await cleanKitchen3();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash3();
        console.log(takeOutTrashResult);
    
        console.log("You finished all the chores");
    }
    catch(error) {
        console.error(error);
    }
}
doChores();


// 73 JSON FILES
document.getElementById("jsonFiles-h1").textContent = "73. JSON Files";

// JSON = (JavaScript Object Notation) data-interchange format used for exchanging data between a server and a web application. JSON files are usually an object {key:value} or an array of values [value1, value2, value3] or an array of object [{}. {}, {}]
// JSON is one long string to represent the array/object
// JSON.stringify() = converts a JS object to a JSON string
// JSON.parse() = converts a JSON string to a JS object

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["jellyfishing", "karate", "cooking"]
};
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}];

//prints all the code of each variable with no spaces but all the [] {} but not the ;
const jsonStringNames = JSON.stringify(names);
const jsonStringPerson = JSON.stringify(person);
const jsonStringPeople = JSON.stringify(people);
// console.log(jsonStringNames);
// console.log(jsonStringPerson);
// console.log(jsonStringPeople);

//to make them into strings surround with `` but not the ; otherwise they wont be separate
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["jellyfishing", "karate", "cooking"]}`;
const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
                {"name": "Patrick","age": 34,"isEmployed": false},
                {"name": "Squidward","age": 50,"isEmployed": true},
                {"name": "Sandy","age": 27,"isEmployed": false}]`;

const parsedNames = JSON.parse(jsonNames);
const parsedPerson = JSON.parse(jsonPerson);
const parsedPeople = JSON.parse(jsonPeople);
// console.log(parsedNames);
// console.log(parsedPerson);
// console.log(parsedPeople);

fetch("/person.json")
    .then(response => response.json()) //convert to json i.e. you can fetch and convert any file to json
    .then(value => console.log(value)) //print the object of person (spongebob)

// print each object separately. iterate through and print using foreach
fetch("/people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value))) //if you want specific properties add .name after value
    .catch(error => console.error(error)); //catch any errors if the json file cant be fetched


// 74 FETCH DATA FROM AN API
document.getElementById("fetchDataAPI-h1").textContent = "74. Fetch Data from an API";

// fetch = function used for making HTTP requests to fetch resources (JSON style data, images, files)
// simplifies asynchronous data fetching in JS and used for interacting with APIs to retrieve and send data asynchronously over the web
// fetch(url, {options})

fetch("https://pokeapi.co/api/v2/pokemon/raichu") //either rejects or resolves so then do it, if not catch the error
    .then(response => { //fetch returns response object
        if(!response.ok) {
            throw new Error("Could not fetch resource"); //throw error if ok is false. ok is a variable in the pokemon object that says whether it can find that pokemon or not. it returns error 404 but we're throwing this error and catching it
        }
        return response.json(); //convert the raichu (any pokemon) object into json
    })
    .then(data => console.log(data.name)) //get the name from the data object in the raichu object
    .catch(error => console.error(error));


// fetchData();
// // using async/await to fetch data. async makes a function return a promise, await makes an async functions wait for a promise
// async function fetchData() {
//     try { //fetch returns response object. await the promise returned by fetch
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/chimchar");

//         //when the promise from fetch resolves, need to see if the response is ok (i.e. it found the pokemon)
//         if(!response.ok) {
//             throw new Error("Could not fetch resource");
//         } 

//         const data = await response.json();
//         console.log(data.name);
//     }
//     catch(error) {
//         console.error(error);
//     }
// }

fetchData2();
async function fetchData2() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        //when the promise from fetch resolves, need to see if the response is ok (i.e. it found the pokemon)
        if(!response.ok) {
            throw new Error("Could not fetch resource");
        } 

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error) {
        console.error(error);
    }
}


// 75 WEATHER APP PROJECT
document.getElementById("weatherApp-h1").textContent = "76. Weather App Project";

const weatherForm = document.querySelector(".weatherForm"); 
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card"); //return first element (thats what queryselector does)
const apiKey = "2a8bf7cf8093ace3539887a7eee5905f";

weatherForm.addEventListener("submit", async event => { //put async here so you can use await on line 2692
    event.preventDefault(); //prevent it refreshing
    const city = cityInput.value;
    if(city) { //if a city has been provided try the code and catch any errors with the same error message
        try {
            const weatherData = await getWeatherData(city); //the function getWeatherData will take a city input and this will be stored in weatherData const
            displayWeatherInfo(weatherData); //weatherData (the input) will be displayed
        }
        catch(error) {
            console.error(error);
            displayError(error);
        }
    } else {
        displayError("Please enter a city"); //if theres no city/nothing inputted display the error
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; //this is the apiUrl pass in the city any my api key
    const response = await fetch(apiUrl); //fetch the api and await for the promise to reject or resolve
    console.log(response);

    //if input is not a city throw erro, else return the response and convert to a json object
    if(!response.ok) {
        throw new Error("Could not fetch weather data");
    } 
    return await response.json();
}

function displayWeatherInfo(data) { //object and array destructuring to get the data thats in objects and separate them into one object (data). i.e. get the desc and id variables from the weather array of objects from the site, get the city from the name object etc
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;

    card.textContent = ""; //reset text content if there was anything displayed before this
    card.style.display = "flex";

    const cityDisplay = document.createElement("h2");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmojiDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmojiDisplay.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmojiDisplay.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmojiDisplay);
}

function getWeatherEmoji(weatherId) {
    switch(true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "⛈️🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "😶‍🌫️";
        case (weatherId == 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message) { //function that takes a message parameter
    const errorDisplay = document.createElement("p"); //make a new p element
    errorDisplay.textContent = message; //in that p element display the message from line 2701
    errorDisplay.classList.add("errorDisplay");

    card.textContent = ""; //the card wont display anything other than the error message
    card.style.display = "flex"; //display the error message as a 
    card.appendChild(errorDisplay); //append this p element as a child to the end of the card div
}