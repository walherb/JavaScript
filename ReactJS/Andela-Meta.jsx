/* 
const ReactCo = [Facebook, Netflix, Walmart, Airbnb, Salesforce];
!const response = await axios.get("https://jsonplaceholder.typicode.com/posts/");

https://expo.io
Xcode -> Mac
Android Studio

npm install -g expo-cli
expo w
expo login --help
expo logout --help
expo init
expo client:install:android --help
expo publish --help
expo build:iso --help
expo build:web --help

What is a Redux store? -> A single state tree in a Redux application
What is the purpose of Redux actions? -> To describe changes to the Redux store
48. Why is useLayoutEffect used?
!https://www.interviewbit.com/react-mcq/

!Next.js 13 Fubdamentals
Developer Decisions 
- Routing 
- Data fetching 
- Server-side rendering 
- Search Engine Optimization
- Image Optimization
- Bundling 
- Code Splitting 
- Deployment 

meta-learningprogram@andela.com
support@pluralsight.com

Compile JSX 
Transpile JS 
Liniting 
Generate index.html
Reload on save 
One command!
Node 
Webpack 
Babel 
ESLint 
npm scripts
'webpack serve --config webpack.config.dev.js --port 3000'

Build a Quiz Component with React 
- Setup
- Creating a Quiz Component 
- Creating a QuizQuestion Component 
- Creating a QuizQuestionButton Component 
- Creating a QuizEnd Component 
- Displaying Quiz Questions and Handling Events 
- Displaying An Error Message Based on State 
- Resetting the Quiz

import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props){
    super(props)
    this.state = {
      quiz_position: 1
    }
  }
  render() {
    return (
      <div>
        <div className='QuizQuestion'>{quizData.map((item) => { return {item.}})}</div>
      </div>
    )
  }
}

export default Quiz


{
  "quiz_questions": [
    {
      "id": 1,
      "instruction_text": "How many continents are there on Planet Earth?",
      "answer_options": ["5", "6", "7", "8"],
      "answer": "7"
    },
    {
      "id": 2,
      "instruction_text": "What's your favorite number?",
      "answer_options": ["1", "2", "3", "4"],
      "answer": "4"
    }
  ]
}


import React, { Component } from 'react'
import './App.css'
import Quiz from './Quiz'

class App extends Component {
  render() {
    return (
      <Quiz />
    )
  }
}

export default App


{
  "name": "build-a-quiz-component-with-react",
  "version": "0.1.1",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.10",
    "@testing-library/react": "^11.2.6",
    "@testing-library/user-event": "^12.8.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "web-vitals": "^1.1.1"
  },
  "devDependencies": {
    "@wojtekmaj/enzyme-adapter-react-17": "^0.6.1",
    "babylon": "^6.18.0",
    "chai": "^4.3.4",
    "enzyme": "^3.11.0",
    "sinon": "^10.0.1"
  }
}

*/

/* 
one-way data binding
Single Page App (SPA)
F(G(X)) -- Functional programming is about functional composition
npx create-next-app@latest myapp && cd myapp && npm run dev
!A Library is defined as a group of related functions or classes that perform unique operations.
!A framework is a collection of programming tools with a specific goal in mind.
!NextJS Framework -> Node, Webpack, SWC, PostCSS, JEST
!Singe Page App(SPA): Gmail | Yahoo | Hotmail
pages/index.js 
export default function Home() {
    return (
        <div>
            Hello From Pluralsight
        </div>
    )
}
HTML in JS
Why React?  
1.Flexibility 
2.Developer Experience 
3.Corporate Investment 
4.Community Support
5.Performance 
6.Testability
React Tradeoffs
Framework vs Library 
Concise vs Explicit 
Template-centric vs JavaScript-centric
Separate template vs Single-File component
Standard vs Non-Standard
Community vs Corporate Backing 
PD3-QUNLMOB
main.chunk.js => application code 
vendors-main.chunk.js => library code 
bundle.js => module logic 
Callback and Ref hooks 
Custom hooks 
Context 
Type checking 
Ejecting 
Unit testing 
PWA -> Progressive Web Application

!Why Multiple Bundles 
- Application code changes more frequently
- Leverage browser cache
- In production build hash gets added
- Multiple chunks with app code possible

Traditional UI Tests                    | React 
Hassle to set up                          Little to no config required 
Requires browser                          Run in-memory via Node
Slow                                      Fast 
Brittle integration tests                 Reliable, deterministic unit tests
Time-consuming to write, maintain         Write quickly, update easily

!Why Not Web Components?
Spotty browser support = polyfills req'd
Doesn't enable anything new
JS libraries keep innovating

!Why not React?
- JSX differs from HTML 
- Build Step Required 
- Potential version conflicts 
- Old features in searches 
- Decision fatigue

Transpilers -> {Babel, TypeScript}

!Avoid Version Conflicts
- Standardize on a version 
- Upgrade React when upgrading libraries 
- Upgrade as a team  

!Decision Fatigue 
- Dev environment : {cra, vite, next.js}
- Classes of functions {functions}
- Types : {PropTypes, TypeScript, Flow}
- State : {Plain React, Redux}
- Styling : {Plain CSS/Sass/Less, CSS-in-JS, CSS Modules}

!Why Function Components 
- Complexities around the use of classes
- Functions in combination with hooks enable straitforward components creating structured apps

https://peterkellner.net

!---------------------- Final Thoughts ----------------------
- React is fast to learn - easy to use 
- React is unopinionated
- React is declarative 
- Easy for binding data to your apps
- Easy to build re-usable components 
- It's just JavaScript  

-------------------------- Andela-Meta Curriculum ------------------------------------
--------------------- Week 1 -----------------------
---------- What Is React ------------
- Introduction to React 
- React Architecture Explained 
- How React Works with the Browser

---------- React: The Big Picture ----------
- Why React?
- Tradeoffs
- Why Not React?

---------- A Practical Start with React 17 --------
- Should You React?
- Getting Ready 
- Application Structure 
- Components 
- AUgmenting Features and Tooling


--------------------- Week 2 -----------------------
---------- Using React 17 Hooks -------------- 
- Start Using React Hooks with useState, useEffect, and useRef
- Using More Hooks: useContext, useReducer, useCallback, and useMemo
- Migrating Your Existing Apps to React Hooks 
- Learn How to Combine Existing React Hooks into New Combined Hooks 
- Using useContext and useReducer to Make a Redux-like Global State

---------- Test-driven Development Using React 16 ------------
- Introducing TDD with React 
- Discovering the Need for TDD 
- Discovering the Need for React 
- Refactoring with React 
- Testing React Components 

---------- Building Server-side Rendered React Apps for Beginners ----------
- Fundamentals of Building with React and Server-side Rendering 
- REST Data in Server-side Rendering and getInitialProps 
- Extending Your Server-side Rendered App to the Real World 
- Deploying Your App to a Node Server and Production
- Ensuring Your Server-side App Performs 

---------- React 17: Getting Started ------------
- The Basics 
- Modern JavaScript Crash Course 
- The Github Cards App 
- The Star Math Game 
- Setting up a Development Environment

------------------------- Week 3 ----------------------
--------- Designing React 17 Components ----------
- Designing Better Components with React -----------
- Managing React State in a Component Hierarchy
- Asynchronously Updating React State Using Custom React Hooks 
- Using React Context and the useContext React Hook for Component Data Sharing 
- Use React Context to Share a Speaker Data and CRUD Functions 
- Master Performance Monitoring, Error Reporting, and Debugging of Components 
- Use Higher Order Components and Render Props with Course Takeaways 

---------- Managing React State --------------
- Deciding How and When to Declare State
- Managing Local and Remote State
- Implementing Routing 
- Managing Shared, Derived, Immutable State
- Implementing Form Validation  
- Managing State via Refs
- Managing Complex State with useReducer
- Sharing State and Functions via Context
- Managing State in Class Components 
- Managing State via Third Party Libraries


-------------- Redux Fundamentals ------------------
- React Crash Course
- The Problem with State
- Redux Basics
- Asynchronous Actions
- The State Tree
- Redux Internals
- Redux Across Frameworks

---------------------------- Week 4 --------------------------
-------------- Styling React Components --------------
- What React Has Done for Styling 
-- Inline styling 
   * Encapsulation
   * Code sharing 
   * Isolated 
   * Explicit dependencies 
   * No Library
   -- Cons 
   * Cascade, iverrides
   * Media queries 
   * Pseudo selectors 
   * Keyframe animations
   
   - JavaScript-centric 
   - Simple 
   - Co-locate styles 
   - No 3rd-party library
  
-- CSS-in-JS libraries 
   - styled components 
   import styled, { keyframes } from 'styled-components'
   
   const jitter = keyframes`
		0% { transition: scaleY(0.9); }
		100% { transition: scaleY(1); }
   `
   
   const Button = styled.button`
		color: white;
		background: ${props => props.secondary ? 'gray' : 'blue'};
		padding: 0.5rem 1rem;
		border-radius: 2px;	
		
		@media (min-width: 800px) {
			padding: 1rem 2rem;
		}
		
		&:hover {
			outline: 2px solid white;
		{
			
		animation: ${jitter} 350s ease-out infinite;	
   `	
   
   function MyComponent() {
	   return (
			<Button>Already Styled</Button>	
	   )
   }
   
   * Media queries 
   * Pseudo selectors 
   * Keyframe animations 
   * Co-located styles and code

   - Choosing a library 
   - Cascade, overrides 
   
   - Co-locate styles 
   - Power of CSS 
   
   
-- CSS stylesheets 
	* No new syntax 
	* All of CSS 
	* Community experience 
	
	BEM --> Block Element Modifier 
	
-- CSS modules 
	* Power of CSS 
	* Isolated 
	* Explicit dependencies 
	
- Static styling 
- Dynamic styling 
- STyle overrides 

* Why Style 
- Usability 
- User satisfaction 
- Attractive 
- Brand 

- A Catalogue of Styling Techniques 
- Comparing Styling with Examples 
https://jaketrent.com/stylingreact

- Potential Project Configurations for CSS in React 


----------------- Server Rendering React 16 Components ------------------- {VersionCheck:^16.12.2} {Daniel Stern}
- Understanding Server Redndering React Components 
- Scaffolding an Environment for Server Rendering 
  *** Creating Server-Render Friendly Components 
      - State comes from external props only 
	  - No async methods or AJAX on init 
	  - Methods also only come from external props 
	  - Pure function which outputs HTML 
- Server Rendering Basic React Components 
- Rehydrating Interactive React Components

----------------- Testing React 16 Components ---------------------
- Getting Started 
  npx -p @storybook/cli sb init 
- Testing Component Rendering 
const r = render(<Message content='Some stuff' isImportant={true} />);
r.getByLabelText('First Name')
r.getByText('2017-5-13');
r.getByText(/\d\d\d\d-\d-\d\d/);
r.getByTitle('introduction');
r.getByTestId('target');

- Testing Component Events
- Testing Components with State and Effects 
- Testing Components with State Management 

----------------- Implementing Forms in React 17 ----------------------
Controlled Components: In this approach, form data is handled by React through the use of hooks such as the useState hook.
Uncontrolled Components: Form data is handled by the Document Object Model (DOM) rather than by React. The DOM maintains the state of form data and updates it based on user input.


<script>
let element = document.createElement("h4")
element.className = "bg-primary text-white text-center p-2 m-1";
element.textContent = "DOM API HTML Element";
document.getElementById("domParent").appendChild(element);
</script>

Exercise 
Insert form to add new questions/answers 
Sort questions/answers by popularity
Limit upvotes/downvotes to one per user 

https://www.pluralsight.com/projects/build-a-quiz-component-with-react
https://www.pluralsight.com/courses/react-redux-react-router-es6
https://www.pluralsight.com/courses/react-express-full-stack-app-building

https://plrsig.ht/3YITUwo
16.8 : Hooks release 
EcmaScript Module System: commonJS
BABEL: transpiler
Reconciliation | Old Virtual DOM | New Virtual DOM

------------------- React Class ------------------
class App extends React.Component {
    render() 
        {
            return (
                <div>
                    <b>Hello From Pluralsight!</b>
                </div>
            )
        }
}

--------------------- React Function -----------------
function App() {
    return (
        <div>
            <b>Hello From Pluralsight!</b>
        </div>
    )
}
*/

/*  pages/index.js
import App from '..src/App';

export default function Home() {
  return ( 
        <App />
    )
} 
*/

/* 
!index.html 
<html lang='en'>
    <head>
        <script src='index.js'></script>
    </head>
    <body>
        <div id='root'></div>
    </body>
</html>

!index.js
window.load = () => {
    const rootElement = document.getElementById('root');
    // rootElement.innerHTML = 'Hello from my first SPA App';
    const button = document.createElement('button');
    button.innerHTML = 'Click me for current date';
    button.addEventListener('click', () => {
        button.innerHTML = new Date().toString;
    });
    rootElement.appendChild(button);
}

npx create-next-app@latest myapp

!NextJS
- Never had to create a base HTML file 
- Don't have to create a virtual DOM directly 
- Don't have to render DOM to browser

useEffect(() => {
    const fetchHouses = async () => {
        const resp = await fetch('/houses.json')
        const houses = await resp.json()
        setAllHouses(houses)
    };
    fetchHouses();
}, [])

Hooks: {useState, useEffect, useMemo, useCallback, useRef}
Router: {useHistory}

npm install react-router-dom 
npm install prop-types

House.propTypes = {
    house: PropTypes.object.isRequired
}

!Prop Types
- Makes debugging easier
- apply throughout the application
- Checks only done when application runs in developer mode
- Consider TypeScript for checking while writing code

!useState is used to manage state within a functional component. It returns a pair of values: the current state and a function to update that state.
!function Counter(){
    const [count, setCounter] = useState(0)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCounter(count + 1)}>Increment</button>
        </div>
    )
}


!useEffect is used to handle side effects, such as data fetching, DOM manipulation, or subscriptions, in a functional component. It runs after the component renders.
!function DataFetching() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(resp => resp.json())
            .then(data => setData(data))
    }, []);

    return (
        <ul>
            {data.map((item) => {
                <li key={item.id}>{item.name}</li>
            })}
        </ul>
    )
}

!useContext allows you to access the context of a parent component without deeply nesting props. It's useful for sharing data that is considered "global" within a specific part of the component tree.
const ThemeContext = React.createContext();

function ThemeProvider(props) {
  return (
    <ThemeContext.Provider value="dark">
      {props.children}
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return <div>Current theme: {theme}</div>;
}

!useReducer:
!useReducer is an alternative to useState that's more suitable for managing complex state logic. It uses a reducer function similar to Redux.
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}


!1. useRef:
!useRef is a hook that allows you to create a mutable reference to a DOM element or a value that persists across renders. Unlike state, changes to useRef do not trigger a re-render. It's often used for accessing DOM elements directly or storing values that shouldn't trigger re-renders.
import React, { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}

!2. useMemo:
!useMemo is a hook that helps optimize performance by memoizing the result of a function so that it's only recomputed if its dependencies change. It's useful when you have expensive computations that you want to avoid repeating unnecessarily.
import React, { useMemo } from 'react';

function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    // Expensive data processing
    return data.map(item => item * 2);
  }, [data]);

  return <div>{processedData.join(', ')}</div>;
}

!3. useCallback:
!useCallback is a hook that memoizes a function, similar to useMemo, but specifically designed for functions. It's useful to prevent unnecessary function re-creation in child components, especially when passed as props.
!Example: Using useCallback to prevent unnecessary re-renders:
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <ChildComponent increment={increment} />
    </div>
  );
}

function ChildComponent({ increment }) {
  return <button onClick={increment}>Increment</button>;
}

In this example, the increment function is memoized using useCallback, ensuring that it doesn't change unless the count dependency changes. This prevents unnecessary re-renders of the ChildComponent.

Summary:

useRef is used to access DOM elements and store mutable values that don't trigger re-renders.
useMemo optimizes performance by memoizing the result of expensive computations.
useCallback memoizes functions to prevent unnecessary re-creation, especially when passed as props to child components.
These hooks are powerful tools that can help you optimize your React applications, improve performance, and manage your components' behavior more effectively.

import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, [url]);

  return data;
}

function PostList() {
  const posts = useFetch('/api/posts');

  if (!posts) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

!import { useState, useEffect } from "react";
function Counter() {
    // Declare state variables
    const [count, setCount] = useState(0);
    const [product, setProduct] = useState("Eggs");
    useEffect(() => {
    	console.log(`${product} will rule the world!`);
    });
    return (
        <div>
        Current {product}'s count: {count}
            <div>
                <button onClick={() => setCount(count + 1)}>Add to cart</button>
                <button onClick={() => setCount(count - 1)}>Remove from cart</button>
                Change Product:{" "}
                <input type="text" onChange={(e) => setProduct(e.target.value)} />
            </div>
        </div>
    );
}

!bundlers
Grunt (2012)
Gulp (2013)
Webpack (2014+)
Rollup (mainly libraries)
esbuild (2020+)

!These are also called waterfall requests, because one request has to wait for another request to finish.

!tree shaking comes into play which eliminates dead code (read: unused code) so that it is not packaged in the final bundle. 

!For a more sophisticated single-page application, techniques like code splitting (also called lazy loading in React + React Router) are used to serve only a fraction of the application that is needed for the current page (e.g. mywebsite.com/home)

!Backend-As-A-Service : {BaaS} {Firebase: Google, Supabase}

!Server-Side Rendering 2.0 (SSR) : {Next.js}
!Static Site Generation (SSG) : {Gatsby.js}

!npm create vite@latest hacker-stories -- --template react

import { Link } from 'react-router-dom';
<Link to="/home">Home</Link>

<Routes>
    <Route path="home" element={<Home />} />
    <Route path="users" element={<Users />} />
</Routes>

const Layout = ({ children }) => {
  return <main style={{ padding: '1rem 0' }}>{children}</main>;
};

<Routes>
    <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
    </Route>
</Routes>

import { Routes, Route, Outlet, Link } from 'react-router-dom';
const Layout = () => {
  return (
    <main style={{ padding: '1rem 0' }}>
      <Outlet />
    </main>
  );
};

Functions are first-class citizens in JavaScript
bind(), apply(), and call()
scopes and closures
this
Object Methods
Array Methods
Prototypical Inheritance -> ES6 Class
Callbacks and Promises
Event Loop
Event Bubbling
Regular Expressions
Error Handling
JavaScript ES6 and beyond
Hoisting, Memoization
Declarative vs imperative programming
Functional vs object-oriented programming

https://www.robinwieruch.de/react-hooks/
https://www.robinwieruch.de/react-higher-order-components/
https://www.robinwieruch.de/react-render-props/
https://www.robinwieruch.de/react-context/
https://www.freecodecamp.org/

https://reacttraining.com/react-router/
https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
https://www.robinwieruch.de/the-road-to-graphql-book/
https://www.robinwieruch.de/react-redux-tutorial/


Entering React after learning JavaScript
React and JavaScript Classes
Arrow Functions in React
Functions as Components in React
React Class Component Syntax
Template Literals in React
Map, Reduce and Filter in React
var, let, and const in React
Ternary Operator in React
Import and Export Statements in React
Libraries in React
Async/Await in React
Higher-Order Functions in React
Shorthand Object Assignment
Destructuring in React
Spread Operator in React
There is more JavaScript than React

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState(state => ({ counter: state.counter + 1 }));
  }

  onDecrement() {
    this.setState(state => ({ counter: state.counter - 1 }));
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>

        <button
          onClick={this.onIncrement}
          type="button"
        >
          Increment
        </button>
        <button
          onClick={this.onDecrement}
          type="button"
        >
          Decrement
        </button>
      </div>
    );
  }
}

!shorthand
class Counter extends Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  }

  onDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>

        <button
          onClick={this.onIncrement}
          type="button"
        >
          Increment
        </button>
        <button
          onClick={this.onDecrement}
          type="button"
        >
          Decrement
        </button>
      </div>
    );
  }
}

!import React, { Component } from 'react';

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch('https://api.mydomain.com')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    ...
  }
}

export default App;


!import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    axios.get('https://api.mydomain.com')
      .then(response => this.setState({ data: response.data }));
  }

  render() {
    ...
  }
}

export default App;


!import React from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = () => {
      axios.get('https://api.mydomain.com')
        .then(response => setData(response.data));
    };

    fetchData();
  }, []);

  return (
    ...
  );
};

export default App;


!import React from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.mydomain.com');

      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    ...
  );
};

export default App;

!HIGHER-ORDER FUNCTIONS IN REACT
import React from 'react';

const App = () => {
  const users = [{ name: 'Robin' }, { name: 'Markus' }];
  const [query, setQuery] = React.useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <ul>
        {users
          .filter(user => user.name.includes(query))
          .map(user => (
            <li>{user.name}</li>
          ))}
      </ul>

      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default App;



import React from 'react';

function doFilter(user) {
  return user.name.includes(query);
}

const App = () => {
  const users = [{ name: 'Robin' }, { name: 'Markus' }];
  const [query, setQuery] = React.useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <ul>
        {users.filter(doFilter).map(user => (
          <li>{user.name}</li>
        ))}
      </ul>

      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default App;



import React from 'react';

function doFilter(query) {
  return function(user) {
    return user.name.includes(query);
  };
}

const App = () => {
  const users = [{ name: 'Robin' }, { name: 'Markus' }];
  const [query, setQuery] = React.useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <ul>
        {users.filter(doFilter(query)).map(user => (
          <li>{user.name}</li>
        ))}
      </ul>

      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default App;


const doFilter = query => user =>
  user.name.includes(query);

https://www.robinwieruch.de/react-higher-order-components/



!HIGHER ORDER COMPONENTS 
function withLoading(Component) {
  return class WithLoading extends React.Component {
    render() {
      const { isLoading, ...rest } = this.props;

      if (isLoading) {
        return <p>Loading</p>;
      }

      return <Component { ...rest } />;
    }
  }
}




const withLoading = Component => ({ isLoading, ...rest }) =>
  isLoading
    ? <p>Loading</p>
    : <Component { ...rest } />

https://jsonplaceholder.typicode.com/

!REACT STATE: USEREDUCER
(state, action) => newState
const App = () => {
  const [todos, dispatch] = React.useReducer(
    todoReducer,
    initialTodos
  );

  const handleChange = todo => {
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleChange(todo)}
            />
            {todo.task}
          </label>
        </li>
      ))}
    </ul>
  );
};


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Hello React ES6 Class Component!</h1>

        <input
          value={this.state.value}
          type="text"
          onChange={this.onChange}
        />

        <p>{this.state.value}</p>
      </div>
    );
  }
}

https://www.robinwieruch.de/react-usestate-hook/
https://www.robinwieruch.de/react-controlled-components/

!When to use useReducer or useState? Generally speaking, React's useReducer hook can be used over React's useState hook, if (A) a state transition becomes more complex, (B) the state object isn't a simple JavaScript primitive anymore, or most importantly, if (C) multiple states are conditionally related to each other. Naturally this happens if a React application grows beyond a small-sized project.

https://www.robinwieruch.de/react-usereducer-hook/
https://www.robinwieruch.de/react-usereducer-vs-usestate/

!When to combine useContext with useReducer or useState?
1) Generally speaking, React's useContext hook should be used with React's useState hook and/or useReducer hook, if it becomes a burden to pass state and state update function down multiple component levels.
2) Strategically speaking, React's useContext hook can be used to move state from being local state to global state. While state would be managed globally at a top-level component, React's useContext hook is used to pass down state and state updater function to all child components interested in it. You will read more about this later.

https://www.robinwieruch.de/react-usecontext-hook/
https://www.robinwieruch.de/react-state-usereducer-usestate-usecontext/

!LOCAL VS GLOBAL STATE
These are the three main strategies for state management in React:

(1) Manage state within a React component.
(2) Manage state within a top-level React component where it gets distributed to all child components.
(3) Manage state outside of React with a third-party state management library.

All three strategies map to the following types of state:
(1) local state
(2) global state, but managed in React
(3) global state, managed by a third-party state management library
In addition, enabling all three strategies map to various features or combinations of these features within or outside of React's capabilities:

(1) useState and useReducer
(2) useState/useReducer with useContext
(3) Redux, MobX and various other state management libraries

https://www.robinwieruch.de/redux-with-react-hooks/

!REACT STATE: REDUX
React => Action => Reducer(s) => Store => React

https://www.robinwieruch.de/redux-javascript/
https://www.robinwieruch.de/redux-vs-usereducer/
https://www.robinwieruch.de/react-redux-tutorial/

!ORIGIN OF STATE
Open/Closed state for Dialog, Dropdown, Popover and DatePicker components.
Selected item in a Dropdown component.
Filter/Sort state of a Table component.
Text in an InputField component.

List of users coming from a remote API.
Currently signed in user coming from a remote API.

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Hello React ES6 Class Component!</h1>

        <input
          value={this.state.value}
          type="text"
          onChange={this.onChange}
        />

        <p>{this.state.value}</p>
      </div>
    );
  }
}


!import * as React from 'react';

const App = () => {
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>

      {isOpen && <div>Content</div>}
    </div>
  );
};

export default App;


!import * as React from 'react';

const App = () => {
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <Button onClick={handleClick}>Toggle</Button>

      {isOpen && <div>Content</div>}
    </div>
  );
};

const Button = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default App;


!import * as React from 'react';

const App = () => {
  const [isOpen, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open</Button>
      <Button onClick={handleClose}>Close</Button>

      {isOpen && <div>Content</div>}
    </div>
  );
};

const Button = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default App;


const Button = ({ type = 'button', onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

const Button = ({ type = 'button', disabled, onClick, children }) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

const Button = ({ type = 'button', onClick, children, ...rest }) => {
  return (
    <button type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

https://www.robinwieruch.de/react-fetching-data/
https://www.robinwieruch.de/react-render-props/
https://www.robinwieruch.de/react-higher-order-components/


!Warning: useEffect function must return a cleanup function or nothing.
!import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;

!https://hn.algolia.com/api

!!!Suspense!!!  -> {Replacing React Hooks 4 fetching Data}

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <ul>
      {products.map(product => (
        <Product {...product} key={product.id} />
      ))}
    </ul>
  );
}


useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`https://swapi.dev/api/people/${props.id}/`);
    const newData = await response.json();
    setData(newData);
  };

  fetchData();
}, [props.id]);


!const useFetch = (url, requestInit = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url, requestInit)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(err => setError(err));
  }, [url, requestInit]);

  return { data, isLoading, error };
}

const ProductList = () => {
  const { isLoading, data, error } = useFetch('https://dummyjson.com/products');
}

const Product = ({ id }) => {
  const { isLoading, data, error } = useFetch(`https://dummyjson.com/products/${id}`);
}

!How to Make a POST Request?
A POST request refers to sending an HTTP POST request to a server or API endpoint from a React component. Here’s an example of how you can make a POST request using Axios in a React component:

import React from 'react';
import axios from 'axios';
class MyComponent extends React.Component {
  handleSubmit = async () => {
    try {
      const response = await axios.post('https://api.example.com/data', { key1: 'value1', key2: 'value2' });
      console.log(response.data);
      // Process the response data or perform other operations
    } catch (error) {
      console.error(error);
      // Handle errors, if any
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
 }
}

!How to Make a PUT Request?
import React from 'react';
import axios from 'axios';
class MyComponent extends React.Component {
  handleUpdate = async () => {
    try {
      const response = await axios.put('https://api.example.com/data/1', { key1: 'new value' });
      console.log(response.data);
      // Process the response data or perform other operations
    } catch (error) {
      console.error(error);
      // Handle errors, if any
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }
}

!How to Make a Delete Request?
In React, a DELETE request refers to an HTTP method used to delete existing data from a server or API endpoint. Here’s an example of how to make a DELETE request using the Axios library in a React component:

import React from 'react';
import axios from 'axios';
class MyComponent extends React.Component {
  handleDelete = async () => {
    try {
      const response = await axios.delete('https://api.example.com/data/1');
      console.log(response.data);
      // Process the response data or perform other operations
    } catch (error) {
      console.error(error);
      // Handle errors, if any
    }
  }
  render() {
    return (
      <div>
       <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

!How to Handle Errors in React with Axios?
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function ExampleComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
  return (
    <div>
      <h1>Data fetched using Axios:</h1>
      <ul>
        {data.map((item) => 
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default ExampleComponent;

!Advantages of Axios in React
!@User-Friendly API: Axios provides an intuitive and straightforward API for making HTTP requests. Its concise syntax makes it accessible to developers of all levels of expertise.
!@Broad Browser Support: Axios is compatible with a wide range of browsers, ensuring consistent performance across different platforms and versions. It handles browser-specific inconsistencies, providing a reliable experience for HTTP requests.
!@Promises-Based Architecture: Axios leverages Promises, enabling you to manage asynchronous operations in a more elegant and readable manner. This simplifies handling responses and errors, resulting in more maintainable code.
!@Automatic Request and Response Transformation: Axios seamlessly handles request and response data transformation. It automatically parses JSON responses, converts request payloads, and sets appropriate headers. This saves you from writing additional code for data manipulation.
!@Robust Error Handling and Interception: Axios offers comprehensive error handling capabilities. It detects HTTP errors automatically, allowing graceful error handling and customizable error messages. Additionally, Axios supports the interception of requests and responses, enabling global modifications.

!https://www.robinwieruch.de/react-hooks-fetch-data/
*/
