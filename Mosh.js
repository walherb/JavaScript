//----------- [FreeCoursesOnline.Me] Code With Mosh - The Ultimate JavaScript Series [2In1]----------
/* -------- Ultimate JavaScript Part 1 - Fundamentals -------- */
/* --------------------Chapter 1: Getting Started------------- */
{
  /* <script src='index.js'></script>; */
}
// node index.js
// View -> Terminal
// let name = 'Mosh';

/* -------------------Chapter 2: Basics--------------- */
// variables
// Cannot be a reserved keyword
// Sould be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen(-)
// Camelcase
// Are case-sensitive
// let firstName, lastName;

//----------- constants -----------------------
const interestRate = 22.5;

//-------------- Primitive/Value Types ----------------------
let name = 'Mosh'; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolena Literal
let firstName = undefined;
let selectedColor = null;

//------------- Reference Types ----------------------
Object;
Array;
Function;

typeof name;

//----------- Objects ---------------------
/* let person = {
  name: 'Mosh',
  age: 30,
};
console.log(person);
person.name = 'John';
person['name'];
 */
/* ---------------- Arrays --------------------------- */
let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]);
console.log(selectedColors.length);
// In javascript u can store different elements in an array and length is dynamic

/*---------- Parameter first, argument in calling -------------- */
/* ------------- Performing a task ------------------- */
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}
greet('Mosh', 'Hamedani');

/* -------------- Calculating a value ------------------- */
function square(number) {
  return number * number;
}
console.log(square(2));

/* ----------------Chapter 3: Operators ----------------- */
/* 
--Arithmetic-- 
console.log(x ** y)
-Increment
let x = 10;
console.log(++x); // 11
console.log(x++); // 10

-Decrement
let x = 10;
console.log(--x); // 9
console.log(x--); // 10

--Assignment--
x = x + 5
x += 5

--Comparison--
-Relational (> < >= <=)
-Equality (x === 1 x !== 1) Strict Equality (1 === 1) Same (Type + Value)
-Loose Equality (1 == 1) Converts same value of right to typeof on left

-Tenary
let points = 110;
let type = points > 100 ? 'gold' : 'silver'
--Logical--
-&&
-||
-! 
-Falsy (undefined null 0 false '' NaN)
-Short-circuting false || 1 || 2 -> 1 (returns the 1st truthy value)
-let selectedColor = userColor || defaultColor 

--Bitwise--
-Bitwise OR(|)
-console.log(1 | 2)
-1 = 00000001
-2 = 00000010
-R = 00000011
-Bitwise AND(&)
-console.log(1 & 2)
-R = 00000000

// Read, Write , Execute 
// 00000100 --> Read
// 00000110 --> Read Write 
// 00000111 --> Read Write Execute 
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission
console.log(myPermission)
let message = (myPermission & readPermission) ? 'Yes' : 'No';
console.log(message)

--Precedence-- Use ()
--Swap Values (Exercise)
let a = 'red'
let b = 'blue'
let c = a 
a = b
b = c 
console.log(a)
console.log(b)
*/

/* --------------------Chapter 4: Control Flow ---------------  */
/* -----If-Else----- */
let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log('Good Morning');
} else if (hour >= 12 && hour < 18) {
  console.log('Good AFternoon');
} else console.log('Good Evening');

/* -----Switch-n-Case----- */
let role;
switch (role) {
  case 'guest':
    console.log('Guest User');
    break;
  case 'moderator':
    console.log('Moderator User');
    break;
  default:
    console.log('Unknown User');
}

if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown User');

/* -----For-Loop----- */
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

/* -----While-Loop----- */
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

/* -----Do-While----- */
let j = 0;
do {
  if (j % 2 !== 0) console.log(j);
  j++;
} while (j <= 5);

/* -----For-In----- */
const person = {
  name: 'Mosh',
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}

/* -----For-of----- */ //(ES6+)
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}

/* -----Break-n-Continue----- */
let k = 0;
while (k <= 10) {
  // if (k === 5) break;
  if (k % 2 === 0) {
    k++;
    continue;
  }
  console.log(k);
  k++;
}

/* -------------------Chapter 5: Objects--------------------- */
/* editor.action.blockComment  Alt + Shift + A -> editorTextFocus && !editorReadonly -> system */
/* -----Basics----- */
/* const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },
  isVisible: true,
  draw: function () {
    console.log('Draw');
  },
};
circle.draw(); */
// Method -> Function that is part of an object

/* -----Factory-Functions-----  */
// Camel-case Notation
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('Draw');
    },
  };
}
console.log(createCircle(5));

/* -----Constructor-Functions----- */
// Pascal Notation
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('Draw');
  };
}

const circle = new Circle(1);

/* -----Dynamic-Nature-of-Objects----- */
/* -----COnstructor-Property----- */
let x = {}; // let x = new Object()

/* ------Value-vs-Reference-Types------ */
// Value Types --> {String,Number,Boolean,Symbol,null,undefined}
// Reference Types --> {Object,Function,Array}
// Primitives/Value are copied by their value
// Objects/Reference are copied by their reference

/* --------Enumerating-Properties-of-an-Object------------- */
for (let key in circle) console.log(key, circle[key]);
for (let key of Object.keys(circle)) console.log(key);
for (let entry of Object.entries(circle)) console.log(entry);
if ('radius' in circle) console.log('Yes');

/* ----------Cloning-an-Object----------- */
const another = Object.assign({ color: 'Yellow' }, circle);
console.log(another);
const spreadAnother = { ...circle, color: 'Green' };
console.log(spreadAnother);

/* -----------Math------------- */
// MDN -- url
console.log(Math.random());
console.log(Math.round(1.9));
console.log(Math.max(1, 4, 5, 7, 8, 9));

/* ----------Template-Literals---------- */
console.log(`${name} ${3 + 6}`);

/* ----------Date---------- */
const now = new Date();
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());

/* ----------------------Chapter 6: Arrays-------------------- */
/* ------Adding-Elements------- */
const numbers = [3, 4];
numbers.push(5, 6); // End
numbers.unshift(1, 2); // Beginning
numbers.splice(2, 0, 'a', 'b'); // Middle
console.log(numbers);

/* ------Finding-Elements(Primitives)-------- */
const nums = [1, 2, 3, 1, 4];
console.log(nums.indexOf(1, 2));
console.log(nums.lastIndexOf(1));
console.log(nums.indexOf(1) !== -1);
console.log(nums.includes(1));

/* ------Finding-Elements(Reference Types)-------- */
const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];
const course = courses.find(function (course) {
  return course.name === 'a';
});
const courseIndex = courses.findIndex(function (course) {
  return course.name === 'a';
});
console.log(course);
console.log(courseIndex);

/* -----------Arrow Functions------------- */
console.log(courses.find((course) => course.name === 'a'));

/* -----------Removing-Elements---------- */
const numsArray = [1, 2, 3, 4, 5];
console.log(numsArray.pop()); // End
console.log(numsArray.shift()); // Beginning
console.log(numsArray.splice(2, 1)); // Middle

/* ---------Emptying-an-Array---------- */
let numsEmpty = [1, 2, 3, 4];
// numsEmpty = []; // Solution 1 (***)
// numsEmpty.length = 0; // Solution 2 (*****)
numsEmpty.splice(0, numsEmpty.length); // Solution 3
numsEmpty.pop();
console.log(numsEmpty);

/* -----------Combining-and-Slicing-Arrays-------- */
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
console.log(first.concat(second));
console.log(combined.slice(2, 4));
console.log(combined.slice(2));
console.log(combined.slice());

/* ------------Spread-Operator---------- */
console.log([...first, 'a', ...second, 'b']);

/* -----------Iterating-an-Array-------- */
const numArray = [3, 5, 7, 9, 4];
for (let number of numArray) {
  console.log(number);
}
numArray.forEach((number, index) => {
  console.log(index, number);
});

/* ----------Joining-Arrays---------- */
const numbersJoin = [1, 2, 3];
console.log(numbersJoin.join(','));
const message = 'This is my first message';
console.log(message.split(' '));

/* ----------Sorting-Arrays---------- */
const arraySort = [2, 3, 1];
console.log(arraySort.sort());
console.log(arraySort.reverse());

const coursesObj = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'javaScript' },
];
console.log(
  coursesObj.sort((a, b) => {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  })
);

/* --------------Testing-Elements-of-an-Array-------- */
const numbersTest = [1, 2, 3, -1];
const allPositive = numbers.every((v) => {
  return v >= 0;
});
const atLeastOnePositive = numbers.some((v) => {
  return v >= 0;
});
console.log(allPositive);
console.log(atLeastOnePositive);

/* ----------Filtering-an-Array---------- */
const numsFilter = [1, -1, 2, 3];
console.log(numsFilter.filter((v) => v >= 0));

/* ----------Mapping-an-Array-------- */
const numsMap = [1, -1, 2, 3];
console.log(numsMap.map((n) => '<li>' + n + '</li>'));
console.log(numsMap.map((n) => ({ value: n })));
console.log(numsMap.filter((n) => n >= 0).map((n) => ({ value: n })));

/* -----------Reducing-an-Array------------ */
const numsReduce = [1, -1, 2, 3];
console.log(numsReduce.reduce((accumulator, currentValue) => accumulator + currentValue));

/* --------------------Chapter 7: Functions-------------------- */
/* -------------Function Declaration vs Expressions-------- */
// Function Declaration : Can be called before its declaration
function walk() {
  console.log('walk');
}

// Function Expression: Cannot be called before its declaration
// Anonymous Function Expression
let run = function () {
  console.log('run');
};
// Named Function Expression
let runner = function runner() {
  console.log('runner');
};

/* ----------------Hoisting------------- */
// Process of moving functions to the top

/* -----------Rest Operator---------------- */
/* function sum(...args) {
  let total = 0;
  for (let value of arguments) total += value;
  return total;

  console.log(args)
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5, 10)); */

function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sum(0.1, 20, 30));

/* -------------- Default Parameters---------- */
function interest(principal, rate = 3.5, years = 5) {
  // rate = rate || 3.5;
  // years = years || 5;
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000, 3.5, 5));
console.log(interest(10000));

/* ------------Getters and Setters---------- */
// getters => access properties
// setters => change (mutate) them
const persons = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName() {
    return `${persons.firstName} ${persons.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
// console.log(persons.fullName);
persons.fullName = 'John Smith';
console.log(persons);

/* --------------Try Catch------------------ */

/* --------------This---------------- */
// method -> obj
// function -> global (window, global) obj

function playVideo(a, b) {
  console.log(this);
}
playVideo.call({ name: 'Mosh' }, 1, 2)();
playVideo.apply({ name: 'Mosh' }, [1, 2])();
playVideo.bind({ name: 'Mosh' })();

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};
video.showTags();

/* ------------------- Ultimate JavaScript Part 2 - Advanced Topics ----------------- */
/* ---------Getting Started-------- */
/* ---------PILLARS of OOP--------- */
/* 
Encapsulation - Reduce complexity + increase reusability
Abstraction   - Reduce complexity + isolate impact of changes 
Inheritance   - Eliminate redundant code 
Polymorphism  - Refactor ugly switch/case statements
*/
