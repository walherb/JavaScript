/*  ECMAscript 3
	Learning Javascript Starting with Eloquent Javascript
*/
//-------------Sum all numbers that are less than/equal to 10--------------- 
<html><body><script type="text/javascript">
var total = 0, count = 1;
while (count <= 10) {
	total += count;
	count += 1;
}
document.write(total); // print(total); 
</script></body></html>

//---------------------If sum and range existed as functions ------------------------
print(sum(range(1, 10)));
//----------------------------------------
function fac(n) {
	return n == 0 ? 1 : n * fac(n - 1);
}
//----------------------IEEE 754, Unicode Standard----------------
typeof 4.5
typeof "x"

//---------- Operators and Booleans, Logical operators
>=, <=, ==, !=, && - and, || - or , ! - not

// ---------------- Keywords --------------
abstract boolean break byte case catch char class const continue debugger default delete do double else enum export extends false final finally float for function goto if implements import in instanceof int interface long native new null package private protected public return short static super switch synchronized this throw throws transient true try typeof var void volatile while with

// ---------------- Functions ----------------
alert("Good Morning!");
Math.max(2, 4); -> 4
confirm("Shall we, then?"); -> OK - true, Cancel - false
prompt("Tell me everything you know.", "...");

/*
The function Number converts a value to a number, which is needed in
this case because the result of prompt is a string value. There are similar functions called String and Boolean that convert values to those types.
*/

var theNumber = Number(prompt("Pick a number", ""));
alert("Your number is the square root of " + (theNumber * theNumber));

// ----------------------------Conditional Execution---------------------------------
var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
	alert("Your number is the square root of " + (theNumber * theNumber));
else 
	alert("Enter a valid Number Please");

// ---------------------While Loop for Returning all even numbers from 0 and 12-------------------
var currentNumber = 0;
while (currentNumber <= 12) {
	document.write(currentNumber);
	currentNumber = currentNumber + 2;
}

// -------------------------Returning the value of ^10--------------------------------
var result = 1;
var counter = 0;
while (counter < 10) {
	result = result * 2;
	counter = counter + 1;
}
document.write(result);

// -------------------- Do Loop ------------------------------------
do {
	var input = prompt("Who are you?");
} while (!input);

// ------------------ For Loop ----------------------------
for (var number = 0; number <= 12; number += 2 )
	document.write(number);
//-----------------------------
var result = 1;
for (var counter = 0; counter < 10; counter++)
	result *= 2;
	document.write(result);
	
// ---------------- Breaking Out of the Loop --------------------------
// --------------Programs that finds the first number that is greater than 20 but divisible by 7 -------
for (var current = 20; ; current++) {
	if (current % 7 == 0)
		break;
}
document.write(current);
// --------------------- OR -----------------------
for (var current = 20; current % 7 != 0; current++)
; // Do nothing.
document.write(current);

// --------------------- Switch Statement------------------------------
switch(prompt("What is the weather like?")) {
	case "rainy":
		print("Remember to bring an umbrella.");
		break;
	case "sunny":
		print("Dress lightly.");
	case "cloudy":
		print("Go outside.");
		break;
	default:
		print("Unknown weather type!");
		break;
}

// ---------------------- Fucntions Chapter 2 Pg 29---------------------
function square(x){
	return x * x
}
square(12);

// ----------------------------------------------------------------------------------------------------
function power(base, exponent) {
	var result = 1;
	for (var count = 0; count < exponent; count++)
		result *= base;
	return result;
}
power(2, 10);

// JavaScript Tutorial for Beginners - Learn JavaScript in 1 Hour - Mosh YouTube Video
<script src="index.js"></script>
// node index.js 
// View -> Terminal
let name = 'Mosh';

// variables
// Cannot be a reserved keyword
// Sould be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen(-)
// Camelcase
// Are case-sensitive
let firstName, lastName;

// constants
const interestRate;

// Objects 
let person = {
	name: 'Mosh',
	age: 30
};
console.log(person);
person.name = 'John';
person['name']

// Arrays 
let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]);
console.log(selectedColors.length);
// In javascript u can store different elements in an array

// Performing a task 
function greet(name, lastName) {
	console.log('Hello ' + name + ' ' + lastName);
}
greet('Mosh', 'Hamedani');

// Calculating a value
function square(number) {
	return number * number;
}
console.log(square(2));

// - Code With Mosh: Code with Mosh -  JavaScript Basics for Beginners [AhLaN] -------
