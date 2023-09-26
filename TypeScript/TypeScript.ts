// Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz   2.71 GHz
// HP ProBook 450 G4
// ESLint
// settings -> eslint: probe -> {typescript, typescriptreact}
// npm install --save-dev typescript
// npx create-react-app myapp --template typescript
// npm i -D prettier
// npm i -D eslint-config-prettier eslint-plugin-prettier
// package.json -> eslintConfig -> "plugin:prettier/recommended"
// .prettierrc.json
/* {
  "printWidth": 100,
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "endOfLine": "auto"
  } */
// npx tsc --version
// npx tsc src/index.ts
// npx tsc --init
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

/* -------------------- Learn React with Typescript ------------------- */
let unitPrice: number;
let todays: Date;

type Product = { name: string; unitPrice?: number };
let table: Product = { name: 'Table' };
let chair: Product = { name: 'Chair', unitPrice: 40 };
type DiscountedProduct = Product & { discount: number }; // extending

/* -------------------------------------------------------------------- */

let xx: number = 3;
let y: string = 'Hello World!';
let z: boolean = true;
let nn: any;
let m: unknown;

function p(): void {}

var numss: number[] = [1, 2, 3, 4];
const numberss: Array<number> = [];
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

/* ----------------------------- Dave Gray -------------------------- */
// tsc main.ts -w
// tsc --init
// tsconfig.json -> "rootDir": "./src", "outDir": "./build/js", "target": "es2016",
// {}, "include": [ "src" ], "noEmitOnError": true
// tsc -w
// tsc --noEmitOnError -w

let myName: string = 'Dave';
let album: any = '';
let isLoading: boolean;
let isNum: number = 45;
let postId: string | number; // union type
let isActive: number | boolean | string;

const sum = (a: number, b: number) => {
  return a + b;
};

let re: RegExp = /\w+/g;

/* --------------- Arrays, Objects --------------------- */
/* ---------Arrays---------- */
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Start', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
let bands: string[] = [];
bands.push('Van Halen');

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true];

/* ----------- Objects --------------- */
let myObj: object;

const exampleObj = {
  prop1: 'Dave',
  prop2: true,
};

type Guitarist = {
  name?: string; // optional
  active?: boolean;
  albums: (string | number)[];
};

interface GuitaristI {
  name: string;
  active?: boolean; // optional
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812'],
};

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II', 'IV'],
};

// const greetGuitarist = (guitarist: Guitarist) => {
//   return `Hello ${guitarist.name}!`
// }

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name?.toUpperCase()}!`;
};

console.log(greetGuitarist(jp));

/* -------------- Enums-------------- */
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);

/* -------------- Functions ----------------- */
// Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

// Literal types
let username: 'Dave' | 'John' | 'Amy';
username = 'Amy';

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg('Hello!');
logMsg(add(2, 3));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {(a: number, b: number): number}

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

// opional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

// defualt parameters
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));

// Rest parameters
const totals = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg(totals(1, 2, 3, 4));

// ---------------- never -------------------
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// -------------- Completed Video 4 ---------------
// -------------- Video 12: React TypeScript Tutorial for Beginners --------------
// npm create vite@latest -> React -> TypeScript
// npm i && npm run dev

// Section.tsx
// import { ReactNode } from 'react';

// type SectionProps = {
//   title?: string,
//   children: ReactNode
// }
/* 
export const Section = ({ children, title = 'My Subheading'}: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}

const [count, setCount] = useState<number>(1)

return (
  <h1>Count is {count}</h1>
  <button onClick={() => setCount(prev => prev + 1)}>+</button>
  <button onClick={() => setCount(prev => prev - 1)}>-</button>
)
 */
// Vite Site -> guide -> Deploying a Static Site

/* ------------ TypeScript Tuttorial for Beginners - Mosh -------------- */
/* 
Benefits 
- Static typing 
- Code competion 
- Refactoring 
- Shorthand notations
Drawbacks
- Compilation 
- Discipline in coding 
npm i -g typescript 
tsc -v
tsc index.ts
tsc --init 
JavaScript          TypeScript
number              any
string              unknown 
boolean             never 
null                enum 
undefined           tuple 
object
*/
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

let numbersi: number[] = [1, 2, 3];

//  -------- tuple ------------
let user: [number, string] = [1, 'Mosh'];

// ----------- enums {PascalCase} ---------
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;

// -------------- functions ------------
function calculateTax(income: number): number {
  return 0;
}

// ----------- objects -------------
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: 'Mosh',
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

//  --------------- alias ------------
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log(date);
  },
};

//  ----------- union types -----------------
function kgToLbs(weight: number | string): number {
  // narrowing
  if (typeof weight === 'number') return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

//  ------------ intersection types ----------
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// ---------- Literal Types -------------
type Quantity = 50 | 100;
let quantity: Quantity = 100;
