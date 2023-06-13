/*
!Web Dev Simplified --> { YouTube: Kyle Cook }

!Step 1: Break the UI into a component hierarchy
!Step 2: Build a static version in React
!Step 3: Find the minimal but complete representation of UI state 
!Step 4: Identify where your state should live  
!Step 5: Add inverse data flow 

npx create-react-app my-app --template typescript
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

import PropTypes from 'prop-types';

npm install --save-dev typescript #or yarn add --dev typescript

“scripts”: {
  “typecheck”: “tsc”
}

npx tsc --init #or yarn run tsc --init

pip install --upgrade or -U 
!https://www.activestate.com/resources/quick-reads/how-to-update-all-python-packages/
pip freeze | %{$_.split('==')[0]} | %{pip install --upgrade $_}
pip3 list --outdated --format=freeze | grep -v '^\-e' | cut -d = -f 1 | xargs -n1 pip3 install -U 
pip3 list -o | cut -f1 -d' ' | tr " " "\n" | awk '{if(NR>=3)print}' | cut -d' ' -f1 | xargs -n1 pip3 install -U 
pip freeze > requirements.txt
pip install -r requirements.txt --upgrade
pip install --upgrade pip
pip uninstall --yes <package-name>
pip check

!https://mui.com/material-ui/material-icons/?query=pix
!"files.associations": {
  "*.js": "javascriptreact"
}

!Default Props 
AddItem.defaultProps = {
  number: 2,
  text: "default",
};

AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};

import { PropTypes } from 'prop-types';

!Item.propTypes = {
  item: PropTypes.shape({
    objectID: PropTypes.number.isRequired,
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    num_comments: PropTypes.number,
    points: PropTypes.number,
  }).isRequired,
};

!-------------------------- Master PropTypes in React ------------------------------
!https://blog.bitsrc.io/master-proptypes-in-react-a80f9fefff8
npm install --save prop-types
yarn add prop-types
import { PropTypes } from 'prop-types';
npm install prop-types --save
import PropTypes from 'prop-types';

MyComponent.propTypes = {}; 

Component.propTypes = {
  profileProp: PropTypes.shape({
    id: PropTypes.number,
    fullname: PropTypes.string,
    gender: PropTypes.oneOf(['M', 'F']),
    birthdate: PropTypes.instanceOf(Date),
    isAuthor: PropTypes.bool
  })
}

Component.propTypes = {
  subjectScoreProp: PropTypes.exact({
    subject: PropTypes.oneOf(['Maths', 'Arts', 'Science']),
    score: PropTypes.number
  })
}

Profile.propTypes = {
    name: PropTypes.oneOf(['John', 'Jane']).isRequired,
    ...
};

Profile.propTypes = {
    ...
    arrayOrObject: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Profile.propTypes = {
    ...
    myObject: PropTypes.objectOf(PropTypes.string).isRequired,
}
myObject: {
    pet: 'cat',
    food: 'pizza',
},

Component.propTypes = {  
  profileProp: PropTypes.shape({  
    id: PropTypes.number,  
    fullname: PropTypes.string,  
    gender: PropTypes.oneOf(['M', 'F']),  
    birthdate: PropTypes.instanceOf(Date),  
    isAuthor: PropTypes.bool  
  })  
}  

Component.propTypes = {  
  subjectScoreProp: PropTypes.exact({  
    subject: PropTypes.oneOf(['Maths', 'Arts', 'Science']),  
    score: PropTypes.number  
  })  
}  

!Custom validators for type-checking React props.
const isEmail = function(props, propName, componentName) {  
  const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;  
    
  if (!regex.test(props[propName])) {  
    return new Error(`Invalid prop `${propName}` passed to `${componentName}`. Expected a valid email address.`);  
  }  
}  
  
Component.propTypes = {  
  email: isEmail,  
  fullname: PropTypes.string,  
  date: PropTypes.instanceOf(Date)  
} 

const isEmail = function(propValue, key, componentName, location, propFullName) {
  const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;

  if (!regex.test(propValue[key])) {
    return new Error(`Invalid prop `${propFullName}` passed to `${componentName}`. Expected a valid email address.`);
  }
}

Component.propTypes = {
  emails: PropTypes.arrayOf(isEmail)
}

const isEmail = function(propValue, key, componentName, location, propFullName) {
  // Get the resolved prop name based on the validator usage
  const prop = (location && propFullName) ? propFullName : key;

  const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;

  if (!regex.test(propValue[key])) {
    return new Error(`Invalid prop `${prop}` passed to `${componentName}`. Expected a valid email address.`);
  }
}

Component.propTypes = {
  email: PropTypes.oneOfType([
    isEmail,
    PropTypes.shape({
      address: isEmail
    })
  ]),
  emails: PropTypes.arrayOf(isEmail)
}

!Validating PercentageStat in React 
import React from 'react';
import PropTypes from 'prop-types';

The PercentageStat component
function PercentageStat({ label, score = 0, total = Math.max(1, score) }) {
  return (
    <div>
      <h6>{ label }</h6>
      <span>{ Math.round(score / total * 100) }%</span>
    </div>
  )
}

Checks if a value is numeric
Either a finite number or a numeric string
function isNumeric(value) {
  const regex = /^(\+|-)?((\d*\.?\d+)|(\d+\.?\d*))$/;
  return Number.isFinite(value) || ((typeof value === "string") && regex.test(value));
}


Checks if value is non-zero
Value is first converted to a number
function isNonZero(value) {
  return +value !== 0;
}


Takes test functions as arguments and returns a custom validation function.
Each function passed in as argument is expected to take a value argument
expected to accept a value and return a Boolean if it passes the validation.
All tests must pass for the custom validator to be marked as passed.
function validatedType(...validators) {
  return function(props, propName, componentName) {

    const value = props[propName];

    const valid = validators.every(validator => {
      if (typeof validator === "function") {
        const result = validator(value);
        return (typeof result === "boolean") && result;
      }

      return false;
    });

    if (!valid) {
      return new Error(`Invalid prop \`${propName}\` passed to \`${componentName}\`. Validation failed.`);
    }

  }
}

// Set the propTypes for the component
PercentageStat.propTypes = {
  label: PropTypes.string.isRequired,
  score: validatedType(isNumeric),
  total: validatedType(isNumeric, isNonZero)
}

export const Profile = ({ name, age, isloggedIn }) => {
    return (
        <>
            {isloggedIn && (
                <p>
                    {name} is {age + 3}
                    years old
                </p>
            )}
        </>
    );
};

Profile.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isloggedIn: PropTypes.bool,
};

Profile.propTypes = {
    userDetails: PropTypes.shape({
        ...
        email: function (props, propName, componentName) {
            const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!regex.test(props[propName])) {
                return new Error(
                    `The prop ${propName} passed to ${componentName}is not a valid email address.`
                );
            }
        },
    }),
};

const isEmail = function (props, propName, componentName) {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!regex.test(props[propName])) {
        return new Error(
            `The prop ${propName} passed to ${componentName}is not a valid email address.`
        );
    }
};

Profile.propTypes = {
    userDetails: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: isEmail,
    }),
};

Profile.defaultProps = {
    userDetails: {
        id: 1,
        name: 'John Doe',
        age: 30,
    },
};

-- Basic types
PropTypes.any: The prop can be of any data type
PropTypes.number: The prop should be a number
PropTypes.string: The prop should be a string
PropTypes.bool: The prop should be a boolean
PropTypes.symbol: The prop should be a symbol
PropTypes.func: The prop should be a function

-- Collection types
a. Array Types
PropTypes.array: The prop should be an array
PropTypes.arrayOf([type]): The prop should be an array where all values match the specified type
ReactComponent.propTypes = {
  arrayProp: PropTypes.array, // []
  stringArrayProp: PropTypes.arrayOf(PropTypes.string), // ["A","B","C"]
  numArrayProp: PropTypes.arrayOf(PropTypes.number) // [1,2,3]
};

b. Object Types
PropTypes.object: The prop should be an object
PropTypes.objectOf([type]):  The prop should be an object in which all property values match the specified type.
PropTypes.shape: The prop should be an object which contains a set of specified keys with values of the specified types.
PropTypes.exact: The prop should be an object which contains a set of specified keys which strictly matches with specified types.

ReactComponent.propTypes = {
  objectProp: PropTypes.object, // {}
  
  stringObjectProp: PropTypes.objectOf(PropTypes.string), // {name: "John", occupation: "Web Developer"}
  numObjectProp: PropTypes.objectOf(PropTypes.number), // {age: 27}
  
  userObjectShapeProp: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age:PropTypes.number,
    occupation: PropTypes.string,
  })
  
  userObjectExactProp: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    age:PropTypes.number,
    occupation: PropTypes.string,
  })
};

-- Multiple types
3) Multiple Types
PropTypes.oneOf: The prop is limited to a specified set of values, treating it like an enum
PropTypes.oneOfType: The prop should be one from of a specified set of types, behaving like a union of types

ReactComponent.propTypes = {
  enumProp: PropTypes.oneOf([true, 23, "N/A"]),
  genderEnumProp: PropTypes.oneOf(["M","F"]),
  
  unionProp: PropTypes.oneOfType([
    PropType.string,
    PropType.array,
    PropType.bool,
    PropType.object,
  ])
};


-- Instance types
4) Instance Types
PropTypes.instanceOf: The prop should be instance of the specific JS class
ReactComponent.propTypes = {
  userProp: PropTypes.instanceOf(User)
};

-- Required types
5) Required Types
User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  occupation: PropTypes.string.isRequired,
};

Renderable types
Custom types

class Student extends React.Component {
  
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

MyComponent.propTypes = {
  propArray: PropTypes.array,
  propBool: PropTypes.bool,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propObject: PropTypes.object,
  propString: PropTypes.string,
}

PropTypes.any

const Student = (props) => {
  return (
    <div>
      <p>Student Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

class Numbers extends React.Component {
  
  render() {
    const numbers = this.props.numbers.map(number => <p>{number}</p>);
    return (
      <div>
        {numbers}
      </div>
    );
  }
}
Numbers.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number)
};

const User = (props) => {
  const { name, age, occupation } = props;
  
  return (
    <div>
      My name is {name}. I am {age} years old. I am a {occupation}
    </div>
  );
};

const UserList = () => {
  return (
    <div>
      <h3>User List</h3>
      <User
        name="John"
        age={25}
        occupation="Web Developer"
      />
      <User
        name="Jane"
        age={28}
        occupation="UI/UX Designer"
      />
    </div>
  );
};
  
export default User;

!import PropTypes from "prop-types";
  
const User = (props) => {
  const { name, age, occupation } = props;
  return (
    <div>
      My name is {name}. I am {age} years old. I am a {occupation}
    </div>
  );
};
  
!Validating prop types
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  occupation: PropTypes.string,
};
  
!Defining default props
User.defaultProps = {
  name: "N/A",
  age: 0,
  occupation: "Not Occupied",
};
  
export default User;

	
<User name="Jill" age={'35'} occupation="Quality Analyst" />

PropTypes.any

!https://react.dev/learn
Vite -- Next Generation Frontend Tooling { better create-react-app }
npm create vite@latest react-dev -- --template react
npm install && npm run dev
must be jsx
instead of index.js, need to use main.jsx 
dist folder created instead of build folder when u build 

!-------------------------------------------------------------------
<div>
  {isLoggedIn ? (<AdminPanel />) : (<LoginForm />)}
  </div>

<div>
{isLoggedIn && <AdminPanel />}
</div>

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map((product) => {
  <li key={product.id}>
    {product.title}
  </li>
});

return (
  <ul>{listItems}</ul>
  );
  
!Jonathan Wexler - Get Programming with Node.js-Manning Publications (2019).pdf
!{libgen.is, singlelogin.me}
!Graphic Javascript Algorithms -> {e-book}
git reset --hard HEAD
git log --stat
git log origin/master..HEAD
git update-index --really-refresh
git checkout -b <branch_name> #SHA Hash
!git mv folder-name folder-name-temp'.. than renamed back to its original name :)

!curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc
nvm ls
nvm ls-remote
nvm install lts/*
nvm install node --lts
nvm install 18.16.0
nvm use 18.16.0
nvm alias default 18.16.0 (*****)
nvm alias default lts/boron
nvm run default --version
nvm exec 18.16.0 server.js
nvm run 18.16.0 app.js
nvm uninstall 18.15.0
nvm cache clear

!npm i -g pm2
!pm2 start app.js 
pm2 list
pm2 logs
pm2 logs big-api
# Start the maximum processes depending on available CPUs
$ pm2 start app.js -i 0
pm2 start api.js -i <processes>
pm2 reload all

$ pm2 stop     <app_name|namespace|id|'all'|json_conf>
$ pm2 restart  <app_name|namespace|id|'all'|json_conf>
$ pm2 delete   <app_name|namespace|id|'all'|json_conf>

$ pm2 describe <id|app_name>
$ pm2 monit

$ pm2 set pm2:sysmonit true
$ pm2 update

npm install pm2@latest -g
pm2 update

# Start all apps
$ pm2 start processes.json
{
  "name"             : "node-app",
  "cwd"              : "/srv/node-app/current",
  "args"             : ["--toto=heya coco", "-d", "1"],
  "script"           : "bin/app.js",
  "node_args"        : ["--harmony", " --max-stack-size=102400000"],
  "log_date_format"  : "YYYY-MM-DD HH:mm Z",
  "error_file"       : "/var/log/node-app/node-app.stderr.log",
  "out_file"         : "log/node-app.stdout.log",
  "pid_file"         : "pids/node-geo-api.pid",
  "instances"        : 6, //or 0 => 'max'
  "min_uptime"       : "200s", // 200 seconds, defaults to 1000
  "max_restarts"     : 10, // defaults to 15
  "max_memory_restart": "1M", // 1 megabytes, e.g.: "2G", "10M", "100K", 1024 the default unit is byte.
  "cron_restart"     : "1 0 * * *",
  "watch"            : false,
  "ignore_watch"      : ["[\\/\\\\]\\./", "node_modules"],
  "merge_logs"       : true,
  "exec_interpreter" : "node",
  "exec_mode"        : "fork",
  "autorestart"      : false, // enable/disable automatic restart when an app crashes or exits
  "vizion"           : false, // enable/disable vizion features (versioning control)
  "env": {
    "NODE_ENV": "production",
    "AWESOME_SERVICE_API_TOKEN": "xxx"
  }
}

Coding Addict -- YouTube CHannel { John Smilga: https://johnsmilga.com/, ***** }
PedroTech -- YouTube Channel
CodeWithArjun -- YouTube Channel 4 Full Stack Spring Boot + React CRUD
EdRoh -- YouTube Channel 4 Building React Dashboards
JavaScript Syntax Extension (JSX)
React Developer Tools -- {Chrome Extension:DICTS, Light Profiles}
npm install -g create-react-app
npx create-react-app react-task-tracker
cd react-task-tracker
npm start
ES7+ React/Redux/React-Native snippets - {author: dsznajder}
npm i react-icons
npm list --depth 0
VS Code command Create ESLint configuration
eslint --init
npm install --save-dev eslint-config-prettier
Then, add "prettier" to the "extends" array in your .eslintrc.* file. Make sure to put it last, so it gets the chance to override other configs.
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
npx eslint-config-prettier path/to/main.js
Next.js
npx create-next-app

-- React
-> Styled Components
-> Material UI
-> React Bootstrap

-- JS Testing
- Jest
- Mocha
- Cypress

NEXT.js -> Uses React
GraphQL
Astro
Gatsby

React & TypeScript - Course for Beginners
For React Version 18 and above  remove the <React.StrictMode> for the Drag feature to work.

Visual Studio Code Crash Course: 38:00

Build a COMPLETE React Admin Dashboard App - React, Material UI, Data Grid, Light & Dark Mode.mp4: 50:50

1. HTML, CSS & INTRO JAVASCRIPT
2. COMBINING IT ALL TOGETHER & DOM MANIPULATION
3. VERSION CONTROL
4. BACKEND (NODE JS), DATABASE (MongoDB, MySQL), ORM
5. FULLSTACK WEB DEVELOPMENT
6. REACT, Social Media Platform Project, Tailwind
7. TYPESCRIPT
8. ADVANCED REACT{Hooks, React Query, Scalability, Optimization}
9. UNIT TESTING IN REACT
10. EXPLORE THE FIELD (GraphQL, NEXT.JS)

!Get Programming with Node.js {Recommended: e-book}

Build a Movie-Search App Using React (With Hooks)

npm init react-app navbar-tut

Build a COMPLETE React Admin Dashboard App | React, Material UI, Data Grid, Light & Dark Mode
Pinned by EdRoh EdRoh 2 months ago (edited)
Hey all! It seems that react-pro-sidebar got updated recently so at 5:41 instead of installing "react-pro-sidebar" please install "react-pro-sidebar@0.7.1" or else it'll break!

0:00 Demonstration of a Complete React Admin Dashboard
3:12 Why build this React Admin Dashboard?
3:47 Installation
7:28 Code Setup
12:31 File and Folder Architecture
17:41 Theme with Light and Dark Mode
36:47 Appbar aka Topbar
51:21 Router Setup
57:14 Navbar aka Sidebar with React Pro Sidebar
1:27:13 Tables with Mui Data Grid
1:58:35 Profile Form with Formik and Yup
2:21:55 Calendar using FullCalendar Package
2:42:35 FAQ Page with MUI Accordion
2:49:22 Bar, Line, Pie and Geography Charts with Nivo Charts
3:23:20 Dashboard
4:03:05 Final Demo of Dashboard
4:03:25 Fully Built Complete React Admin Dashboard

9. Stripe (****.5)

*(Not Mentioned)
-*-  Turing
-*-  Trilogy
-*-  Indeed

Water 2 Drink = Weight * 2/3 {(17.6 Cups, 4.16 Liters)}
Pounds/Ounces 141 Ounces

!code -g commands.cfg:10
!git config --global core.editor "code --wait"
!git commit or git -config --global -e

How Props Work in React – A Beginner's Guide   -- {freecodecamp:Linkedin Notifications}
Git Best Practices – How to Write Meaningful Commits, Effective Pull Requests, and Code Reviews

Excess Love:1:18

!Axios library

React Project Tutorial – Build a Portfolio Website w_ Advanced Animations
How to draw SVG animation using GSAP and React
How to animate letters on hover using Animate.css and React
How to add page loading animation using React-Loaders
How to add Pacman animation in React
How to create custom 3D CSS animations
How to implement font icons in React
How to create and implement contact form in React using EmailJS
How to add maps to your website in React using Leafleat.js

How to write a Good Technical Tutorial
- Know Your Audience
- Make an Outline
- State the Problem You Are Solving
- Include Prerequisites Readers Need to Follow the Tutorial
- Use Headings and Small Paragraphs
- Provide Code Snippets

Portfolio Website Tutorial – Frontend Development with HTML, CSS, JavaScript
Create a Portfolio Website Using HTML, CSS, & JavaScript
Introduction
Switch Between Sections
Header Content
About Section
Portfolios Section
Blogs Section
Contact Section
Media Queries

https://stackoverflow.com/questions/72401421/message-npm-warn-config-global-global-local-are-deprecated-use-loc

xy01-ST00-f64a-4c5e-2b66-17f4-sh22-
Otis B. Driftwood -- {XYplorer}
index.js

npm install -g npm-windows-upgrade
npm-windows-upgrade

npm install -g npm@latest {*****}

npm config get prefix -g
npm config set prefix %APPDATA%\npm -g

CSS Preprocessor -- SASS (Must Learn Under CSS)
wsl -l -v
----------------------------------------------------------------------------------------
!Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="HOME/Build" />, container);

!After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="HOME/Build" />);

!Before
unmountComponentAtNode(container);

!After
root.unmount();

!Before
const container = document.getElementById('app');
render(<App tab="HOME/Build" />, container, () => {
  console.log('rendered');
});

!After
function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return <App tab="HOME/Build" />
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);

!Before
import { hydrate } from 'react-dom';
const container = document.getElementById('app');
hydrate(<App tab="HOME/Build" />, container);

!After
import { hydrateRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = hydrateRoot(container, <App tab="HOME/Build" />);
!Unlike with createRoot, you don't need a separate root.render() call here.

npm install react-scripts@latest

npm install --save react@latest
npm install react@latest react-dom@latest
npm install --save react-scripts@latest
npx create-react-app@latest your-app-name

sudo npm install -g npm-check-updates
ncu -u

--------------- ES6 Tutorial - Learn Modern JavaScript in 1 Hour -------------------------
const -> block
let -> block
var -> function
Modern JavaScript Essentials
/*
let/const		Destructuring
Objects			Spread
this			Classes
Arrow Funcs 	Modules
* /

function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

const person = {
  name: 'Mosh',
  walk() {
    console.log(this);
  }
  talk() {}
};

person.talk();
person['name'] = 'John';

person.walk();
const walk = person.walk.bind(person);
walk();

!Arrow functions
const square = function(number) {
  return number * number;
}

const square = (number) => number * number;
console.log(square(5));

const jobs = [
  {id: 1, isActive: true },
  {id: 2, isActive: true },
  {id: 3, isActive: false },
];

const activeJobs = jobs.filter(function(job) {return job.isActive; })
const activeJobs = jobs.filter(job => job.isActive);

const person = {
  talk() {
    var self = this;
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};
person.walk();

!Map
const colors = ['red', 'green', 'blue'];
const items = colors.map(color => `<li>${color}</li>`);

!Object destructuring
const address = {
  street: '',
  city: '',
  country: ''
}

const { street, city, country } = address;
const { street: st } = address;

!Spread Operator
const first = [1, 2, 3]
const second = [4, 5, 6]
!const combined = first.concat(second); old fashion
const combined = [...first, ...second];

!Classes
class Person {
  constructor(name) {
    this.name = name;
  }
  
  walk() {
    console.log("walk");
  }
}
const person = new Person('Mosh');

!Inheritance
class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("Teach");
  }
}
const teacher = new Teacher('Mosh', 'MSc');

!Modules
Default -> import ... from '';
Named -> import {}... from '';
export className;
export default className;
import { Person } from './person';
import Teacher, { promote } from "./teacher"
import React, { Component } from "react"

!----------------- All The JavaScript You To Need To Know For React -----------------------
!--- Working with functions in General
function DoSomething() {}
const DoSomething = () => {}
export const DoSomething = () => {}
<button
onClick={() => {
		console.log("Hello World!");
		}}
></button>;

let name = age > 10 ? "Pedro" : "Jack";       // Tenary operator
const Component = () => {
  return age > 10 ? <div> Pedro </div> : <div> Jack </div>
};

!Objects
const person = {
  name: "Pedro",
  age: 20,
  isMarried: false,
};

const name = person.name;
const age = person.age;
const isMarried = person.isMarried;

!destructuring
const { name, age, isMarried } = person;

const person2 = {...person, name: "Jack"}; // keep everything the same as person except name

!Arrays
!.map() .filter() .reduce() functions
let names = ["Pedro", "Jessica", "Carol"];
names.map((name) => {
  return name + "1";
});

names.map((name) => {
  return <h1> {name} <h1/>;
});

names.filter((name) => {
  return name !== "Pedro"
});

!Async + Await + Fetch

!-------------- ReactJS Course on PedroTech YouTube Channel -------------------------------
REACT STATES
CRUD IN REACT
REACT LIFECYCLE + USE EFFECT
WORKING WITH AN API
FETCHING DATA + REACT QUERY
REACT HOOKS COURSE
STATE MANAGEMENT
ROUTING IN REACT
REACT FORMS WITH FORMIK + YUP
TYPESCRIPT IN REACT
REACT BEST PRACTICES
REDUX
OPTIMISATION TECHNIQUES
FULL STACK PROJECT
TESTING IN REACT


!------------------------- ReactJS Spring Boot CRUD Full Stack App -------------------- * /

server.port=8888
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mariadb://localhost:3306/fullstack
spring.datasource.username=root
spring.datasource.password=Asterisk@2021
spring.datasource.driver-class-name=org.mariadb.jdbc.Driver
*/

//! --------------- GET STARTED TO REACT --------------------------------
//! --------------- https://react.dev/learn -----------------------------
// https://stackblitz.com/edit/react-wpp4yr?file=src%2FApp.js
// https://codesandbox.io/s/new?file=/src/App.js
// https://codepen.io/pen?editors=1000
// https://transform.tools/html-to-jsx
// Next.js
// npx create-next-app
// Put export default before the entity to export:
// There may be only one export default per file.
// …And then import it without curly braces:
// import {default as User, sayHi} from './user.js';

/*
!Thinking in React
React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React.

Named exports force us to use exactly the right name to import:
import {User} from './user.js';
…While for a default export, we always choose the name when importing:
import User from './user.js'; // works
import MyUser from './user.js'; // works too
*/

// could be import Anything... and it'll still work
// import {MyUser} won't work, the name must be {User}
// ------------------------------------------------------

/*
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

export default function App() {
  return <Greeting name="Herbert" />
}
-----------------------------------------------------------------------
import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
----------------------------------------------------------------------
/* interface Props {
  children?: React.ReactNode;
}

class SomeClassComponents React.Component<Props> {
  render() {
    return  <div>{this.props.children}</div>
  }
}
const SomeFunctionComponent: React.FunctionComponent<Props> = props => <div>{props.children}</div> */

// --------------------------------------------------------------------------------------------
/* App.js */
/*
function MyButton() {
  return <button>I'm a button</button>;
}

export default function MyApp() {
  return (
    <div>
    <h1>Welcome to my app</h1>
      <MyButton />
      </div>
  );
}
--------------------------------------------------------------------------------------------
function AboutPage() {
  return (
    <>
    <h1>About</h1>
    <p>
    Hello there.
        <br />
        How do you do?
      </p>
      </>
  );
}
--------------------------------------------------------------------------------------------
<img className="avatar" />;
/* In your CSS */
// .avatar {
//   border-radius: 50%;
// }
// you'll add a <link> tag to your HTML
// ------------------------------ Displaying Data ------------------------------------------
// return (
//   <h1>
//     {user.name}
//   </h1>
// );
// return (
//   <img className="avatar" src={userInfo.imageUrl} />
// );

/*
  ! App.js
  const user = {
    name: 'Heady Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 900,
  };

  export default function Profile() {
    return (
      <>
      <h1>{user.name}</h1>
      <img className="avatar"
      src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
--------------------------------------------------------------------------------------------
{/* <div>
  {isLoggedIn ? (
    <AdminPanel />
    ) : (
      <LoginForm />
      )}
      </div> * /
      !When you don’t need the else branch, you can also use a shorter logical && syntax:
<div>
{isLoggedIn && <AdminPanel /> }
</div>
--------------------------------------------------------------------------------------------
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: false, id: 3},
];

export default function ShoopingList() {
  const listItems = products.map(product =>
    <li
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
    >
      {product.title}
      </li>
  );
  
  return (
    <ul>{listItems}</ul>
    );
  }
  --------------------------------------------------------------------------------------------
Updating the screen
import { useState } from 'react';
function MyButton() {
  const [count, setCount] = useState(0);
}
!You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount). You can give them any names, but the convention is to write [something, setSomething].
! App.js
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
    <h1>Counters that update separately</h1>
    <MyButton />
      <MyButton />
      </div>
      );
    }

function MyButton() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
    Clicked {count} times
    </button>
    );
  }
  ------------------------------------------------------------------------------------------
  !To implement a UI in React, you will usually follow the same five steps.
!Step 1: Break the UI into a component hierarchy
!Step 2: Build a static version in React
!App.js
function ProductCategoryRow({ category }) {
  return (
    <tr>
    <th colSpan="2">
        {category}
      </th>
    </tr>
    );
  }

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
  <span style={{ color: 'red' }}>
      {product.name}
      </span>;

      return (
        <tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>
    );
  }

  function ProductTable({ products }) {
    const rows = [];
    let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
        category={product.category}
        key={product.category} />
        );
      }
      rows.push(
        <ProductRow
        product={product}
        key={product.name} />
        );
        lastCategory = product.category;
  });
  
  return (
    <table>
      <thead>
        <tr>
        <th>Name</th>
        <th>Price</th>
          </tr>
          </thead>
          <tbody>{rows}</tbody>
          </table>
  );
}

function SearchBar() {
  return (
    <form>
    <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
      </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
    <SearchBar />
      <ProductTable products={products} />
      </div>
      );
    }

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
!Step 3: Find the minimal but complete representation of UI state
DRY (Don’t Repeat Yourself).
!Step 4: Identify where your state should live
import { useState } from 'react';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  
  return (
    <div>
    <SearchBar
    filterText={filterText}
        inStockOnly={inStockOnly} />
        <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
    );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
    <th colSpan="2">
    {category}
      </th>
    </tr>
    );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
      </span>;

      return (
    <tr>
    <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;
  
  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
      ) {
        return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
      product={product}
        key={product.name} />
        );
        lastCategory = product.category;
      });
      
      return (
        <table>
        <thead>
      <tr>
      <th>Name</th>
      <th>Price</th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
    );
}

function SearchBar({ filterText, inStockOnly }) {
  return (
    <form>
    <input
    type="text"
    value={filterText}
    placeholder="Search..."/>
    <label>
    <input
    type="checkbox"
    checked={inStockOnly} />
        {' '}
        Only show products in stock
      </label>
      </form>
      );
    }
    
    const PRODUCTS = [
      {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
      {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
      {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
      {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
      {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
      {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
    ];
    
    export default function App() {
      return <FilterableProductTable products={PRODUCTS} />;
}
!Step 5: Add inverse data flow
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  
  return (
    <div>
    <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
        </div>
        );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
    <th colSpan="2">
    {category}
    </th>
    </tr>
    );
  }
  
  function ProductRow({ product }) {
    const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
      </span>;
    
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
      </tr>
      );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;
  
  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
        ) === -1
        ) {
          return;
        }
        if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
        category={product.category}
          key={product.category} />
          );
    }
    rows.push(
      <ProductRow
      product={product}
      key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      </table>
      );
    }
    
    function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
    <input
        type="text"
        value={filterText} placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
      <input
      type="checkbox"
      checked={inStockOnly}
      onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
        </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
*/

//!-----------------------------------------------------------------------------------------
//! Site Relaibility Engineer --> Docker, Kubernetes --> truecaller
/* 
!J:\Courses\[GigaCourse.Com] Udemy - React - The Complete Guide (incl Hooks, React Router, Redux)

Single-Page-Applications (SPAs)

!Basics & Foundation (Introducing Key Features)
- Components & Building UIs
- Working with Events & Data: "props" and "state"
- Styling React Apps & Components
- Introduction into "React Hooks"

!Advanced Concepts (Building for Production)
- Side Effects, "Refs" & More React Hooks
- React's Context API & Redux
- Forms, Http Requests & "Custom Hooks"
- Routing, Deployment, NextJS & More

!Summaries & Refreshers (Optimizing your Time)
- JavaScript Refresher
- ReactJS Summary

!https://jsbin.com  --> {Online JavaScriot Reprl}
class Person {
  constructor() {
    this.name = 'Max';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
!------------------------------------------------------------------------------------------
class Human {
  constructor() {
    this.gender = 'male';
  }
  
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  super();
  constructor() {
    this.name = 'Max';
    this.gender = 'Female';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printName();
person.printGender();

!---------------------------------------- ES7 --------------------------------------------
class Human {
  gender = 'male';
  
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  name = 'Max';
  gender = 'Female';

  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printName();
person.printGender();


!------------------------ Spread & Rest Operator  ----------------------------------------
- Spread
const newArray = [...oldArray, 1, 2]
const newObject = {...oldObject, newProp:5}
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
const person = {
  name: 'Max'
};

const newPerson = {
  ...person,
  age: 28
}

- Rest
function sortArgs(..args) {
  return args.sort()
}
conster filterArray = (...args) => {
  return args.filter(el => el === 1);
}

const.log(filterArray(1, 2, 3));

X = P [ ( 1 + i ) n - 1 ]
where P is the principal, i is the nominal interest expressed as a decimal, and n is the number of periods the interest will be compounded.

P = C (1 + r/n)nt
where ‘C’ is the initial deposit, ‘r’ is the interest rate, ‘n’ is how frequently interest is paid, ‘t’ is how many years the money is invested and ‘P’ is the final value of your savings

Principal --> P
Annual Rate --> R
Compound (n) --> Monthly
Time (t in years)

Using the formula A = P(1 + r/n)^nt
Calculate Total P + I(A)

public class JavaExample {

    public void calculate(int p, int t, double r, int n) {
        double amount = p * Math.pow(1 + (r / n), n * t);
        double cinterest = amount - p;
        System.out.println("Compound Interest after " + t + " years: "+cinterest);
        System.out.println("Amount after " + t + " years: "+amount);
    }
    public static void main(String args[]) {
    	JavaExample obj = new JavaExample();
    	obj.calculate(2000, 5, .08, 12);
    }
}

Job Responsibilities:

Take charge of improving the performance and containment process
Autonomously implement given ideas and guidelines
Write a reliable, deployable, and no-code product
Collaborate closely with cross-functional teams, developers, and team leads

Job Requirements:

Bachelor’s/Master’s degree in Engineering, Computer Science (or equivalent experience)
At least 3+ years of relevant experience as a software developer
Extensive experience working with API Integration and React.js
Prolific knowledge and experience with Cloud databases and Docker containers
Prior experience working with multi-factor authentication and metrics
Demonstrable experience with Data privacy and Anonymization
Nice to have some experience with security expertise
Fluent in spoken and written English communication

Job Responsibilities:

Develop new features while addressing issues
Deliver within six months of joining at least one new feature or significant bug repair per week
Raise questions and refute presumptions
Before you are expected to begin coding, make sure there has been thorough and explicit documentation and discussion
Provide a lot of comments in your code

Job Requirements:

Bachelor’s/Master’s degree in Engineering, Computer Science (or equivalent experience)
At least 6+ years of relevant experience as a software engineer
6+ years of experience working with Node.js
Prolific experience with AWS and AWS Lambda
Prior knowledge of project scoping and problem tracking utilizing Monday.com
Extensive experience with the GitHub code repository
In-depth knowledge of the collaborative tools Google Docs, Slack, and Zoom
Demonstrable experience applying a consistent naming standard and writing clean code
Nice to have some knowledge of DynamoDB
Excellent spoken and written English communication skills

Job Responsibilities:

Management should be consulted regarding the operational needs of software solutions
Engage in knowledge-sharing on the possibilities, dangers, and operational effects of information systems
Encourage young software developers to obtain expertise, report to management, and take on DevOps duties
Control the solution's installation and configuration
Along with developers, interpret test stage results and work on software requirements
Take charge of full-script and code upgrades, as well as fixing implementation issues with the product
Supervise the carrying out of diagnostic tests and regular maintenance operations
Install and configure software, gather test-stage data, and perform debugging
Process documentation and performance metrics observation
Follow industry standards for network management and cybersecurity

Job Requirements:

Bachelor’s/Master’s degree in Engineering, Computer Science, IT, or Information Systems (or equivalent experience)
At least 3+ years of relevant experience as a DevOps Engineer
Ability to ensure smooth software deployment by writing script updates and running diagnostics
Proficient experience in documenting processes and monitoring performance metrics
Exceptional interpersonal and communication skills
Strong Expertise with IAC technologies like Terraform and Pulumi
Advanced knowledge of programming languages like Python and Java, and writing code and scripts
Experience with Kubernetes cluster management and application deployment
Strong expertise with software development lifecycle tools like Jenkins, GitHub Actions, ArgoCD, and Atlantis
Prolific experience working with Monitoring Solutions
Demonstrable Cloud provider experience with technologies like AWS, Azure, and GCP
Fluent in written and spoken English communication
*/
