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
 **/
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
people.toSpliced(0, 2, "New") 
*/

let nums = [1, 2, 3, 4, 5];
let letters = ['A', 'B', 'C'];
console.log(nums.reverse());
console.log(letters.reverse());

const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));

// ------------------- JavaScript One-Liners -------------------------------
//! https://learningactors.com/20-killer-javascript-one-liners/
// Get Value of a brower Cookie
// const cookie = (name) => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
// cookie('_ga');
// Result: "GA1.2.1929736587.1601974046"

// Convert RGB to Hex
const rgbToHex = (r, g, b) => '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
console.log(rgbToHex(0, 51, 255));
// Result: #0033ff

// Copy to Clipboard
// const copyToClipboard = (text) => navigator.clipboard.writeText(text);
// copyToClipboard('Hello World');

// Check if Date is Valid
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
console.log(isDateValid('December 17, 1995 03:24:00'));

// Find the day of year
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
console.log(dayOfYear(new Date()));

// Capitalise a String
const capitalizess = (str) => str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalizess('follow for more'));
// Result: Follow for more

// Find the number of days between two days
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
dayDif(new Date('2020-10-21'), new Date('2021-10-22'));
// Result: 366

// Clear All Cookies
// const clearCookies = document.cookie
//   .split(';')
//   .forEach(
//     (cookie) =>
//       (document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
//   );

// Generate Random Hex
const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`;
console.log(randomHex());

// Remove Duplicated from Array
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));

// Get Query Params from URL
const getParameters = (URL) => {
  URL = JSON.parse(
    '{"' + decodeURI(URL.split('?')[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}'
  );
  return JSON.stringify(URL);
};
// getParameters(window.location);
// Result: { search : "easy", page : 3 }

// Log Time from Date
const timeFromDate = (date) => date.toTimeString().slice(0, 8);
console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));

// Check if a number is even or odd
const isEven = (num) => num % 2 === 0;
console.log(isEven(2));

// Find Average of Numbers
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
console.log(average(1, 2, 3, 4));

// Scroll to Top
// const goToTop = () => window.scrollTo(0, 0);
// goToTop();

// Reverse a string
const reverse = (str) => str.split('').reverse().join('');
reverse('hello world');
// Result: 'dlrow olleh'

// Check if array is empty
const isNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0;
isNotEmpty([1, 2, 3]);
// Result: true

// Get Selected Text
// const getSelectedText = () => window.getSelection().toString();
// getSelectedText();

// Shuffle an Array
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
console.log(shuffleArray([1, 2, 3, 4]));
// Result: [ 1, 4, 3, 2 ]

// Detect Dark Mode
// const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// console.log(isDarkMode); // Result: True or False

//! https://www.freecodecamp.org/news/javascript-one-liners-to-use-in-every-project/
// 1. How to Capitalize Text
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// 2. How to Calculate Percent
const calculatePercent = (value, total) => Math.round((value / total) * 100);

// 3. How to Get a random Element
const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];

// 4. How to Remove Duplicate Elements
const removeDuplicatess = (arr) => [...new Set(arr)];

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

const shuffleArrays = (arr) => arr.sort(() => 0.5 - Math.random());

const calculateAverage = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

// const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// console.log(darkMode);

// const appleBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
// console.log(appleBrowser);

const checkEmptyArray = (arr) => !Array.isArray(arr) || arr.length === 0;

const findUniquesInArray = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

const randomHexColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
console.log(randomHexColor());

// Radians = Degrees &times; &pi;/180
// Degrees = Radians &times; 180/&pi;

const degreesToRadians = (deg) => (deg * Math.PI) / 180.0;

const radiansToDegrees = (rad) => (rad * 180) / Math.PI;

const isRunningInBrowser = typeof window === 'object' && typeof document === 'object';
console.log(isRunningInBrowser);

const generateRandomUUID = (a) =>
  a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateRandomUUID);
console.log(generateRandomUUID());

const getRandomBoolean = () => Math.random() >= 0.5;

const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;

const isEvens = (num) => num % 2 === 0;

const uniqueArr = (arr) => [...new Set(arr)];

const isArray = (arr) => Array.isArray(arr);

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomString = () => Math.random().toString(36).slice(2);

const scrollToTop = () => window.scrollTo(0, 0);

const toggleBool = () => (bool = !bool);

const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
console.log(daysDiff(new Date('2021-05-10'), new Date('2021-11-25')));

const capitalizes = (str) => str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalizes('herbert'));

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
 **/

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
/* switch (prompt('What is the weather like?')) {
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
 */
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
console.log(power(2, 10));

// ------------------------------------------------------------------------------------
//! Z:\Courses\[GigaCourse.Com] Udemy - The Ultimate React Course 2023 React, Redux & More\4. [Optional] Review of Essential JavaScript for React
const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: ['fantasy', 'high-fantasy', 'adventure', 'fiction', 'novels', 'literature'],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: ['science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy'],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//! Destructuring
// const books = getBooks();
/* const book = getBook(3);
book;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;
console.log(title, author, genres);

//! Rest Operator
const [priGenre, secGenre, ...otherGenres] = genres;
console.log(priGenre, secGenre, otherGenres);

//! Spread Operator
const newGenres = [...genres, 'epic fantasy'];
newGenres;

const updateBook = { ...book, moviePublicationDate: '2001-12-19', pages: 1210 };
updateBook;

//! Template Literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split('-')[0]
}. The book has ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie`;
summary;

//! Ternary Operator
const pagesRange = pages > 1000 ? 'Over a Thousand' : 'Less than 1000';
pagesRange;
console.log(`The book has ${pagesRange} pages`);

//! Arrow Functions
const getYear = (str) => str.split('-')[0];
console.log(getYear(publicationDate));

//! Short-Circuiting and Logical Operators
console.log(true && 'Some String');
console.log(false && 'Some String'); // short-curcuit
console.log(hasMovieAdaptation && 'This book has a movie');

console.log(true || 'Some String');
console.log(false || 'Some String');

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || 'NOT TRANSLATED';
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || 'NO DATA';
// countWrong;

// const counts = book.reviews.librarything.reviewsCount ?? 'NO DATA';
// counts;

//! Optional Chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book)) 
*/

//! Array Methods
//! map
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

const books = getBooks();
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData;

//! Filter
const longBooks = books.filter((book) => book.pages > 500).filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books.filter((book) => book.genres.includes('adventure')).map((book) => book.title);
adventureBooks;

//! Reduce
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;
