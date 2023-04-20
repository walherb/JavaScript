// Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz   2.71 GHz
// HP ProBook 450 G4
// npm install --save-dev typescript
// npx tsc --version
// npx tsc src/index.ts
// npx ts``c --init
// npx tsc
// "scripts": {
//     "dev": "tsc --watch"
//   }

// .eslintrc.js
// module.exports = {
//   parserOptions: {
//     ecmaVersion: 6,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   parser: '@typescript-eslint/parser',
//   plugins: ['@typescript-eslint'],
//   extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
//   rules: {
//     '@typescipt-eslint/interface-name-prefix': ['always'],
//     'no-underscore-dangle': 'error',
//   },
// };

// typescript.format.*: settings
// typescript.format.enable to false
// npn i -g typescript
// npm init -y
// tsconfig.json
// {
//     "compilerOptions": {
//         "target": "es5", // change to es6 when using sets
//         "module": "commonjs",
//         "strict": true,
//         "outDir": "dist",
//         "skipLibCheck": true,
//         //"noImplicitAny": true,
//     },
//     "include": ["src/**/*.ts"],
//     "exclude": ["node_modules"],
// }
// index.ts
// tsc

// "[typescript]": {
//   "editor.formatOnPaste": false,
//   "editor.formatOnSave": false,
// },
// "editor.formatOnPaste": true,
// "editor.formatOnSave": true,

let x: number = 3;
let y: string = 'Hello World!';
let z: boolean = true;
let n: any;
let m: unknown;

function p(): void {}

var nums: number[] = [1, 2, 3, 4];
var tuple: [string, number] = ['Hello', 2];
var obj: object = {};

// Custom Types
type Animals = {
  name: string;
  age: number;
  colors: string[];
  legs?: number;
};

const printAnimal = (animal: Animals) => {
  const x = (animal.legs ? animal.legs : 0) - 5;
  console.log(animal.name, animal.age);
};

const dog = {
  name: 'tim',
  age: 10,
  colors: ['brown', 'black'],
};

printAnimal(dog);

// Type Nesting
type Farm = {
  animals: Animals[];
  animalNamesToObjedcts: {
    [name: string]: Animals;
  };
};

// Type Inheritance
type Monkey = {
  diet: string;
} & Animal;

// --------------------------- Sets ------------------------------------
const s = new Set<any>();
const r = new Set<number>();
const t: Set<number> = new Set();

// -----------------------------------------------------------------------
type Fish = {
  name: string;
  swim: () => void;
};

type Dog = {
  name: string;
  bark: () => void;
};

const printName = (animal: Dog | Fish) => {
  console.log(animal.name);
};

interface Animal {
  name: string;
}

const printNames = (animal: Animal) => {
  console.log(animal.name);
};

// ------------------ enums -------------------------------
// const getShirtPrice = (shirtSize: "small" | "medium" | "large") => {
//     switch (shirtSize) {
//         case "small":
//             return 10;
//         case "medium":
//             return 20;
//         case "large":
//             return 30;
//     }
// }

enum ShirtSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

const getShirtPrice = (shirtSize: ShirtSize) => {
  switch (shirtSize) {
    case ShirtSize.Small:
      return 10;
    case ShirtSize.Medium:
      return 20;
    case ShirtSize.Large:
      return 30;
  }
};

const price = getShirtPrice(ShirtSize.Small);
// ----------------- Type Guard -----------------------------------
const isFish = (animal: Fish | Dog): animal is Fish => {
  return (animal as Fish).swim !== undefined;
};

const callAnimalFunc = (animal: Fish | Dog) => {
  if (isFish(animal)) animal.swim();
  else animal.bark();
};

let q: number = 2;

// @ts-ignore
x = 'Hello';
