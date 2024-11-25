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