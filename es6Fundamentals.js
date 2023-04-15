// @ts-nocheck
// // @ts-ignore
// --------------- Skillshare - ES6 Fundamentals ----------------------
// const drinks = ["cola", "tea", "water", "soda"];
// const drinks = {
//     cola: 2,
//     tea: 5,
//     water: 8,
//     soda:9
// };

// for (let i = 0; i < drinks.length; i++) {
//     console.log(drinks[i]);
// }

// for (const drink of drinks) {
//     console.log(drink);
// }

// for (const drink in drinks) {
//     console.log(drink, drinks[drink]);
// }

//! Arrow Functions
// const myFavouriteGame = (game) => `My favourite game is ${game}`;
// console.log(myFavouriteGame("Monopoly"));

// Object Property Shorthand
// function createWardrobe() {
//     var hat = 1;
//     var shorts = 5;
//     var jumper = 8;
//     var socks = 2;

//     var myWardrobe = {
//         hat: hat,
//         shorts: shorts,
//         jumper: jumper,
//         socks: socks
//     }
//     return myWardrobe;
// }

// console.log(createWardrobe());

// const createWardrobe = () => {
//     let hat = 1;
//     let shorts = 5;
//     let jumper = 8;
//     let socks = 2;

//     let myWardrobe = {
//         hat,
//         shorts,
//         jumper,
//         socks
//     }
//     return myWardrobe;
// }
// console.log(createWardrobe());

//! Object Freeze
// const ourObject = {
//     animalOne: "cat",
//     animalTwo: "dog",
//     animalThree: "sheep"
// }

// Object.freeze(ourObject);

// // ourObject.animalOne = "cow";
// console.log(ourObject);

//! Array Destructuring
// const days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday"
// ]

// const [first, second, , fourth] = days;
// console.log(first, second, fourth)
// const [first, ...remainingDays] = days;
// console.log(first, remainingDays);

//! Object Destructuring
// const ourObject = {
//     one: 1,
//     two: 2
// };

// const { one, two } = ourObject;
// console.log(one, two);

// const cat = {
//   name: 'Molly',
//   owner: 'Fred Larkin',
//   color: 'Brown',
//   age: 10,
//   kittens: 0,
// };

// const { name, owner } = cat;
// console.log(name);
// console.log(owner);

// Renaming a Property
// const { kittens: children }  = cat;

//! Nested
/* const cats = [
  {
    name: 'Molly',
    owner: 'Fred Larkin',
    color: 'Brown',
    age: 10,
    kittens: 0,
  },
  {
    name: 'Bob',
    owner: 'Sally Doe',
    color: 'Black',
    age: 2,
    kittens: 0,
  },
  {
    name: 'Poppy',
    owner: 'Alice Green',
    color: 'Tabby',
    age: 3,
    kittens: 2,
  },
];
const [, { name: catsName }] = cats;
console.log(catsName); */

/* const cats = {
  1: {
    name: 'Molly',
    owner: 'Fred Larkin',
    color: 'Brown',
    age: 10,
    kittens: 0,
  },
  2: {
    name: 'Bob',
    owner: 'Sally Doe',
    color: 'Black',
    age: 2,
    kittens: 0,
  },
  3: {
    name: 'Poppy',
    owner: 'Alice Green',
    color: 'Tabby',
    age: 3,
    kittens: 2,
  },
};
const {
  2: { name: catsName },
} = cats;
console.log(catsName);
 */

//! Destructuring Function Parameters
/* const drinks = {
  cola: 2,
  lemonade: 1,
  milk: 3,
  tea: 2,
  coffee: 2,
  wine: 8,
};
const hotDrinksPrices = ({ tea, coffee }) => {
  return tea + coffee;
};
console.log(hotDrinksPrices(drinks)); */

// const names = ['Frank', 'Luke', 'Ben', 'Tony', 'Pete'];
// const printName = ([, secondName, thirdName]) => {
//   return `${secondName} ${thirdName}`;
// };
// console.log(printName(names));

//! Default Parameters
// function myName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }
// console.log(myName('Bob', 'Murph'));

// function ourSum(valOne, valTwo) {
//   if (typeof valTwo === 'undefined') {
//     valTwo = 3;
//   }
//   return valOne + valTwo;
// }
// console.log(ourSum(1));

// function ourSum(valOne, valTwo = 3) {
//   return valOne + valTwo;
// }
// console.log(ourSum(1, 5));

// Spread In Functions
// console.log(Math.min(10, 9, 8, 7));
// const values = [10, 9, 8, 7];
// console.log(Math.min(...values));

// function total(first, second, third) {
//   return first + second + third;
// }
// const vals = [1, 2, 3];
// console.log(total(...vals));

//! Spread In Objects
// const alien = {
//   species: 'alien',
//   arms: 5,
//   feet: 9,
// };
// const ufo = {
//   ...alien,
//   legs: 5,
//   feet: 6,
// };
// console.log(ufo);

// const copiedUfo = {
//   ...ufo,
// };
// console.log(copiedUfo);

//! Spread In Arrays
// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const countToSix = [...first, ...second];
// console.log(countToSix);

//! Rest Parameters
// function add(valOne, valTwo) {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// add(1, 4, 5, 6);

// rest parameter
// function add(...values) {
//   console.log(values);
// }
// add(1, 4, 5, 6);

// const add = (...values) => {
//   console.log(values);
// };
// add(1, 4);

//! forEach
// const ourNumbers = [5, 6, 7, 8];
// let sum = 0;
// ourNumbers.forEach(function (number) {
//   console.log(number);
// });

// for (let nums of ourNumbers) {
//   console.log(nums);
// }

// function printNumber(number, index) {
//   // console.log(number, index);
//   return (sum += number);
// }
// ourNumbers.forEach(printNumber);
// console.log(sum);

// const students = [
//   {
//     name: 'Anna',
//     age: 50,
//   },
//   {
//     name: 'Pete',
//     age: 20,
//   },
//   {
//     name: 'Abby',
//     age: 12,
//   },
// ];
// students.forEach(function (student) {
//   console.log(student.name.toUpperCase());
// });

//! Map
// const values = [10, 20, 30, 40, 50];
// const doubled = values.map(function (value) {
//   return value * 2;
// });
// console.log(values);
// console.log(doubled);

// let doubled = [];
// for (let i = 0; i < values.length; i++) {
//   doubled.push(values[i] * 2);
// }
// console.log(doubled);

// const greetings = ['HI', 'BYE', 'YO', 'WHATS UP'];
// const formattedGreetings = greetings.map(function (greeting) {
//   return greeting.toLowerCase();
// });
// console.log(greetings);
// console.log(formattedGreetings);

// const students = [
//   { name: 'Anna', age: 50 },
//   { name: 'Pete', age: 20 },
//   { name: 'Tamar', age: 15 },
// ];
// const studentAges = students.map(function (student) {
//   return student.age;
// });
// console.log(studentAges);

// const updatedStudents = students.map(function (student) {
//   return {
//     lowercaseName: student.name.toLowerCase(),
//     agePlusOne: student.age + 1,
//   };
// });
// console.log(updatedStudents);

// Returns undefined if return is not used
// const letters = ['a', 'b', 'c'];
// const uppercased = letters.map(function (letter) {
//   return letter.toUpperCase();
// });
// console.log(letters, 'letters');
// console.log(uppercased);

//! Filter
// const values = [10, 15, 20, 25, 30];
// let results = [];
// for (let i = 0; i < values.length; i++) {
//   if (values[i] % 2 === 0) {
//     results.push(values[i]);
//   }
// }

// const results = values.filter(function (value) {
//   return value % 2 === 0;
// });
// console.log(results);
// console.log(values, 'values');

// const names = ['Sally', 'Bob', 'Lauren', 'Ted'];
// const filteredNames = names.filter(function (name) {
//   return name.includes('a');
// });
// console.log(filteredNames);

// const results = [
//   {
//     name: 'Billy',
//     score: 90,
//   },
//   {
//     name: 'Ted',
//     score: 100,
//   },
//   {
//     name: 'Laura',
//     score: 9,
//   },
//   {
//     name: 'Alice',
//     score: 100,
//   },
//   {
//     name: 'Peter',
//     score: 98,
//   },
// ];
// const passed = results.filter((result) => result.score < 90);
// console.log(passed);

//! Using Find
// const fruits = ['Fig', 'Orange', 'Lemon', 'Apple', 'Kiwi'];
// let fruit;
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === 'Apple') {
//     fruit = fruits[i];
//     break;
//   }
// }
// console.log(fruit);

// const fruit = fruits.find(function (fruit) {
//   return fruit === 'Apple';
// });
// console.log(fruit);

// const results = [
//   {
//     name: 'Billy',
//     score: 90,
//   },
//   {
//     name: 'Ted',
//     score: 100,
//   },
//   {
//     name: 'Laura',
//     score: 9,
//   },
//   {
//     name: 'Alice',
//     score: 100,
//   },
//   {
//     name: 'Peter',
//     score: 98,
//   },
// ];
// // const winner = results.find(function (result) {
// //   return result.score === 100;
// // });
// const winner = results.find((result) => result.score === 100);
// console.log(winner.name);

//! some & every
// const names = ['Abby', 'Anna', 'Alice'];
// const result = names.every(function (name) {
//   return name.includes('A');
// });

// const result = names.every((name) => name.includes('A'));
// console.log(result);

// const results = [
//   {
//     name: 'Billy',
//     score: 90,
//   },
//   {
//     name: 'Ted',
//     score: 100,
//   },
//   {
//     name: 'Laura',
//     score: 80,
//   },
// ];
// const didPass = results.every((student) => student.score > 50);
// console.log(didPass);

// const ages = [1, 2, 10, 1];
// const higherThanFive = ages.some((age) => age > 5);
// console.log(higherThanFive);

//! Object Constructor notation: Video 36
// const house = new Object();
// house.name = 'Willows';
// house.rooms = 5;
// house.built = 1998;
// console.log(house);

// house.getName = function () {
//   return this.name;
// };
// console.log(house.getName());

// delete house.name;
// house['name'] = 'Willows';

// function House(name, rooms, built) {
//   this.name = name;
//   this.rooms = rooms;
//   this.built = built;
//   this.getName = function () {
//     return this.name;
//   };
// }
// const manorHouse = new House('Manor', 5, 1998);
// console.log(manorHouse);
// console.log(manorHouse.getName());

//! Prototypes
// Prototype Property
// Array.prototype
// const ourarray = [1, 2, 3];

// Object.getPrototypeOf(ourarray);
// __proto__

// function GameTracker(name, result) {
//   this.name = name;
//   this.result = result;
// }
// const playerOne = new GameTracker('Bob', 4);
// console.log(playerOne);
// console.log(Object.getPrototypeOf(playerOne));

// GameTracker.prototype.start = function () {
//   return `Hello ${this.name} the games is ready`;
// };
// console.log(playerOne.start());

//! Classes
// class Dog {
//   constructor(name, age, breed) {
//     this.name = name;
//     this.age = age;
//     this.breed = breed;
//   }
//   myDog() {
//     return `My dog is called ${this.name}`;
//   }
//   dogInfo() {
//     return `${this.myDog()} is ${this.age} years old.`;
//   }
// }
// const poppy = new Dog('poppy', 2, 'collie');
// console.log(poppy.myDog());
// console.log(poppy.dogInfo());

//! Promises
// const ourPromise = new Promise((resolve, reject) => {});
// const ourPromise = new Promise((resolve, reject) => {
//   reject();
// });
// const ourPromise = new Promise((resolve, reject) => {
//   resolve();
// });
// console.log(ourPromise);

// const ourPromise = new Promise((resolve, reject) => {
//   let didGetMilk = true;
//   if (didGetMilk) {
//     resolve('We got the milk');
//   } else {
//     reject('Ooops we did not get the milk');
//   }
// });
// ourPromise.then((res) => {
//   console.log(res, 'RES');
// });
// console.log(ourPromise);

// const ourPromise = new Promise((resolve, reject) => {
//   let didGetMilk = true;
//   if (didGetMilk) {
//     resolve({ message: 'We got the milk' });
//   } else {
//     reject('Ooops we did not get the milk');
//   }
// });
// ourPromise.then((res) => {
//   console.log(res.message, 'RES');
// });
// console.log(ourPromise);

const ourPromise = new Promise((resolve, reject) => {
  let didGetMilk = false;
  if (didGetMilk) {
    resolve({ message: 'We got the milk' });
  } else {
    reject('Ooops we did not get the milk');
  }
});
ourPromise
  .then((res) => {
    console.log(res.message, 'RES');
  })
  .catch((error) => {
    console.log(error);
  });
console.log(ourPromise);
