/* --- Eloquent JavaScript: A Modern Introduction to Programming, 3rd Edition--- */
/* 
let total = 0, count = 1;
while (count <= 10) {
    total += count ;
    count += 1;
}
console.log(total); 
*/

// console.log(sum(range(1, 10))); // just incase sum & range existed in javascript

/* 
function factorial(n) {
    if (n ==0 ) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
} 
console.log(factorial(8))
*/

/* 
----------------Chapter 1:Values, Types, and Operators------------------
numbers => 2^64 || 18 quintillion || 18 with 18 0s || 9 quadrillion (15 zeros) 2.998e8 9.81
Special Numbers {Infinity, -Infinity, NaN}
template literals `half of 100 is ${100 / 2}`
binary operators {+,-,/,%,*,>,<}, unary {!, typeof, -} 
&& || !
---tenary(?:)---
console.log(true ? 1 : 2)
console.log(true ? 2 : 1)
---Empty-Values--- -> {null, undefined}
type coercion
===, !==

--------------Chapter 2:Program Structure----------------
let one = 1, two = 2;
console.log(one, two)
prompt('Enter passcode!');

console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100);

let theNumber = Number(prompt('Pick a number'));
if (!Number.isNaN(theNumber)) {
  console.log('Your number is the square root of ' + theNumber * theNumber);
}

let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);

// Finds the first number that is both greater than or equal to 20 and divisible by 7
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}

/* -----------Chapter 2:Exercises--------* /
/* ---Looping-a-triangle--- * /
for (let line = '#'; line.length < 8; line += '#') {
  console.log(line);
}

/* ---FizzBuzz--- * /
for (let n = 1; n <= 100; n++) {
  let output = '';
  if (n % 3 == 0) output += 'Fizz';
  if (n % 5 == 0) output += 'Buzz';
  console.log(output || n);
}

/* ---Chessboard--- * /
let size = 8;
let board = '';
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}
console.log(board);

// --------------Mosh--------------------
/* for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBUzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
} * /

/* ------------ Chapter 3:Functions ----------------------- * /
const square = function (x) {
  return x * x;
};
console.log(square(12));

/* 
const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10)); 
* /

global, local variables
let, const --> block scope 
***lexical scoping***

const humans = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += 's';
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, 'can', 'chickpeas');
  ingredient(0.25, 'cup', 'tahini');
  ingredient(0.25, 'cup', 'lemon juice');
  ingredient(1, 'clove', 'garlic');
  ingredient(2, 'tablespoon', 'olive oil');
  ingredient(0.5, 'teaspoon', 'cumin');
};

---------------Arrow-Functions----------------
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 3))

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

***callstack***

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10))
console.log(minus(10, 5))

function power(base, exponent = 2) {
  let result = 1 
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(power(4))
console.log(power(2, 6))

***Closure*** --> A function that references bindings from local scopes around it
function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1)
let wrap2 = wrapValue(2)
console.log(wrap1(1));
console.log(wrap2(1));

function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));

***Recursion***
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3)); 

----By starting from number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced.---

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, '1');
}
console.log(findSolution(24));

-----Write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens after them and zeros paddedbefore both numbers so that they are always three digits long.-----
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = '0' + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = '0' + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

------V2--------
function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = '0' + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, 'Cows');
  printZeroPaddedWithLabel(chickens, 'Chickens');
  printZeroPaddedWithLabel(pigs, 'Pigs');
}
printFarmInventory(7, 11, 3);

*/
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);

/* ---------------- Chapter 4: Data Structures: Objects and Arrays ------------------- */
console.log(Object.keys({ x: 0, y: 0, z: 2 }));
let objectA = { a: 1, b: 2 };
console.log({ ...objectA, b: 3, c: 4 });

let todoList = [];
todoList.shift();
todoList.unshift();
console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(['a', 'b', 'c', 'd', 'e'], 2));
console.log(['a', 'b', 'c', 'd', 'e'].pop());

console.log(String(6).padStart(3, '0'));
console.log('LA'.repeat(3));

let string = JSON.stringify({});

/* ----------- Chapter 4: Exercises ------------- */
// ------- The Sum of a Range --------------
/*
1 - The Sum Of A Range (30/12/2019)

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

// JS allows us to reference the values of parameters declared before an optional parameter.
// This allows us to programmatically change the value of step based on the values of `start` & `end` parameters.
function range(start, end, step = start <= end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    // Due to step value being positive, it is necessary that start value must be lesser than or equal to end value
    // to ensure the function works properly.
    if (start > end) {
      return undefined;
    }

    for (let n = start; n <= end; n += step) {
      array.push(n);
    }
  } else if (step < 0) {
    // Due to step value being negative, it is necessary that start value must be greater than or equal to end value
    // to ensure the function works properly.
    if (start < end) {
      return undefined;
    }

    for (let n = start; n >= end; n += step) {
      array.push(n);
    }
  }
  // If step value is 0, then return undefined.
  else {
    return undefined;
  }

  return array;
}

function sum(array) {
  let result = 0;

  for (num of array) {
    result += num;
  }

  return result;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(8, 5));
// → [8, 7, 6, 5]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(10, 1, 1));
// → undefined
console.log(range(1, 10, -1));
// → undefined
console.log(range(1, 10, 0));
// → undefined
console.log(range(1, 1));
// → [1]
console.log(sum(range(1, 10)));
// → 55

/*
2 - Reversing An Array (30/12/2019)

Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

function reverseArray(array) {
  let reversedArray = [];

  for (let element of array) {
    reversedArray.unshift(element);
  }

  return reversedArray;
}

// Clever Solution using the properties of Array objects.
function reverseArrayInPlace(array) {
  for (let index = 0; index < array.length; index++) {
    let lastValue = array.pop();
    // Without removing any existing element, insert the
    // popped out element at ith position of array.
    array.splice(index, 0, lastValue);
  }
}

// Brute force approach to manually swap the elements.
function reverseArrayInPlace(array) {
  const lastIndex = array.length - 1;

  for (let index = 0; index < Math.floor(array.length / 2); index++) {
    // Swap elements of first & last elements, then second & second-last elements and so on...
    let firstValue = array[index];
    array[index] = array[lastIndex - index];
    array[lastIndex - index] = firstValue;
  }
}

console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
//! Stopped on Page 82
