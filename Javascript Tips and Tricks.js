SuperSimpleDev -- {YouTube Channel}
MVC Architecture (also called MVW,MVVM,MV*) 
1.Rendering 		=> View
2.Data Handling 	=> Model
3.Event Handling 	=> Controller
PDO => PHP Data Objects

Nassolo

let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

Mozilla Developer Network
Frontend Masters

0772058550 

https://cdnjs.cloudflare.com/ajax/libs/react/18.3.0-next-229c86af0-20220616/umd/react.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react/18.3.0-next-229c86af0-20220616/cjs/react.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.0-next-229c86af0-20220616/umd/react-dom.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.0-next-229c86af0-20220616/cjs/react-dom.production.min.js

Iaas -> Infrastructure as a service
PaaS -> Platform as a service 
SaaS -> Software as a service

document.body.innerHTML = 'Hello';
typeof 

<script src="hello.js"></script>

let book = {
	topic: "JavaScript";
	edition: 7
};

book.topic 
book["edition"]
book.author = "Flanagan";
book.contents = {};

function toUpper(stringArr) {
  let result = [];

  stringArr.forEach(function (str) {
    result.push(str.toUpperCase());
  });

  console.log(result);
}
toUpper(['hello', 'world']);

Idea
Requirements
Design
Coding 
Unit Testing
Validation
Use 

// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
primes[0] // => 2: the first element (index 0) of the array.
primes.length // => 4: how many elements in the array.
primes[primes.length-1] // => 7: the last element of the array.
primes[4] = 9; // Add a new element by assignment.
primes[4] = 11; // Or alter an existing element by assignment.
let empty = []; // [] is an empty array with no elements.
empty.length

// Arrays and objects can hold other arrays and objects:
let points = [ // An array with 2 elements.
{x: 0, y: 0}, // Each element is an object.
{x: 1, y: 1}
];
let data = { // An object with 2 properties
	trial1: [[1,2], [3,4]], // The value of each property is an array.
	trial2: [[2,3], [4,5]] // The elements of the arrays are arrays.
};

function plus1(x) {
	return x + 1;
};

let square = function(x) {
	return x * x;
};

arrow functions
const plus1 = x => x + 1; // The input x maps to the output x + 1
const square = x => x * x; // The input x maps to the output x * x

function sum(array) { // Compute the sum of the elements of an array
	let sum = 0; // Start with an initial sum of 0.
	for(let x of array) { // Loop over array, assigning each element to x.
		sum += x; // Add the element value to the sum.
	} // This is the end of the loop.
	return sum; // Return the sum.
}
sum(primes) // => 28: sum of the first 5 primes 2+3+5+7+11

function factorial(n) { // A function to compute factorials
	let product = 1; // Start with a product of 1
	while(n > 1) { // Repeat statements in {} while expr in () is true
		product *= n; // Shortcut for product = product * n;
		n--; // Shortcut for n = n - 1
	} // End of loo
	return product; // Return the product
}
factorial(4) // => 24: 1*4*3*2

function factorial2(n) { // Another version using a different loop
	let i, product = 1; // Start with 1
	for(i=2; i <= n; i++) // Automatically increment i from 2 up to n
		product *= i; // Do this each time. {} not needed for 1-line loops
	return product; // Return the factorial
}
factorial2(5) // => 120: 1*2*3*4*5

----------------------------- Code With Mosh JavaScript ------------------------------
