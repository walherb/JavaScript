// "use strict"
/*function doSomething() {
    "use strict";
    // function body
}*/

// KEYWORDS AND RESERVED WORDS
/*
break       do          in          typeof
case        else        instanceof  var
catch       export      new         void
class       extends     return      while
const       finally     super       with
continue    for         switch      yield
debugger    function    this
default     if          throw
delete      import      try
*/

// Future Reserved Words
/*
enum
implements      package     public
interface       protected   static
let             private
await
*/

// for (let i = 0; i < 5; ++i) {
//     setTimeout(() => console.log(i), 0)
// }

// let octalNum = 070;
// let hexNum = 0xA;
// let floatNum = 3.125e7;

// IEEE-754
// Number.MIN_VALUE;
// Number.MAX_VALUE;
// isFinite
// NaN -> Not a Number

// Number()
// parseInt()
// parseFloat()

// parseInt("0xAF", 16);  ===  parseInt("AF", 16);

// let age = 11;
// age.toString();

// let num = 10;
// console.log(num.toString()); // "10"
// console.log(num.toString(2)); // "1010"
// console.log(num.toString(8)); // "12"
// console.log(num.toString(10)); // "10"
// console.log(num.toString(16)); // "a"

// let value = 5;
// let exponent = 'second';
// let interpolatedTemplateLiteral = `${ value } to the ${ exponent } power is ${ value * value }`

// let sym = Symbol();
// console.log(sym)

// let i = 0;
// do {
//     i += 2;
//     console.log(i)
// } while (i < 10);


// let i = 0;
// while (i < 10) {
//     i += 2;
// }

// let count = 10;
// for (let i = 0; i < count; i++) {
//     console.log(i);
// }

// let count = 10;
// let i = 0;
// while (i < count) {
//     console.log(i);
//     i++;
// }

// // For-of-statement
// for (const el in [2,4,6,8) {
//     document.write(el);
// }


// // Labels
// start: for (let i = 0; i < count; i++) {
//     console.log(i);
// }


// let num = 0;
// for (let i = 1; i < 10; i++) {
// if (i % 5 == 0) {
//         break;
//     }
//     num++;
// }
// console.log(num); // 4


// let num = 0;
// for (let i = 1; i < 10; i++) {
//     if (i % 5 == 0) {
//         continue;
//     }
//     num++;
// }
// console.log(num); // 8


// let num = 0;
// outermost:
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         if (i == 5 && j == 5) {
//             break outermost
//         }
//         num++;
//     }
// }
// console.log(num);   // 55



// let num = 0;
// outermost:
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         if (i == 5 && j == 5) {
//             continue outermost;
//         }
//         num++
//     }
// }
// console.log(num);       // 95


// with (expression) statement;
// let qs = location.search.substring(1);
// let hostName = location.hostname;
// let url = location.href;

// with(location) {
//     let qs = search.substring(1)
//     let hostName = hostname;
//     let url = href;
// }


// switch (i) {
//     case 25:
//         console.log("25");
//         break;
//     case 35:
//         console.log("35");
//         break;
//     case 45:
//         console.log("45");
//         break;
//     default:
//         console.log("Other");
// }

// let now = new Date();
// let someDate = new Date(Date.parse("May 23, 2019"));
// console.log(new Date(Date.parse("May 23, 2019")));
// let someDate = new Date("May 23, 2019");
// console.log(new Date("May 23, 2019"));
