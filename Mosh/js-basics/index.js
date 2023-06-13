/* 
const nums = [11, 30, 22, 9, 14];
const sum = nums.reduce((acc, cur) => acc + cur);
const over = nums.filter((num) => num > 20); 

const todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(todaysDate);
*/

/* ----------------Control-Flow: Exercises------------------- */
/* ---Max-of-Two-Numbers--- */
/* let number = max(3, 8);
console.log(number);
function max(a, b) {
  return a > b ? a : b;
} */

/* ---Landscape-or-Portrait--- */
/* console.log(isLandscape(400, 600));
function isLandscape(width, height) {
  return width > height;
} */

/* ---FizzBuzz--- */
/* console.log(fizzBuzz(15));
function fizzBuzz(num) {
  if (typeof num !== 'number') return NaN;
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
} */

/* ---Demerit-Points--- */
/* checkSpeed(130);
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerpoint = 5;
  if (speed < speedLimit + kmPerpoint) {
    console.log('Ok');
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerpoint);
  if (points >= 12) {
    console.log('License suspended');
  } else {
    console.log('Points', points);
  }
} */

/* ---Even-and-Odd-Numbers--- */
/* showNumbers(5);
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? 'EVEN' : 'ODD';
    console.log(i, message);
  }
} */

/* ---Count-Truthy--- */
/* const array = [0, null, undefined, '', 2, 3, 5];
console.log(countTruthy(array));
function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
} */

/* ---String-Properties--- */
/* const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b',
};
showProperties(movie);
function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      console.log(key, obj[key]);
    }
  }
}
 */

/* ---Sum-of-Multiples-of-3-and-5--- */
/* console.log(sum(10));
function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
} */

/* ---Grade--- */
/* const marks = [80, 80, 85];
console.log(calculateGrade(marks));
function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum / array.length;
}
 */

/* ---Stars--- */
/* showStars(10);
function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++) {
      pattern += '*';
    }
    console.log(pattern);
  }
} */

/* ---Prime-Numbers--- */
/* showPrimes(10);
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
} */

/* ----------------Objects: Exercises------------ */
/* -----Address-Object----- */
/* let address = {
  street: 'a',
  city: 'b',
  zipCode: 'c',
};
function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}
showAddress(address); */

/* -----Factory-and-Constructor-Functions----- */
/* /* let address = {
  street: 'a',
  city: 'b',
  zipCode: 'c',
}; */

/* let address = createAddress('a', 'b', 'c');
console.log(address);
// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
} * /

// Constructor Function
let address = new Address('a', 'b', 'c');
console.log(address);
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
} */

/* -----------Object-Equality------------ */

/* ---------Blog-Post-Object----------- */
/* let post = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 10,
  comments: [
    { author: 'a', body: 'b' },
    { author: 'c', body: 'c' },
  ],
  isLive: true,
};
console.log(post); */

/* -----Constructor-Functions------- */
/* let post = new Post('a', 'b', 'c');
console.log(post);
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
} */

/* -----Price-Range-Object------ */
/* let priceRanges = [
  { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
  { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
  { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];
let restaurants = [{ averagePerPerson: 5 }]; */

/* --------------Arrays: Exercises------------------- */
/* -----------Array-from-Range-------- */
/* const numbers = arrayFromRange(-10, -4);
console.log(numbers);
function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}
 */

/* ------------Includes----------- */
/* const numbers = [1, 2, 3, 4, 5];
console.log(includes(numbers, -1));
function includes(array, searchElement) {
  for (let e of array) {
    if (e === searchElement) {
      return true;
    }
  }
  return false;
} */

/* ------------Except-------------- */
/* const numbers = [1, 2, 3, 4, 1];
const output = except(numbers, [1, 2]);
console.log(output);
function except(array, excluded) {
  const output = [];
  for (let e of array) {
    if (!excluded.includes(e)) {
      output.push(e);
    }
  }
  return output;
} */

/* ------------Moving-an-Element------------  */
/* const numbers = [1, 2, 3, 4];
const output = move(numbers, 1, 2);
console.log(output);
function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid offset.');
    return;
  }

  const output = [...array];
  const e = output.splice(index, 1)[0];
  output.splice(position, 0, e);
  return output;
} */

/* ----------Count-Occurrences------------- */
/* const numbers = [1, 2, 3, 4, 1];
const count = countOccurrences(numbers, 1);
console.log(count);
function countOccurrences(array, searchElement) {
  // let count = 0
  // for (let e of array)
  //   if (e === searchElement)
  //     count++
  // return count;

  return array.reduce((acc, curr) => {
    const occurrence = ((curr) === searchElement) ? 1 : 0;
    // console.log(acc, curr, searchElement);
    return acc + occurrence;
  }, 0);
}
 */

/* -------------Get-Max------------- */
/* console.log(getMax([1, 2, 2, 3, 1]));
function getMax(array) {
  if (array.length === 0) return undefined;
  // let max = array[0];
  // for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];
  // return max;

  return array.reduce((a, b) => (a > b ? a : b));
} */

/* -------------Movies------------- */
/* const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];
// All the movies in 2018 with rating > 4
// Sort them by their rating descending order
// Pick the title
console.log(
  movies
    .filter((m) => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map((m) => m.title)
); */

/* --------------Exercises: Functions------------ */
/* -----------Sum of Arguments----------- */
/* console.log(sum([1, 2, 3, 4]));
function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}*/

/* -----------Area of Circle----------- */
/* const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};
console.log(circle.area); */

/* -----------Error Handling----------- */
/* try {
  const numbers = [1, 2, 3, 4, 1];
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error('Invalid array');
  return array.reduce((acc, curr) => {
    const occurrence = curr === searchElement ? 1 : 0;
    return acc + occurrence;
  }, 0);
} */
