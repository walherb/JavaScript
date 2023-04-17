//! Coding Addict -- { :YouTube }
//! reactjs.org, react.dev
//! Install Quokka.js
// Vite -- Next Generation Frontend Tooling { better create-react-app }
// npx create-react-app tutorial
// npx create-react-app@latest tutorial {:Incase the 1st one doesn't work also helps i initiate git repo}
// Get-ChildItem -Force  { List Hidden Files }
// Ctrl + D { Select Word} -> Ctrl + Shift + L (Select All Occurences)

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

// Book List
// JSX - JavaScript
//! { Video: Javascript Nuggets - Destructuring (object) }
/*
#objectdestructuring
const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// const { first, last, city } = bob;
// const { first:aliasOfFirst, last, city } = bob;
// console.log(aliasOfFirst,last, city);
const {
  first,
  last,
  city,
  siblings: { sister: favoriteSibling },
} = bob;
console.log(first, last, city, favoriteSibling);
#objectdestructuring
*/

// https://www.youtube.com/watch?v=f_sEWa5hA0Q
//! { Video: Javascript Nuggets - Map } moment --> npm package for dates & time
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
//! { Video: Javascript Nuggets - Spread Operator } ...
/*
#spreadoperator
const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];

console.log(friends);

// reference
// const newFriends = friends;
// copy
const newFriends = [...friends];
newFriends[0] = 'nancy';
console.log(friends);
console.log(newFriends);

// ES2018 - ES8 Objects

const person = { name: 'john', job: 'developer' };
const newPerson = { ...person, city: 'chicago', name: 'peter' };
console.log(person);
console.log(newPerson);
#spreadoperator
*/

//! [ Video: JavaScript Nuggets - Destructuring (Array) ]
/*
#arraydestructuring
const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];
// console.log(fruit1, fruit2, fruit3);

// const [john, peter, bob, anna, kelly] = friends;
// console.log(john, peter, bob, anna, kelly);
const [enemy, , bob, , kelly, susan] = friends;
console.log(enemy, bob, kelly, susan);

let first = 'bob';
let second = 'john';

// let temp = second;
// second = first;
// first = temp;
// console.log(first, second);

[second, first] = [first, second];
console.log(first, second);
#arraydestructuring
*/

// FusionCharts
//! { Video: Javascript Nuggets - Filter and Find }
/*
#filterandfind
const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];
const fruits = ['orange', 'pear', 'lemon'];
// filter
const youngPeople = people.filter((person) => {
  // if (person.age < 30) {
  //   return person;
  // }
  return person.age < 30;
});
console.log(youngPeople);
const developers = people.filter((person) => person.position === 'developer');
console.log(developers);

// no match
const seniorDevs = people.filter((item) => item.position === 'senior dev');
console.log(seniorDevs);

// find
const peter = people.find((person) => person.name === 'peter');
console.log(peter);
const fruit = fruits.find((fruit) => fruit === 'lemon');
console.log(fruit);
// no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);

// multiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

const anna = people.filter((person) => person.name === 'anna');
console.log(peter.position); // find
console.log(anna[0].position); // filter
#filterandfind
*/

// npm run build
// netlify.com: { magical-vacherin-4bf4c3 }
// https://react-course-fundamentals-walherb.netlify.app/

//! Backroads Application
// rel = 'noreferrer';
// rmdir - Force - Recurse.git;
// rd / s / q.git;
// git init;

/*
…or create a new repository on the command line
echo "# temp-backroads-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/walherb/temp-backroads-app.git
git push -u origin main

@used
…or push an existing repository from the command line
git remote add origin https://github.com/walherb/temp-backroads-app.git
git branch -M main
git push -u origin main
*/

//! Project Deployment --
/*
@used
https://main--temp-backroads-app-walherb.netlify.app/
rm -rf .git
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/walherb/temp-backroads-app.git
git branch -M main
git push -u origin main

@used
git clone https://github.com/walherb/temp-backroads-app.git
npm install && npm start
commit && push on VS Code

VITE
npm create vite@latest my-react-app -- --template react
npm install && npm run dev

; --------------------------------------------------------------
git remote add origin https://github.com/walherb/03-advanced-react.git
git branch -M main
git push -u origin main

git remote add origin https://github.com/walherb/react-course-v3.git
git branch -M main
git push -u origin main

[JavaScript Nuggets - Destructuring (Array)]
[JavaScript Nuggets - Filter and Find]

@Stopped at Video: 91

!CSS
Coding Addict - [Default Starter Video](https://youtu.be/UDdyGNlQK5w)
Repo - [Default Starter Repo](https://github.com/john-smilga/default-starter)


*/
