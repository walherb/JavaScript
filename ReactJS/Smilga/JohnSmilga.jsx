//! Coding Addict -- { :YouTube }
//! reactjs.org, react.dev
//! Install Quokka.js
//? e.preventDefault();
//? rel="noopener noreferrer"
// ps -eo pid,ppid,cmd,%mem | sort -nk4 | head -5
//  TODO:
//@
//*
//! Section 3: React Fundamentals
//! dspace@DSpace-KYU:~/Build/webapps/xmlui/themes/Mirage2/xsl/core$page-structure.xsl
//! npm create vite@latest react-dev -- --template react
// npm install && npm run dev

// npx create-react-app@latest tutorial
// Get-ChildItem -Force  { List Hidden Files }
// Ctrl + D { Select Word } -> Ctrl + Shift + L (Select All Occurences)

// VS Code Extensions
// Auto Rename Tag
// Highlight Matching Tag
// Prettier
// Settings -> Search -> default formatter -> Editor: Default Formatter
// settings.json
// "editor.formatOnSave": true,
// "editor.formatOnPaste": true,
// "editor.defaultFormatter": "esbenp.prettier-vscode",
// "prettier.singleQuote": true,
// "prettier.semi": false,
// Emmet
// "emmet.includeLanguages": {
//     "javascript": "javascriptreact"
// }

// ES7 Snippets
// ES7+ React/Redux/React-Native snippets
// rafce (arrow func with export)
// rfce (regualr func with export)
// uncheck
// Settings -> React Snippets -> Import React On Top

// JSX Rules
// 1.Should return only one element
// return <>...</>; shorthand;
// 2.camelCase property naming convention
// 3.className instead of class
// 4.close every element

// React Developer Tools: Google Chrome Extensions

// https://www.amazon.com/Best-Sellers-Books/zgbs/books/

//! ------------- { Video: JavaScript Nuggets - Destructuring (Array) } ------------
/*
#arraydestructuring
const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];
console.log(fruit1, fruit2, fruit3);

const [john, peter, bob, anna, kelly] = friends;
console.log(john, peter, bob, anna, kelly);
const [enemy, , bob, , kelly, susan] = friends;
console.log(enemy, bob, kelly, susan);

let first = 'bob';
let second = 'john';

let temp = second;
second = first;
first = temp;
console.log(first, second);

[second, first] = [first, second];
console.log(first, second);
#arraydestructuring
*/

//! --------------- { Video: Javascript Nuggets - Destructuring (object) } --------------
/*
#object-destructuring
const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

const firstName = bob.first;
const lastName = bob.last;
const sister = bob.siblings.sister;

const { first, last, city } = bob;
const { first:aliasOfFirst, last, city } = bob;
console.log(aliasOfFirst,last, city);
const {
  first,
  last,
  city,
  siblings: { sister: favoriteSibling },
} = bob;
console.log(first, last, city, favoriteSibling);
#object-destructuring
*/

//! https://www.youtube.com/watch?v=f_sEWa5hA0Q
//! --------------------- { Video: Javascript Nuggets - Map } ---------------
//? moment --> npm package for dates & time
/*
#map
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 26,
    position: 'intern',
  },
];

const ages = people.map((person) => {
  return person.age * 2;
});
console.log(ages);

const newPeople = people.map((person) => {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});
console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');
result.innerHTML = names.join('');
#map
 */

// [ React Events] (https://reactjs.org/docs/events.html)
//! -------------------- { Video: Javascript Nuggets - Spread Operator } --------------
/*
#spread-perator
const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];

console.log(friends);

reference
const newFriends = friends;
copy
const newFriends = [...friends];
newFriends[0] = 'nancy';
console.log(friends);
console.log(newFriends);

ES2018 - ES8 Objects

const person = { name: 'john', job: 'developer' };
const newPerson = { ...person, city: 'chicago', name: 'peter' };
console.log(person);
console.log(newPerson);
#spreadoperator
*/

// FusionCharts
//! ------------- { Video: Javascript Nuggets - Filter and Find } ---------------------
/*
#filterandfind
const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];
const fruits = ['orange', 'pear', 'lemon'];
!filter
const youngPeople = people.filter((person) => {
  if (person.age < 30) {
    return person;
  }
  return person.age < 30;
});
console.log(youngPeople);
const developers = people.filter((person) => person.position === 'developer');
console.log(developers);

!no match
const seniorDevs = people.filter((item) => item.position === 'senior dev');
console.log(seniorDevs);

!find
const peter = people.find((person) => person.name === 'peter');
console.log(peter);
const fruit = fruits.find((fruit) => fruit === 'lemon');
console.log(fruit);
!no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);

!multiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

const anna = people.filter((person) => person.name === 'anna');
console.log(peter.position); // find
console.log(anna[0].position); // filter
#filterandfind
*/

// netlify.com: { magical-vacherin-4bf4c3 }
// https://react-course-fundamentals-walherb.netlify.app/

//! Backroads Application
// rel = 'noreferrer';
// rmdir - Force - Recurse.git;
// rd /s /q .git;

/*
!CSS
Coding Addict - [Default Starter Video](https://youtu.be/UDdyGNlQK5w)
Repo - [Default Starter Repo](https://github.com/john-smilga/default-starter)
*/

//! ----------------- Javascript Nuggets - Unique Values (ES6) ---------------
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];
const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories);
// const result = document.querySelector('.result');
// result.innerHTML = categories
//   .map((category) => {
//     return `<button>${category}</button>`;
//   })
//   .join('');

//! ------------------ { Javascript Nuggets - Dynamic Object Keys } ------------------
let appState = 'loading';
appState = 'error';
const keyName = 'computer';
const app = {
  [appState]: true,
};
app[keyName] = 'apple';
console.log(app);

const state = {
  loading: true,
  name: '',
  job: '',
};
function updateState(key, value) {
  state[key] = value;
}
updateState('name', 'john');
updateState('job', 'developer');
updateState('loading', false);

updateState('products', []);
updateState('name', 'peter');
console.log(state);

//! ----------------- { Javascript Nuggets - Async _ Await } --------------------
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

/* const example = async () => {
  return 'hello there';
};
console.log(example());

async function someFunc() {
  const result = await example();
  console.log(result);
  console.log('hello world');
}
someFunc(); */

const users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'susan' },
  { id: 3, name: 'anna' },
];

const articles = [
  { userId: 1, articles: ['one', 'two', 'three'] },
  { userId: 2, articles: ['four', 'five'] },
  { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
];

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);

    if (user) {
      return resolve(user);
    } else {
      reject(`No such user with name : ${name}`);
    }
  });
}

const getData = async () => {
  try {
    const user = await getUser('john');
    const articles = await getArticles(user.name);
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
};
getData();

// getUser('susan')
//   .then((user) => getArticles(user.id))
//   .then((articles) => console.log(articles))
//   .catch((err) => console.log(err));

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId);

    if (userArticles) {
      return resolve(userArticles.articles);
    } else {
      reject(`Wrong ID`);
    }
  });
}
