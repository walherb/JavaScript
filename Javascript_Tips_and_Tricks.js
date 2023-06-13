/* 
SuperSimpleDev -- {YouTube Channel}
MVC Architecture (also called MVW,MVVM,MV*) 
1.Rendering 		=> View
2.Data Handling 	=> Model
3.Event Handling 	=> Controller
PDO => PHP Data Objects
*/

let number = 10;
let n1 = 0,
  n2 = 1,
  nextTerm;

for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

/* https://cdnjs.cloudflare.com/ajax/libs/react/18.3.0-next-229c86af0-20220616/umd/react.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react/18.3.0-next-229c86af0-20220616/cjs/react.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.0-next-229c86af0-20220616/umd/react-dom.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.0-next-229c86af0-20220616/cjs/react-dom.production.min.js */

// IaaS -> Infrastructure as a Service
// PaaS -> Platform as a Service
// SaaS -> Software as a Service

document.body.innerHTML = 'Hello';
typeof (<script src='hello.js'></script>);

function toUpper(stringArr) {
  let result = [];

  stringArr.forEach(function (str) {
    result.push(str.toUpperCase());
  });

  console.log(result);
}
toUpper(['hello', 'world']);

//  Idea -> Requirements -> Design -> Coding -> Unit Testing -> Validation -> Use

// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7];
primes[primes.length - 1]; // => 7: the last element of the array.

function sum(array) {
  let sum = 0;
  for (let x of array) {
    sum += x;
  }
  return sum;
}
sum(primes); // => 28: sum of the first 5 primes 2+3+5+7+11

function factorial(n) {
  let product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }
  return product;
}
factorial(4); // => 24: 1*4*3*2

function factorial2(n) {
  let i,
    product = 1;
  for (i = 2; i <= n; i++) product *= i;
  return product;
}
factorial2(5); // => 120: 1*2*3*4*5

// ----------------------------- Code With Mosh JavaScript ------------------------------
