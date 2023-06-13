/**
 * npm install -g solc
 * Ganache
 * Web3.js
 * solc <file_name>.sol --bin --abi --optimize -o <output_directory>
 * npm config set python python2.7 --global
 * npm config get python
 * npm config set python C:\Python27\python.exe --global
 * echo $env:VCTargetsPath
 * npm i -g web3
 * 1113 2301435769E
 * ECMAscript 3
 * Learning Javascript Starting with Eloquent Javascript
 */
// https://github.com/alepez/LiveReload-sublimetext3
/* 
pylint --generate-rcfile > ~/.pylintrc
errors-only=yes
https://www.gitstart.com

https://github.com/matriex/cmatrix
git clone https://github.com/matriex/cmatrix

Set-Executionpolicy remotesigned
Import-Module .\cmatrix
Set-ScreenSaverTimeout -Seconds 5
Enable-ScreenSaver

$env:PSModulePath
Import-Module cmatrix
*/

//! I Waited 15 Years For These New Array Methods.
/* 
const people = ["Sally", "Kyle", "John"]
const peopleCopy = [...people]
prople.with(2, "New")
people.sort()
[...people].sort()
people.toSorted()
people.reverse()
people.toReversed()
people.slice(0, 2, "New")
people.toSpliced(0, 2, "New") */

let nums = [1, 2, 3, 4, 5];
let letters = ['A', 'B', 'C'];
console.log(nums.reverse());
console.log(letters.reverse());

const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));

// ------------------- JavaScript One-Liners -------------------------------
// 1. How to Capitalize Text
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// 2. How to Calculate Percent
const calculatePercent = (value, total) => Math.round((value / total) * 100);

// 3. How to Get a random Element
const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];

// 4. How to Remove Duplicate Elements
const removeDuplicates = (arr) => [...new Set(arr)];

// 5. How to Sort Elements By Certain Property
const sortBy = (arr, key) => arr.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));

// 6. How to Check if Arrays/Objects are Equal
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// 7. How to Count Number of Occurrences
const countOccurrences = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

// 8. How to Wait for a Certain Amount of Time
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

// 9. How to Use the Pluck Property from Array of Objects
const pluck = (objs, key) => objs.map((obj) => obj[key]);

// 10. How to Insert an Element at a Certain Position
const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index)];

/**
 * --Problem Solving
 * --Breakdown Problems
 * --Experience --> Build something that is more impressive than most people
 * -Variables
 * -Data Types
 * -Loops
 * -Control Flow
 * -Functions
 * 1.Pick A Focus(WEB)
 * 2.Learn to Learn(Course on Cousera)
 * --Recall
 * --Testing self regularly
 * --Interleaving Problems
 * --Taking regular breaks
 * 3.Be Practical
 * 4.Don't be a Monkey Coder
 * 5.Use A.I to ur advantage
 * 6.Learn to Communicate
 */

//-------------Sum all numbers that are less than/equal to 10---------------
var total = 0;
var count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}

//---------------------If sum and range existed as functions ------------------------
// print(sum(range(1, 10)));
//----------------------------------------
function fac(n) {
  return n == 0 ? 1 : n * fac(n - 1);
}
//----------------------IEEE 754, Unicode Standard----------------
typeof 4.5;
typeof 'x';

//---------- Operators and Booleans, Logical operators
// >=, <=, ==, !=, && - and, || - or , ! - not

// ---------------- Keywords --------------
/* abstract boolean break byte case catch char class const continue debugger default delete do double else enum export extends false final finally float for function goto if implements import in instanceof int interface long native new null package private protected public return short static super switch synchronized this throw throws transient true try typeof var void volatile while with */

// ---------------- Functions ----------------
/* alert("Good Morning!");
Math.max(2, 4); -> 4
confirm("Shall we, then?"); -> OK - true, Cancel - false
prompt("Tell me everything you know.", "..."); */

/*
The function Number converts a value to a number, which is needed in
this case because the result of prompt is a string value. There are similar functions called String and Boolean that convert values to those types.
*/

// var theNumber = Number(prompt('Pick a number', ''));
// alert('Your number is the square root of ' + theNumber * theNumber);

// ----------------------------Conditional Execution---------------------------------
// var theNumber = Number(prompt('Pick a number', ''));
// if (!isNaN(theNumber)) alert('Your number is the square root of ' + theNumber * theNumber);
// else alert('Enter a valid Number Please');

// -----------While Loop for Returning all even numbers from 0 and 12-------------------
// var currentNumber = 0;
// while (currentNumber <= 12) {
//   console.log(currentNumber);
//   currentNumber = currentNumber + 2;
// }

// -------------------------Returning the value of ^10--------------------------------
var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
// console.log(result);

// -------------------------------- Do Loop ------------------------------------
// do {
//   var input = prompt('Who are you?');
// } while (!input);

// --------------------------------------- For Loop ----------------------------
// for (var number = 0; number <= 12; number += 2) console.log(number);
//-----------------------------
var result = 1;
for (var counter = 0; counter < 10; counter++) result *= 2;
console.log(result);

// ---------------- Breaking Out of the Loop --------------------------
// -- Programs that finds the first number that is greater than 20 but divisible by 7 --
for (var current = 20; ; current++) {
  if (current % 7 == 0) break;
}
console.log(current);
// --------------------- OR -----------------------
for (var current = 20; current % 7 != 0; current++); // Do nothing.
console.log(current);

// --------------------- Switch Statement------------------------------
switch (prompt('What is the weather like?')) {
  case 'rainy':
    print('Remember to bring an umbrella.');
    break;
  case 'sunny':
    print('Dress lightly.');
  case 'cloudy':
    print('Go outside.');
    break;
  default:
    print('Unknown weather type!');
    break;
}

// ---------------------- Fucntions Chapter 2 Pg 29---------------------
function square(x) {
  return x * x;
}
square(12);

// ------------------------------------------------------------------------------------
function power(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++) result *= base;
  return result;
}
power(2, 10);
