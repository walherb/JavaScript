/*
!Web Dev Simplified --> { YouTube: Kyle Cook }
!https://codesandbox.io/s/react-challenge-dev-profile-ng0ghj?files/src/styles.css=&file=/src/index.js:0-558

/* eslint-disable react/prop-types * /
.eslintrc 
"rules": {
  "react/prop-types": "off"
}

eslint-disable-next-line react/prop-types

!Component 
Data 
!- Props: Props is data coming from the outside, and can oly be updated by the parent component 
!- State: State is internal data that can be updated by the component's logic 
Logic 
Appearance

!ONE WAY DATA FLOW... 
- makes applications more predictable and easier to understand 
- makes applications easier to debug, as we have more control over the data
- is more performant 


!Step 1: Break the UI into a component hierarchy
!Step 2: Build a static version in React
!Step 3: Find the minimal but complete representation of UI state 
!Step 4: Identify where your state should live  
!Step 5: Add inverse data flow 

!https://traversymedia.com/blog/vite-crash-course
!Vite Crash Course - Faster Alternative To CRA -- Trasversy Media -- YouTube
npm create vite@latest vite-app
!vite.config.js 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
!.env 
VITE_API_URL=http://localhost:3000
!Header.tsx 
{import.meta.env.VITE_API_URL}
npm i -D sass
*/

/*
A. Controlled Components: every state mutation will have an associated handler function; Uncontrolled Components: store their own states internally

C. Mounting: componentDidMount(); Updating: componentDidUpdate(); Unmounting: componentWillUnmount()

B. Props get passed to the component using naming conventions, like a function parameter; State is managed within the component and holds some information that may change over the lifetime of the component.

B. “Key” prop is a way for React to identify a newly added item in a list and compare during the “diffing” algorithm.

Q1. What is Reconciliation?
D. The process through which React updates the DOM.

35. What is the functionality of a “webpack” command?
Runs react local development server

28) Why is the usage of setState?
Invoke code after the setState operation is done.


?!https://hackr.io/blog/react-interview-questions
!28. What Are Some Best Practices for Structuring a Large-Scale React Application?
I like to use this type of React question to show that I have a well-rounded appreciation of how to work with larger-scale apps. Some of the points I would make include: 
Breaking down the application into smaller, reusable components.
Separating concerns (business logic from presentation logic).
Using a state management library like Redux to manage the application state.
Using code splitting and lazy loading to improve the application's performance.
Testing the application thoroughly using automated tests.
Consistent coding style and naming convention to improve readability and maintainability.
Using TypeScript to add static typing.

/* 
!------------------ Andela-Meta Pluralsight Interview Prep ------------------
!Why use ReactJS?
The key objective of ReactJs is to develop User Interfaces that enhance the speed and performance of applications by using virtual DOM.  

!Features of React.JS
JSX - It is an extension of ReactJS, which is not mandatory to be used but very beneficial if used since it is very easy to use.
Component: ​​Components are similar to pure javascript functions, and they serve to simplify the code by separating the functionality into reusable independent code. Components can be used as functions and as classes. Components also have a state, and props, which simplify lives. The status of each prop is preserved within a class.
Virtual DOM: React generates a virtual DOM, which is an in-memory data-structure cache. Only the final DOM updates have been updated in the browser's DOM.
Javascript Expressions: Curly brackets, for example, can be used to insert JS expressions into JSX files.

!Advantages of ReactJS
ReactJS employs virtual dom, which makes use of an in-memory data-structure cache, and only the most recent modifications are updated in the browser's dom. This speeds up the app.
Using the react component feature, you may design components of your choice. The components are reusable and useful for code maintenance.
Since Reactjs is an open-source javascript library, it is simple to learn.
ReactJS has quickly gained popularity and is supported by Facebook and Instagram. Many well-known companies, including Apple and Netflix, use it.
Since Facebook maintains the library of ReactJS, it is well-managed and up-to-date.
ReactJS may be used to create sophisticated user interfaces for both desktop and mobile apps.

!Disadvantages of ReactJS 
The majority of the code is written in JSX, which means that HTML and CSS are part of the javascript code. This can be perplexing because most other frameworks like to keep HTML separate from the javascript code.
ReactJS has a huge file size.

!What is JSX?
JSX (JavaScript Extension) is a React extension that allows you to write HTML-like JavaScript code. In other words, JSX is a React-specific HTML-like syntax that extends ECMAScript to allow HTML-like syntax to coexist with JavaScript/React code.

!Function component
Function components are one of the primary building blocks of ReactJS. They let you define components that don’t need state or lifecycle methods. Function components can accept props as parameters and return React elements. This allows for easy reuse of code and a more consistent way of structuring applications.

!Taking turns
Taking turns in ReactJS is a common pattern used to coordinate multiple components. By utilizing this pattern, components can communicate with each other in order to render content in a particular order. This can be particularly useful for creating complex interactive interfaces. Additionally, it can help ensure that a component renders properly when it is rendered out of order.

!Declaring a winner
By allowing components to communicate with each other, ReactJS can determine which component should be rendered first and help decide the winner of the interaction. This helps developers build complex interfaces that have complex logic embedded into them and makes the process of declaring a winner much easier.

!Adding time travel
Time travel in ReactJS can be implemented with the use of a game engine, allowing users to rewind and restart the game at any point. This feature can also be used to allow users to review previous moves and refine their strategy, so they can make better decisions in the future. 

!Storing a History of Moves
This is done by using the browser’s history API to store the history of moves and enabling users to go back to the previous move. When a user clicks on the “Back” button, the game state can be changed to the previous move.

!Lifting state, again
State lifting is often a difficult task for developers. It requires careful thought and precise implementation to ensure that the state can be properly lifted from the component and placed in a global store. This process can be simplified by using Redux, a library that allows for easy state management across components.

!Showing past moves
This is done by your browser by using the past history search tab.

!Picking a key
As this document progresses, one key point needs to be identified. This key point will be the focus of the document and will help dictate how the document is structured and the end result. With this in mind, the next step is to identify a key that will be the basis of the document. Once the key is identified, this key should be revisited throughout the document.

!Implementing Time Travel
One of the latest features developers can use is time travel, which adds a unique element to projects. Through this feature, users can traverse through different states of their application as though they were traveling through time.

!Working with forms
Working with forms in React JS is no exception. With React, you can easily create forms that are highly customizable and apply data validation to them. A variety of form components are also available for developers, such as input fields, dropdowns, radio buttons, and checkboxes. With React, developers can also create forms that are user-friendly and have a seamless flow from one form field to the next.

!Working with Events in ReactJS
React JS offers developers a variety of ways to handle events within their applications. Events can be used to trigger action from a user, such as a click on a button. Developers can also use events to update their components and data, as well as provide feedback for users. React components can also register for events and listen for them, and then respond accordingly.

!Working with Inline CSS in ReactJS
Working with inline CSS in ReactJS is a great way to style individual components and elements of an application. React’s inline styling syntax allows developers to specify styles on a per-component basis, which makes for a more efficient and organized workflow. Inline styles can be combined with global stylesheets, providing developers with the ability to add custom styling without needing to write large amounts of code.


!Why React?
Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it requires less coding and offers more functionality, as opposed to JavaScript, where coding often gets complex very quickly.
Improved performance: React uses Virtual DOM, thereby creating web applications faster. Virtual DOM compares the components’ previous states and updates only the items in the Real DOM that were changed, instead of updating all of the components again, as conventional web applications do. 
Reusable components: Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their logic and controls, and they can be reused throughout the application, which in turn dramatically reduces the application’s development time.
Unidirectional data flow: React follows a unidirectional data flow. This means that when designing a React app, developers often nest child components within parent components. Since the data flows in a single direction, it becomes easier to debug errors and know where a problem occurs in an application at the moment in question.
Small learning curve: React is easy to learn, as it mostly combines basic HTML and JavaScript concepts with some beneficial additions. Still, as is the case with other tools and frameworks, you have to spend some time to get a proper understanding of React’s library.
It can be used for the development of both web and mobile apps: We already know that React is used for the development of web applications, but that’s not all it can do. There is a framework called React Native, derived from React itself, that is hugely popular and is used for creating beautiful mobile applications. So, in reality, React can be used for making both web and mobile applications.
Dedicated tools for easy debugging: Facebook has released a Chrome extension that can be used to debug React applications. This makes the process of debugging React web applications faster and easier.

!ReactJS Keys
After answering what is ReactJs, let us know what are keys. 
While dealing with components that are produced periodically in React, keys are essential. Your component will continue to be uniquely identifiable after the modification if the key value is set.  They aid React in determining which elements have changed, been eliminated, or been added.
When making lists of components in React, you must use a special string personality factor "key". React uses keys to indicate which list items have been modified, destroyed, or altered. Or, to put it another way, we may say that keys are utilized to identify the components in lists

!ReactJS Advantages
React.js builds a customized virtual DOM. Because the JavaScript virtual DOM is quicker than the conventional DOM, this will enhance the performance of apps. 
ReactJS makes an amazing UI possible. 
Search - engine friendly ReactJS. 
Modules and valid data make larger apps easier to manage by increasing readability. 
React integrates various architectures. 
React makes the entire scripting environment process simpler. 
It makes advanced maintenance easier and boosts output. 
Guarantees quicker rendering 
The availability of a script for developing mobile apps is the best feature of React.
ReactJS is supported by a large community.

!Advantages and Limitations (Pros and Cons)
!Advantages
Makes use of the JavaScript structure known as virtual DOM. Since JavaScript's virtual DOM is quicker than the conventional DOM, this will boost the speed of programs. 
Can be used with various systems and on both client and server sides is commendable. 
Components and identify trends make larger apps easier to manage by increasing clarity.
!Limitations
Only addresses the app's angle and distance; as a result, additional techniques must be selected if you want a full collection of development tools. 
Employs inline scripting and JSX, which some programmers might find uncomfortable.

!Features of React
JSX is a JavaScript syntactic extension. It's a term used in React to describe how the user interface should seem. You can write HTML structures in the same file as JavaScript code by utilizing JSX.

!Virtual Document Object Model (DOM)
The Virtual DOM is React's lightweight version of the Real DOM. Real DOM manipulation is substantially slower than virtual DOM manipulation. When an object's state changes, Virtual DOM updates only that object in the real DOM rather than all of them.

How do Virtual DOM and React DOM interact with each other?
When the state of an object changes in a React application, VDOM gets updated. It then compares its previous state and then updates only those objects in the real DOM instead of updating all of the objects. This makes things move fast, especially when compared to other front-end technologies that have to update each object even if only a single object changes in the web application.

!Architecture 
In a Model View Controller(MVC) architecture, React is the 'View' responsible for how the app looks and feels. 
MVC is an architectural pattern that splits the application layer into Model, View, and Controller. The model relates to all data-related logic; the view is used for the UI logic of the application, and the controller is an interface between the Model and View.

!Extensions
React goes beyond just being a UI framework; it contains many extensions that cover the entire application architecture. It helps the building of mobile apps and provides server-side rendering. Flux and Redux, among other things, can extend React.

!Data Binding
Since React employs one-way data binding, all activities stay modular and quick. Moreover, the unidirectional data flow means that it's common to nest child components within parent components when developing a React project.

!Debugging
Since a broad developer community exists, React applications are straightforward and easy to test. Facebook provides a browser extension that simplifies and expedites React debugging. 

!Components in React
Components are the building blocks that comprise a React application representing a part of the user interface.

!Here are some of the features of Components - 
Re-usability - A component used in one area of the application can be reused in another area. This helps speed up the development process.
Nested Components - A component can contain several other components.
Render method - In its minimal form, a component must define a render method that specifies how the component renders to the DOM.
Passing properties - A component can also receive props. These are properties passed by its parent to specify values.

!Props in React
Props, short for Properties in React Props, short for properties, allow the user to pass arguments or data to components. These props help make the components more dynamic. Props in a component are read-only and cannot be changed.

!State in React 
A state is an object that stores properties values for those attributed to a component that could change over some time. 

A state can be changed as a result of a user's action or changes in the network.
React re-renders the component to the browser whenever the state of an object changes.
The function Object() { [native code] } is where the state object is created.
Multiple properties can be stored in the state object.
this.
setState() is used to alter the state object's value.
The setState() function merges the new and prior states shallowly.

!setState() Method 
A state can be updated to event handlers, server responses, or prop changes. This is done using setState method.
this.setState({ quantity: value }

)
setState() method enqueues all the updates made to the component state and instructs React to re-render the component and its children with the updated state. 
Consider the scenario where the subscribe button is clicked. On clicking the button, the display message must change. To implement this, you make use of the setState() method. 


Props vs. State in React 
1.Props are used to send data and event handlers to a component's children.
2.The data of the components that must be presented to it store the view in the state.

1.Props are immutable — they can't be modified after they've been set.
2.The data is stored in the state, which might change over time.

1.Both functional and class components can benefit from the use of props.
2.Only class components can use the state.

1.The parent component sets props for the children components.
2.Event handlers are typically responsible for updating the state.

!Yes ! A programme that provides pre-built or fully prepared Associated traits to accelerate up the design process is called a React UI component framework.

!Using Props in React
We follow three steps to implement props in a React application fully. These are:
Define an attribute and its value
Pass it to child component or components by using props
Render the props data

!State vs. Props
Use Case	State is used to store the data of the components that have to be rendered to the view	Props are used to pass data and event handlers to the children components
Mutability	State holds the data and can change over time	Props are immutable—once set, props can't be changed
Component	State can only be used in class components	Props can be used in both functional and class components
Updation	Event handlers generally update state	The parent component sets props for the children components

!Summary
Props stand for properties
Props are passed to components like function arguments
Props can be passed to components only via parent to child
Props data is immutable (read-only)

!Important aspects of components include: 
Re-usability: We can reuse a component used in one area of the application in another area. This speeds up development and helps avoid cluttering of code.
Nested components: A component can contain within itself, several more components.  This helps in creating more complex design and interaction elements.
Render method: In its minimal form, a component must define a render method specifying how it renders to the DOM.
Passing Props (Properties): A component can also receive props. These are properties that its parent passes to specify particular values.

!How to Use CSS in React
There are 3 ways to style a react application with CSS:
Inline Styles
External Styling
CSS in JS

!10) Which of the following is the correct data flow sequence of flux concept in React?
Action->Dispatcher->Store->View


!https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-interview-questions
!https://www.shiksha.com/online-courses/articles/top-react-interview-questions-and-answers/
!https://arc.dev/developer-blog/reactjs-interview-questions/
!https://procoders.tech/blog/react-js-interview-questions-and-answers/
!https://www.javatpoint.com/react-interview-questions
!https://www.hipeople.io/interview-questions/react-interview-questions
!https://mindmajix.com/quiz/react-js-quiz
10. What does a React state mean?
b. Internal storage of the component.

!12. Which of the below directories does React.js's code reside in?
a. Inside the js/components/

!30. Which of the following statements is accurate for React.js's uncontrolled components?
a. The source of truth is DOM.

!28. Which of the following is true about React.js's controlled components?
c. The source of truth is a component state.

!27. By using the setState() method, we may update the state in React.js. These calls include
b. Asynchronous in nature.

!26. How may a default value be set for a form field that is not controlled?
b. By using the defaultValue property

!23. Why is setState being used?
a. Invoke code after the setState operation is done.

!22. Which of the following great examples does the highest level of React components have?
a. Destruction
b. Initialization
c. State/Property Updates
d. All of the above.

!20. What will happen if you render an input element with disabled = {false}?
c. It will be rendered as enabled

!15. What does React.js' "webpack" command do?
c. It is a module bundler.

!14. Which of the following statements about the Babel is accurate?
a. Babel is a Compiler.
b. Babel is a Transpilar.
c. None of the above.
?d. Both A and B are correct.

!13. Which of the following APIs is required for every component using React.js?
b. renderComponent


!https://mindmajix.com/quiz/react-js-quiz
!https://mindmajix.com/reactjs-interview-questions
!https://www.freecodecamp.org/news/react-interview-questions-and-answers/
!https://www.mygreatlearning.com/blog/react-js-interview-questions-and-answers/
!https://www.interviewbit.com/react-interview-questions/
!5.What is meant by the state in React?
Internal storage of component

!8.______ will help to keep the data unidirectional in React.
Flux

!9.Which of the following statements related to the “webpack” command is true?
It is a module bundler

!10.What are the ReactJS limitations?
React will use inline templating and JSX which might seem awkward to a few developers
ReactJS is only for the view layer of the application, which means we will make use of other technologies as well for getting complete tooling set for the application development
The React library is too large
All of these
Unique among the siblings only
!11.What is the usage of setState?
Invoking the code after the setState operation is performed

!12.The Keys given to a list of elements in React should be ______.
Unique among the siblings only

!13.What function will permit for rendering the React content in an HTML page?
ReactDOM.render()

!15. ______ is a necessary API for every React.js component.
renderComponent

!https://www.toptal.com/react/interview-questions

!https://tms-outsource.com/blog/posts/react-interview-questions/
2. Name some advantages of React.
High efficiency: React is known for its flexibility and efficiency because of its own virtual DOM that it creates. It automatically calculates the changes needed to be made in DOM thus avoiding expensive DOM options and making regular updates whenever needed.
Easier JavaScript writing: Thanks to the JSX syntax which allows you to mix HTML with JavaScript, writing is much easier with React. The user can simply drop a bit of HTML in the render function without having to concatenate strings and React then turns those HTML bits into functions with its JSXTransformer.
A variety of developer tools: in order to get the most out of React.js, you should install its official browser extension. It comes in quite handy, especially for debugging the app. It gives you a direct look into the virtual DOM as if you were browsing a regular DOM tree in the elements panel.
Great for SEO: Most of the JavaScript frameworks aren’t particularly search engine friendly, but that is not the case with React. Thanks to its unique virtual DOM that is rendered to the browser as a regular page, the search engines will not encounter the same issues as with reading other JavaScript-heavy apps.
UI Test Cases: It is very easy to write UI test cases thanks to the virtual DOM in JavaScript.

!3. What is JSX?
A: JSX is an XML/HTML-like syntax used by React for extending ECMAScript in order for the XML/HTML-like text to coexist with JavaScript/React code. The syntax is intended to be used by preprocessors (i.e., transpilers like Babel) to transform HTML-like text found in JavaScript files into standard JavaScript objects that a JavaScript engine will parse.

!https://intellipaat.com/blog/interview-question/react-interview-questions/
47. What are the predefined prop types present in React?
There are five main predefined prop types in React. They are as follows:
PropTypes.bool
PropTypes.func
PropTypes.node
PropTypes.number
PropTypes.string

!Functional components: These types of components do not have a state of their own and only possess a render method. They are also referred to as stateless components. They may by way of props (properties), derive data from other components.

!Class components: These types of components hold and manage their unique state and have a separate render method to return JSX on the screen. They are referred to as stateful components too, as they can possess a state.

!React Nesting Components
In React, we can nest components inside within one another. This helps in creating more complex User Interfaces. The components that are nested inside parent components are called child components. Import and Export keywords facilitate nesting of the components.
Export - This keyword is used to export a particular module or file and use it in another module.
Import - This keyword is used to import a particular module or file and use it in the existing module.
!Importing named values allows the user to import multiple objects from a file.

!React Components Lifecycle
!Mounting
Mounting is the phase when the component is mounted on the DOM and then rendered on the webpage. We call these methods in the following order when an element is being created and inserted into the DOM:
componentWillMount()
render()
componentDidMount()

!Updating
We call the methods in this phase whenever State or Props in a component get updated. This allows the React application to “react” to user inputs, such as clicks and pressing keys on the keyboard, and ultimately create a responsive web user interface. These methods are called in the following order to carry on the update of the component:
componentWillReceiveProps()
setState()
shouldComponentUpdate()
componentWillUpdate()
render()
componentDidUpdate()

!Unmounting
This is the last phase of the life-cycle of the component where the component is unmounted from the DOM. This phase has only one method:
componentWillUnmount()
This function is called once before we remove the component from the page and this marks the end of the life-cycle.


!What is Express js?
Express js is a node js web application framework that provides broad features for building web and mobile applications. It is used to create a single page, multipage, and hybrid web application. Express js is high-performance, fast, unopinionated, and lightweight.

It’s a layer built on top of node js that helps manage servers and routes. 

Features of Express js
Moving ahead in this section, you will cover the features of Express js.

Fast server-side development 
Node js's characteristics enable you to save a significant amount of time.

Middleware
A request handler with access to the request-response cycle of an application is known as middleware.

Routing 
It refers to how the URLs of an application's endpoint respond to client queries.

Templating 
It provides templating engines that create HTML templates on the server to create dynamic content on web pages.

Debugging 
Express makes it easier by pinpointing the exact location of issues.

!What Is TypeScript?
TypeScript is an object-oriented and tightly typed programming language that is a superset of JavaScript. Code written in TypeScript is converted to JavaScript, which may be utilized in any environment that supports JavaScript, such as browsers, Node.js, and your own apps.
Anders Hejlsberg designed typeScript at MICROSOFT. The typeScript was developed in response to JavaScript's constraints in building large-scale applications within Microsoft and among its external customers. Due to the difficulty of dealing with complicated JavaScript code, there was a need for customized tooling to make writing JavaScript components easier.
TypeScript is a JavaScript version with a few extra features. To provide a more robust interface with your editor, TypeScript extends JavaScript with additional syntax. TypeScript is a scripting language that understands JavaScript and uses type inference to provide advanced capabilities without having to write any more code.

!Advantages of Using TypeScript With React
Typescript has a code that is easy to read and understand. The fact that TypeScript is a statically typed script is crucial. The distinction between statically and dynamically typed programming languages is when type checking occurs. Variables in static languages are type-checked.
Complex type definitions can be defined as interfaces in TypeScript. This is useful for using a complex type in your application, such as an object with multiple properties. This leads to more stringent checks, which minimizes the number of problems you could have created otherwise.
In a React project, TypeScript allows you to write HTML code directly. TypeScript delivers superior IntelliSense and code completion for JSX when used with React. JavaScript XM is abbreviated as JSX.
When using IDEs like Visual Studio, Visual Studio Code, Atom, Webstorm, Eclipse, and others, TypeScript comes in handy. These allow better development by improving autocomplete and snippet generation.
You can gradually integrate TypeScript into your existing projects. For this use situation, you can also configure the TypeScript compiler. The official TypeScript documentation includes a list of TypeScript compilers.
Microsoft supports TypeScript, an open-source programming language. Millions of developers all over the world enjoy and use it. This implies that if you get stuck while learning or using TypeScript, you can easily obtain help and answers on the community portal.

!React 18 New Features 
Concurrent Features
Transitions           
Suspense on the server

!React 18 Improvements
Automatic Batching
Better Rendering
Performance 


!https://www.turing.com/interview-questions/react-js
!2.List some of React.js’ features.
Important features of React.js include:
Instead of a real DOM, there is Virtual DOM
It completely renders the HTML files on the server into client HTML pages, in other words, server-side rendering
In React.js, the data can be passed to the other parts of an application only in one direction. In other words, there is a unidirectional flow of data.

- Virtual DOM 
- Server-Side Rendering 
- Uni-directional Flow of Data or data binding.

!3.What are the main advantages of React.js?
The main advantages of React.js are:
It enhances the performance of the application
It can be used from the client-side as well as the server-side
The readability of code is higher in React.js because of JSX
It offers easy integration with frameworks such as Angular, Meteor, etc.
It is easy to write UI test cases with React.js
If you can include some practical experience demonstrating the advantages of React.js in this React.js interview question, you are likely to impress the recruiter.

!5. What are the limitations of React?
Limitations of React are listed below:
React is just a library, not a full-blown framework
Its library is very large and takes time to understand
It can be little difficult for the novice programmers to understand
Coding gets complex as it uses inline templating and JSX

!4.What is JSX?
JSX is the syntax extension for Javascript in React.js. With the help of JSX, it is easy to define how the user interface should look. Additionally, with JSX, the file containing the Javascript code can be used to write the HTML structures as well.

!5.Describe an event in React.js?
When a user presses a key, clicks the mouse, or performs any action on the machine or when the machine itself triggers an action, these actions are registered as events in React.js.
In React.js, we use camelCase to name events, instead of the lowercase in HTML
In React.js, because of JSX, a function is passed as an event handler, instead of the string in HTML

!6.How do Lists work in React.js?
Lists in React.js are created similar to how they are created in regular Javascript. With lists, data can be displayed in an orderly manner and is useful in displaying menus on websites. For traversing lists, the map() function is used. For example,
An array of numbers is taken by the map() function and their value is multiplied by 5
var numbers = [2,4,6,8,10]
const multiplyNums = numbers.map((number => { return (number*5); });
console.log (multiplyNums);
Output: The output in Javascript will be logged in the console. The output in the above case is [10, 20, 30, 40, 50]

s
!7.Why are keys used in React.js Lists?
Keys are used in React.js Lists because:
Key helps in identifying what objects have been altered, moved, or deleted from lists
With the help of keys, it is easier to determine which objects must be re-rendered instead of all components being re-rendered all the time.
React.js interview questions that ask about the use of a certain function or component in React.js programming are common.

!8.Is HTML used in React?
No, it uses an HTML-in JavaScript syntax called JSX (JavaScript and XML) that converts HTML tags to React elements.

!9.What is the release date of React?
March 2013

?10.Can you tell two downsides of React?
It is difficult to integrate with an MVC framework like Rails. Also, users need to have the knowledge about integrating user interface into MVC framework.

!11.Can you outline the differences between Real DOM and Virtual DOM?
Real DOM and Virtual DOM differ in following ways:
?Real DOM                           Virtual DOM
Updates slowly                      Updates faster
HTML can directly update            Can't be updated directly 
Memory waste                        Less memory consumption

!12.Explain Flux Concept In React.
It is a new kind of architecture used for client-side web applications. Supports the concept of Unidirectional Data Flow.

!13.What is Redux in React?
An open-source JavaScript library for front-end development and acts as a container for JavaScript applications that is used for the applications state management.

!14.Explain the ‘Store’ feature.
It is a feature of Redux that allows the application to save the entire State at one place. This allows you to get regular updates from the store directly.

!15.What is a high order component in React?
It is an advanced-level technique in React for reusing component logic.

!16.What is the Presentational segment?
It is a component in React that just renders HTML and its only function is presentation markup.

!17.Explain Props in ReactJS.
Props in React mean properties. They act as a communication channel from parent to child.

!18.What does super keyword mean in React?
It is used to call super or parent class.

!19.What is yield catchphrase in JavaScript?
It is used to delay and resume a generator work.

!20.List the two types of React component.
Two types of React component are as follows:
Function component
Class component

!21.What is a synthetic event in ReactJS?
It is an object that serves as a cross browser wrapper of the browser’s native event.

!22.In Redux, what is an action?
In Redux, an action is an object that contains information about an event that has occurred in an application.

!23.What are stateless components?
They are pure functions with no render method.

!24.What is React Router?
It is a library for routing in React.

!25.Can you list some animation packages in React?
Some animation packages are as follows:
React Motion
React Transition Group
React Spring

!26.Explain Jest.
Jest is a JavaScript framework created by Facebook and is based on Jasmine. Its feature-rich API helps to get results quickly.

!27.What exactly is the dispatcher?
It is the central hub of data flow in a Flux application that acts as a directory of callbacks.

!28.Explain the callback function.
It is called when setState () has finished. A state can be updated in response to prop changes or server response using setState() method The main purpose is to prevent a component from re-rendering.

!29.Explain React State.
It is an object which stores the component’s property values. Also, it decides how the component renders and behaves.

!30.Can a State be updated in ReactJS?
Yes, it can be updated directly or indirectly. To implement this one can use either this. setState function or the updater function.

!31.What is the use of arrow function in React?
Arrow function helps to create a compact function expression. Also they help predict bugs when passed as a callback.

!32.List the lifecycle steps of React.
The steps are as follows:
Initialization
State/Property updates
Destruction

!33.What are React portals?
They are used to render an element outside its hierarchy using CreatePortalmethod. Hence they allow developers to render outside the hierarchy tree.

!34.Explain Context.
React Context is a way to share data globally between React components. It achieved this by passing props from parent to child and storing them in a store. Thus child component(s) can use these props through the store.

!35.What is the use of Webpack?
Webpack is a command line tool used to bundle different code files and assets into single large file.. It has been built over Node.js and helps minimize Javascript, CSS files, images, etc.

!36.What is Babel?
It is an open-source JavaScript compiler that converts the latest JavaScript versions to old ones.

!37.How are ReactJS and React Native different?
Where ReactJS is a front end open-source JavaScript library for UIs, React Native is an open-source mobile framework for platforms such as Android and iOS.

??? - INTERMEDIATE REACTJS INTERVIEW QUESTIONS AND ANSWERS - 
!1.How do browsers read JSX files?
As JSX is a combination of HTML and JavaScript, browsers are unable to read it. And hence a transpiler is needed to convert JSX to Javascript so that browsers can understand.

!2.What is the most advised way for naming components?
By using reference rather than using displayName because it provides a clear and concise name for the component.

!3.Mention one difference between Props and State.
State is mutable while Props are immutable. This means that the state is internal and managed by the component while props are external and managed by anything that renders the component.

!4.What are pure components in ReactJS?
A React component is considered to be pure if it produces the same output when given the same set of state and props.

!5.What is ‘create-React-app’?
It provides a development environment for creating React applications using the JavaScript features as it creats a basic setup for the application without requiring to configure everything. It is very helpful in building a single-page application in React.

!6.What does ‘key’ do in React list?
Keys are used for providing identity to list elements.

!7.Explain children's prop.
Children prop are used to pass data from the parent component to the children component.

!8.What are error boundaries?
They help catch errors in child components, log the error and show fallback UI.

!9.Why will you use empty tags <> </>?
To declare fragments

!10.Tell us about strict mode.
It highlights any potential problems in the application. It achieves this by encapsulating a section of your application as a component. While it does not show any visible element in the development mode (does not impact the performance in the production mode as well), it does give warnings.

!11.What is React Fiber?
It is the new reconciliation engine in React 16 and is used to enable incremental rendering of virtual DOM.

!12.Can you differentiate between createElement and cloneElement?
CreateElement creates a new element and returns it, while CloneElement clones an existing element and returns a new element.

!13.Explain Lifting State Up in React.
When multiple components need to share the same data, it is advised to lift the shared state up to their parent. This means when two child components share the same data from their parent, the state is lifted up to the parent instead of the child components.

!14.Explain stateful components.
If the behavior of the component holds dependency on the state of the component, we term it as a stateful component.

!15.Tell me, how will you memoize a component in React?
We can memoize a component in React using memoization libraries.

!16.How to use production mode in React?
It can be used through Webpack's DefinePlugin method to set NODE_ENV to production that takes out propType validation and extra warnings.

!17.Explain switching components.
It is a component that renders one of many components. For this you need to use object to map prop values to components. Basically, it allows the user to turn the setting on or off.

!18.How will you update props in React?
It is not possible as we can’t update props in ReactJS as they are read-only.

!19.What do you understand by the term ‘Restructuring’ ?
It is a process by which arrays are extracted.

!20.Can the values of props be updated?
No, as props are immutable and top-down. This signifies that parent can transmit prop values to a child but the latter can’t modify them.

!21.Can I use web components in React application?
Yes, you can. While it is not used by many developers, it is required when using third-party UI components.

??? - ADVANCED REACTJS INTERVIEW QUESTIONS AND ANSWERS -
!1.Why is ‘prop-types’ library used?
Allows for run time checkings for props and other similar objects.

!2.What are React hooks?
Through React hooks, you don't have to write a class to use State and some other React features

!3.What do you know about Controlled Components?
They control the input elements which means the form’s data is managed by the component's state. It takes its value through props and makes alterations through callbacks.

!4.What are refs?
They are an attribute of DOM elements. It is a function provided by React to access these elements. You might want to use them in case when you want to change the value of a child component without use of props.

!5.What can you do to spill the reducers?
We can use event actions.

!6.How do you implement routing in ReactJS?
React Router is available as an npm package, and can be added to your application with a single line of code. Once installed, you can define your routes in your application and use the component to link between them.

!7.Can you attach a JSX element to other JSX components?
Yes, you can add JSX elements to other JSX components.

!8.With pure components, what is the issue of using render props?
When creating a function inside the render method, it negates the performance of the pure component.

!9.Explain the windowing technique.
It is a technique that furnishes only a small number of rows at any given time. This reduces the time to re-render not only the elements but also the DOM nodes.

!10.How can you fetch data with React Hooks?
We can use useEffect that fetches the data through axios from the API.

!11.What is Formik?
It is a third-party library that aids in form programming and validation.

!12.Can you list some middleware choices for tackling asynchronous calls in Redux?
Redux Promise, Redux Saga Redux Thunk

!13.Can browsers understand JSX code? Explain.
No. A transpiler is needed to convert JSX to JavaScript. Web browsers are built to understand and read original JavaScript or JS objects. Since JSX is not a regular JS object, web browsers are unable to read it. For web browsers to read JSX, it must be made compatible by first converting it into regular JS objects. This is achieved by using a transcompiler, such as Babel. While this may seem like a simple ReactJS interview question, knowing answers to such questions can be critical.

!14.What is one-way data flow in React?
React uses unidirectional data flow which means you can transfer data from parent to child and not the other way around.

!15.Explain Concurrent Rendering.
Concurrent rendering is a feature of React that enables components to render, update, and respond to user input simultaneously.

!16.Are concurrent mode and async mode different?
They both are the same. Earlier concurrent mode was referred to as "Async Mode".

!17.Can JavaScript urls be used in React 16.9?
Yes, but it will give a warning in the console.

!18.Tell us about React Server components.
It is a way to build applications that cover the benefits of both the server and client side.

!19.What is prop drilling?
It is a situation where the same data is sent at every interdependent level until it reaches the final level.

!20.What is virtual DOM?
DOM is the abbreviated version of the Document Object Model. The DOM shows the logical tree structure for an HTML document. There is a node at the end of each tree branch, with every tree node containing one or more objects.

!21.Why do we use keys in Lists?
The main reason why we use keys in lists are as follows
It is an identifier to find which items have changed, updated, or deleted from lists
Find out which items need to be re-rendered

!22.Explain React forms?
React forms allow users to interact with web applications. They help users to enter the information when required. They contain buttons, text fields, checkboxes, etc.

!23.What are the components in React?
In a React application, they are independent and reusable bits of code that can be processed separately. A single app may therefore contain multiple components.

!24.Tell us about MobX.
It is a simple, scalable, and battle-tested state management solution.It is based on Reactive programming principles.
To use it, the following packages need to be installed
npm install mobx --save
npm install mobx-React --save

!25.How is an application created using ReactJS?
We can use the following steps:
Install the ReactJS app on the machine as the ReactJS library installation requires npm. This is because npm or node package manager has several JavaScript libraries including ReactJS
Install Sublime text or any text editor similar to it.
Use the command prompt or terminal to install the create-ReactJS-app package
Start the ReactJS app by going to the newly generated directory (my app) and running npm start
Set up the component structure and define what components - functional or classes - you will use for your application
Set up the back-end structure with Ruby-on-Rails API
Define the App component that will contain two child components - MainContainer and Nav
Set up the Nav component
Set up the CreateCard component in the controlled form to then set up the MainContainer component as a class component
Create a fetch request to the back-end using ReactJS’s component lifecycle methods
Set up the ToDoCardContainer component to render all the ToDoCard components
Render the cards with the ToDoCard component
Create lists using the addList callback function
Render lists for appropriate cards by rendering the ToDoList component
Click on the list item to check it off once it is completed
Be sure to mention all points in detail for such a ReactJS interview question.

!26.What is the use of eslint plugin for hooks?
It enforces the Rules of Hooks. Precisely, it is a static code analysis tool for finding out faulty patterns in JavaScript code.

!27.What are React Dev Tools?
It lets you analyze the component hierarchy and includes component props and state. You can find React Dev Tools both as a standalone app and as a browser extension.

!28.Why would you do it if DevTools does not load in Chrome for local files?
On opening a local HTML file in your browser, you must first open Chrome Extensions and check Allow access to file URLs.

!29.Tell me some advantages of React over VueJS.
React is better than Vue for following reasons
Easy to test
Suitable for mobile apps
More flexible

!30.What is render hijacking in React?
It is the ability to control what one component will output from another component. Here you wrap a component with a higher order component.

!31.How can you pass numbers to the React component?
You can pass numbers to React components using curly braces({}) where as strings in quotes

!32.Explain React memo function.
Using PureComponent or shouldComponentUpdate you can restrict class components from re-rendering when input properties are the same. You can do the same with the React memo function.

!33.Tell me some benefits of React Router V4.
Below are the main benefits of React Router V4 module,
Provides declarative routing using components
No need to manually set history
Reduced application size

!34.How uncaught errors behave in React 16?
It results in unmounting of the entire React component tree.

!35.What are default props?
It is a React component property to set default values for the props argument. They are used for undefined props only and not for null props.

!36.What browser React applications support?
It supports all popular browsers including Internet Explorer 9 and above. However, it can support old browsers as well through polyfills.

!37.Is it necessary for keys to be globally unique?
While you can use the same keys for two different arrays, they don't need to be globally unique.

!38.What methods are invoked during error handling?
static getDerivedStateFromError()
componentDidCatch()

!39.Do you know the use of the unmountComponentAtNode method?
The unmountComponentAtNode method in React is used to unmount a React component from the DOM and clean up its event handlers and state. This method is often used when cleaning up the DOM after a React component has been removed or replaced.

!40.On what condition, do component props defaults to true?
When you pass no value for a prop.

!41.How will you build a search filter using React?
You can build a search filter using following steps:
First declare React states for input values.
For entering the search term, create HTML input state
Now, on Change function update state
Add Array filter () to list of items with search term value

!42.How can you create a simple counter using React?
A simple counter can be created using following steps:
First, create a React state that can store the count value.
Then declare JS functions to increment or decrement the value using setState().
Finally add HTML buttons with onClick to JSX code.

!43.How can you display a list in React?
A list can be created by:
First, declare a list of items using JS Array.
Now to access each item use Array.map()
Finally, return JSX code for each item

!44.How will you create an Image Slider using ReactJS?
Create an array of objects that contain an id and image URL.
To enable pre/next functionality, we decrease or increase the index value of the currently active image.
Finally update the active image index using the clicked option.

!45.What are the steps to add Font Awesome icons in React?
npm install --save font-awesome 
import 'font-awesome/css/font-awesome.min.css'

!46.How will you use TypeScript in create-React-app applications?
There is built-in support. You just have to pass --typescript option,
npx create-React-app my-app --typescript

!47.Can the statics object work with ES6 classes?
No, it works only with React.createClass():

!48.How will you make Redux Form initialValues get updated from state?
For this, we use enableReinitialize : true setting.


!------------------------------------------------------------------------------------------------------------
!https://career.guru99.com/reactjs-interview-questions/
1) What is Reactjs?
React is a JavaScript library that makes building user interfaces easy. It was developed by Facebook.

!2) Does React use HTML?
No, It uses JSX, which is similar to HTML.

!3) When was React first released?
React was first released on March 2013.

!4) Give me two most significant drawbacks of React
Integrating React with the MVC framework like Rails requires complex configuration.
React require the users to have knowledge about the integration of user interface into MVC framework.

!5) State the difference between Real DOM and Virtual DOM
!Real DOM	                                Virtual DOM
It is updated slowly.	                    It updates faster.
It allows a direct update from HTML.	    It cannot be used to update HTML directly.
It wastes too much memory.	              Memory consumption is less

!6) What is Flux Concept In React?
Facebook widely uses flux architecture concept for developing client-side web applications. It is not a framework or a library. It is simply a new kind of architecture that complements React and the concept of Unidirectional Data Flow.

!7) Define the term Redux in React
Redux is a library used for front end development. It is a state container for JavaScript applications which should be used for the applications state management. You can test and run an application developed with Redux in different environments.

!8) What is the ‘Store’ feature in Redux?
Redux has a feature called ‘Store’ which allows you to save the application’s entire State at one place. Therefore all it’s component’s State are stored in the Store so that you will get regular updates directly from the Store. The single state tree helps you to keep track of changes over time and debug or inspect the application.

!9) What is an action in Redux?
It is a function which returns an action object. The action-type and the action data are always stored in the action object. Actions can send data between the Store and the software application. All information retrieved by the Store is produced by the actions.

!10) Name the important features of React
Here, are important features of React.

Allows you to use 3rd party libraries
Time-Saving
Faster Development
Simplicity and Composable
Fully supported by Facebook.
Code Stability with One-directional data binding
React Components

!11) Explain the term stateless components
Stateless components are pure functions that render DOM-based solely on the properties provided to them.

!12) Explain React Router
React Router is a routing library which allows you to add new screen flows to your application, and it also keeps URL in sync with what’s being shown on the page.


!13) What are the popular animation package in React ecosystem?
Popular animation package in React ecosystem are
React Motion
React Transition Groups

!14) What is Jest?
Jest is a JavaScript unit testing framework created by Facebook based on Jasmine. It offers automated mock creation and a jsdom environment. It is also used as a testing component.

!15) What is dispatcher?
A dispatcher is a central hub of app where you will receive actions and broadcast payload to registered callbacks.

!16) What is meant by callback function? What is its purpose?
A callback function should be called when setState has finished, and the component is re-rendered.
As the setState is asynchronous, which is why it takes in a second callback function.

!17) Explain the term high order component
A higher-order component also shortly known as HOC is an advanced technique for reusing component logic. It is not a part of the React API, but they are a pattern which emerges from React’s compositional nature.

!18) Explain the Presentational segment
A presentational part is a segment which allows you to renders HTML. The segment’s capacity is presentational in markup.

!19) What are Props in react js?
Props mean properties, which is a way of passing data from parent to child. We can say that props are just a  communication channel between components. It is always moving from parent to child component.

!20) What is the use of a super keyword in React?
The super keyword helps you to access and call functions on an object’s parent.

!21) Explain yield catchphrase in JavaScript
The yield catchphrase is utilized to delay and resume a generator work, which is known as yield catchphrase

!22) Name two types of React component
Two types of react Components are:
Function component
Class component

!23) Explain synthetic event in React js
Synthetic event is a kind of object which acts as a cross-browser wrapper around the browser’s native event. It also helps us to combine the behaviors of various browser into signal  API.

!24) What is React State?
It is an object which decides how a specific component renders and how it behaves. The state stores the information which can be changed over the lifetime of a React component.

!25) How can you update state in react js?
A state can be updated on the component directly or indirectly.

!26) Explain the use of the arrow function in React
The arrow function helps you to predict the behavior of bugs when passed as a callback. Therefore, it prevents bug caused by this all together.

!27) What are the lifecycle steps of React?
Important lifecycle steps of React js are:
Initialization
State/Property updates
Destruction are the lifecycle of React

!28) State the main difference between Pros and State
The main difference the two is that the State is mutable and Pros are immutable.

!29) Explain pure components in React js
Pure components are the fastest components which can replace any component with only a render(). It helps you to enhance the simplicity of the code and performance of the application.

!30) What kind of information controls a segment in React?
There are mainly two sorts of information that control a segment: State and Props
State: State information that will change, we need to utilize State.
Props: Props are set by the parent and which are settled all through the lifetime of a part.

!31) What is ‘create-react-app’?
‘create-react-app’ is a command-line tool which allows you to create one basic react application.

!32) Explain the use of ‘key’ in react list
Keys allow you to provide each list element with a stable identity. The keys should be unique.

!33) What are children prop?
Children props are used to pass component to other components as properties. You can access it by using
{props.children}

!34) Explain error boundaries?
Error boundaries help you to catch Javascript error anywhere in the child components. They are most used to log the error and show a fallback UI.

!35) What is the use of empty tags <> </>?
Empty tags are used in React for declaring fragments.

!36) Explain strict mode
StrictMode allows you to run checks and warnings for react components. It runs only on development build. It helps you to highlight the issues without rendering any visible UI.

!37) What are reacted portals?
Portal allows you to render children into a DOM node.  CreatePortalmethod is used for it.

!38) What is Context?
React context helps you to pass data using the tree of react components. It helps you to share data globally between various react components.

!39) What is the use of Webpack?
Webpack in basically is a module builder. It is mainly runs during the development process.

!40) What is Babel in React js?
Babel, is a JavaScript compiler that converts latest JavaScript like ES6, ES7 into plain old ES5 JavaScript that most browsers understand.

!41) How can a browser read JSX file?
If you want the browser to read JSX, then that JSX file should be replaced using a JSX transformer like Babel and then send back to the browser.

!42) What are the major issues of using MVC architecture in React?
Here are the major challenges you will face while handling MVC architecture:
DOM handling is quite expensive
Most of the time applications were slow and inefficient
Because of circular functions, a complex model has been created around models and ideas

!43) What can be done when there is more than one line of expression?
At that time a multi-line JSX expression is the only option left for you.

!44) What is the reduction?
The reduction is an application method of handling State.

!45) Explain the term synthetic events
It is actually a cross-browser wrapper around the browser’s native event. These events have interface stopPropagation() and preventDefault().

!46) When should you use the top-class elements for the function element?
If your element does a stage or lifetime cycle, we should use top-class elements.

!47) How can you share an element in the parsing?
Using the State, we can share the data.

!48) Explain the term reconciliation
When a component’s state or props change then rest will compare the rendered element with previously rendered DOM and will update the actual DOM if it is needed. This process is known as reconciliation.

!49) Ho can you re-render a component without using setState() function?
You can use forceUpdate() function for re-rending any component.

!50) Can you update props in react?
You can’t update props in react js because props are read-only. Moreover, you can not modify props received from parent to child.

!51) Explain the term ‘Restructuring.’
Restructuring is extraction process of array objects. Once the process is completed, you can separate each object in a separate variable.

!52) Can you update the values of props?
It is not possible to update the value of props as it is immutable.

!53) Explain the meaning of Mounting and Demounting
The process of attaching the element to the DCOM is called mounting.
The process of detaching the element from the DCOM is called the demounting process.

!54) What is the use of ‘prop-types’ library?
‘Prop-types’ library allows you to perform runtime type checking for props and similar object in a recent application.

!55) Explain react hooks
React hooks allows you to use State, and other React features without writing a class.

!56) What are Fragments?
You can use fragment keyword to group a list of children components without using any extra nodes to the DOM.

!57) What is the main difference between createElement and cloneElment?
createElement is used by react to create react elements.
cloneElement is used to clone an element and pass it new props.

!58) What are Controlled Components?
Controlled components are component which controls the input elements.

!59) Why do you need to use props.children?
This props.children allow you to pass a component as data to other components.

!60) List down some of the methods in a react-dom package
Important methods for react-dom packages are:
render()
hydrate()
createPortal()
unmountComponentAtNode()
findDOMNode()

!61) How can we do server-side rendering in React?
We can use reaction serve to do the server-side rendering.

!62) State the difference between getIntialState() and constructor()?
If you want to create one component by extending ‘React. Component’, the constructor helps you to initialize the State. But, if you want to create by using ‘Reat.createClass.’ then you should use ‘genInitiaState.’

!63) What is refs?
Ref are an attribute of the DOM elements. The primary purpose of the refs is to find the DOM elements easily.

!64) What is ComponentWillMount()
componentWillMount() is to make API calls once the component is initiated and configure the values into the state. To make an API call, use an HttpClient such as Axios, or we can use fetch() to trigger the AJAX call.

!65) How to dispatch the data in-store?
We can dispatch the data to another component which should be based on the action which stores the parent component.

!66) How will be you able to handle more action using redux?
In order to create the same component in more action flow, we are using the same functionality in various modules.

!67) How can you spill the reducers?
We can spill the rescues based on the event actions. That action should be split in separate modules.

!68) Name any five predefined prototypes used in React
Most important protoype used in React js are:
number
string
array
object
element

!69) What is the purpose of using bindActionsCreators?
BindActionCreator helps you to bind the event based on the action dispatcher to the HTML element.

!70) What is REFS in React
Ref is a reference to the element. It should be avoided in most cases. However, sometimes it is used when you need to access DOM or instance of the component directly.

!71) Can JSX element be attached to other JSX components?
Yes, you can use attach JSX element with other JSX components which is very much similar to nesting HTML elements.

!72) What is the Current Stable Version of React?
The current stable version of React is version 18.2.0/17.5

!73) Name out an important feature of Redux workflow features
Important features of Redux workflow are:
Reset: Helps you to reset the State of the Store
Revert: Allows you to roll back to the last committed State
Sweep: All disable action that you might fire by mistake will be removed
Commit: Helps you to make the current State the initial State.

!74) State the difference between React JS and React Native
React JS is a front end open-source JavaScript library used for building UIs, While React Native, is an open-source, mobile framework which allows developers to user React on platforms like Android and iOS.


!-------------------------------------------------------------------------------------------------------------
!https://www.edureka.co/blog/interview-questions/react-interview-questions/
!1.  Differentiate between Real DOM and Virtual DOM.
!Real DOM                                 Virtual DOM
1. It updates slow.	                      1. It updates faster.
2. Can directly update HTML.	            2. Can’t directly update HTML.
3. Creates a new DOM if element updates.	3. Updates the JSX if element updates.
4. DOM manipulation is very expensive.	  4. DOM manipulation is very easy.
5. Too much of memory wastage.	          5. No memory wastage.

!2. What is React?
React is a front-end JavaScript library developed by Facebook in 2011.
It follows the component based approach which helps in building reusable UI components.
It is used for developing complex and interactive web and mobile UI.
Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.

!3. What are the features of React? 
Major features of React are listed below:
It uses the virtual DOM instead of the real DOM.
It uses server-side rendering.
It follows uni-directional data flow or data binding.

!4. List some of the major advantages of React.
Some of the major advantages of React are:
It increases the application’s performance
It can be conveniently used on the client as well as server side
Because of JSX, code’s readability increases
React is easy to integrate with other frameworks like Meteor, Angular, etc
Using React, writing UI test cases become extremely easy

!5. What are the limitations of React?
Limitations of React are listed below:
React is just a library, not a full-blown framework
Its library is very large and takes time to understand
It can be little difficult for the novice programmers to understand
Coding gets complex as it uses inline templating and JSX

!6. What is JSX?
JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance. Below is an example of JSX:

!7. What do you understand by Virtual DOM? Explain its works.
A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system. Check out this Web developer course online(https://www.edureka.co/masters-program/full-stack-developer-training) to learn more about react.
This Virtual DOM works in three simple steps.
Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
Then the difference between the previous DOM representation and the new one is calculated.
Once the calculations are done, the real DOM will be updated with only the things that have actually changed. 

!8. Why can’t browsers read JSX?
Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.

!9. How different is React’s ES6 syntax when compared to ES5?
Syntax has changed from ES5 to ES6 in the following aspects:
?require vs import
// ES5
var React = require('react');
// ES6
import React from 'react';

?export vs exports
// ES5
module.exports = Component;
// ES6
export default Component;

?component and function
// ES5
var MyComponent = React.createClass({
    render: function() {
        return
 
<h3>Hello Edureka!</h3>
;
    }
});
 
// ES6
class MyComponent extends React.Component {
    render() {
        return
 
<h3>Hello Edureka!</h3>
;
    }
}

?props
// ES5
var App = React.createClass({
    propTypes: { name: React.PropTypes.string },
    render: function() {
        return
 
<h3>Hello, {this.props.name}!</h3>
;
    }
});
 
// ES6
class App extends React.Component {
    render() {
        return
 
<h3>Hello, {this.props.name}!</h3>
;
    }
}

?state
// ES5
var App = React.createClass({
    getInitialState: function() {
        return { name: 'world' };
    },
    render: function() {
        return
 
<h3>Hello, {this.state.name}!</h3>
;
    }
});
 
// ES6
class App extends React.Component {
    constructor() {
        super();
        this.state = { name: 'world' };
    }
    render() {
        return
 
<h3>Hello, {this.state.name}!</h3>
;
    }
}

!10. How is React different from Angular?
React vs Angular
!  TOPIC	          REACT	                  ANGULAR
1. ARCHITECTURE	    Only the View of MVC	  Complete MVC
2. RENDERING	      Server-side rendering	  Client-side rendering
3. DOM	            Uses virtual DOM	      Uses real DOM
4. DATA BINDING	    One-way data binding	  Two-way data binding
5. DEBUGGING	      Compile time debugging	Runtime debugging
6. AUTHOR	          Facebook	              Google


!11. “In React, everything is a component.” Explain.
Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.

!12. What is the purpose of render() in React.
Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked.

!13. How can you embed two or more components into one?
We can embed components into one in the following way:

!14. What is Props?
Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.

!15. What is a state in React and how is it used?
States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state().

!16. Differentiate between states and props.
States vs Props
Conditions	                                    State	  Props
1. Receive initial value from parent component	Yes	    Yes
2. Parent component can change value	          No	    Yes
3. Set default values inside component	        Yes	    Yes
4. Changes inside component	                    Yes	    No
5. Set initial value for child components	      Yes	    Yes
6. Changes inside child components	            No	    Yes

!17. How can you update the state of a component?
State of a component can be updated using this.setState().
class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Maxx',
            id: '101'
        }
    }
    render()
        {
            setTimeout(()=>{this.setState({name:'Jaeha', id:'222'})},2000)
            return (                                 
 
<div>
                   
<h1>Hello {this.state.name}</h1>
     
<h2>Your Id is {this.state.id}</h2>
 
                   </div>
 
            );
        }
    }
ReactDOM.render(
    <MyComponent/>, document.getElementById('content')
);

!18. What is arrow function in React? How is it used?
Arrow functions are more of brief syntax for writing the function expression. They are also called ‘fat arrow‘ (=>) the functions. These functions allow to bind the context of the components properly since in ES6 auto binding is not available by default. Arrow functions are mostly useful while working with the higher order functions.
//General way
render() {    
    return(
        <MyInput onChange={this.handleChange.bind(this) } />
    );
}
//With Arrow Function
render() {  
    return(
        <MyInput onChange={ (e) => this.handleOnChange(e) } />
    );
}

!19. Differentiate between stateful and stateless components.
Stateful vs Stateless
Stateful Component	                                    Stateless Component
1. Stores info about component’s state change in memory	1. Calculates the internal state of the components
2. Have authority to change state	                      2. Do not have the authority to change state
3. Contains the knowledge of past, current and possible future changes in state	3. Contains no knowledge of past, current and possible future state changes
4. Stateless components notify them about the requirement of the state change, then they send down the props to them.	4. They receive the props from the Stateful components and treat them as callback functions.

!20. What are the different phases of React component’s lifecycle?
There are three different phases of React component’s lifecycle:
Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.
Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.
Unmounting Phase: This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.

!21. Explain the lifecycle methods of React components in detail.
Some of the most important lifecycle methods are:
componentWillMount() – Executed just before rendering takes place both on the client as well as server-side.
componentDidMount() – Executed on the client side only after the first render.
componentWillReceiveProps() – Invoked as soon as the props are received from the parent class and before another render is called.
shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
componentWillUpdate() – Called just before rendering takes place in the DOM.
componentDidUpdate() – Called immediately after rendering takes place.
componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.

!22. What is an event in React?
In React, events are the triggered reactions to specific actions like mouse hover, mouse click, key press, etc. Handling these events are similar to handling events in DOM elements. But there are some syntactical differences like:
Events are named using camel case instead of just using the lowercase.
Events are passed as functions instead of strings.
The event argument contains a set of properties, which are specific to an event. Each event type contains its own properties and behavior which can be accessed via its event handler only.

!23. How do you create an event in React?
sclass Display extends React.Component({    
    show(evt) {
        // code   
    },   
    render() {      
        // Render the div with an onClick prop (value is a function)        
        return (            
           
<div onClick={this.show}>Click Me!</div>
 
        );    
    }
});

!24. What are synthetic events in React?
Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.

!25. What do you understand by refs in React?
Refs is the short hand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function. It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components.
class ReferenceDemo extends React.Component{
     display() {
         const name = this.inputDemo.value;
         document.getElementById('disp').innerHTML = name;
     }
render() {
    return(        
          
<div>
            Name: <input type="text" ref={input => this.inputDemo = input} />
            <button name="Click" onClick={this.display}>Click</button>            
          
<h2>Hello <span id="disp"></span> !!!</h2>
 
      </div>
    );
   }
 }

!27. How do you modularize code in React?
We can modularize code by using the export and import properties. They help in writing the components separately in different files.
//ChildComponent.jsx
export default class ChildComponent extends React.Component {
    render() {
        return(           
 
<div>
              
<h1>This is a child component</h1>
 
           </div>
 
        );
    }
}
 
//ParentComponent.jsx
import ChildComponent from './childcomponent.js';
class ParentComponent extends React.Component {    
    render() {        
        return(           
             
<div>               
                <App />          
            </div>
      
        );  
    }
}

!28. How are forms created in React?
React forms are similar to HTML forms. But in React, the state is contained in the state property of the component and is only updated via setState(). Thus the elements can’t directly update their state and their submission is handled by a JavaScript function. This function has full access to the data that is entered by the user into a form.
handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
}
 
render() {
    return (        
         
<form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleSubmit} />
            </label>
            <input type="submit" value="Submit" />
        </form>
 
    );
}

!29. What do you know about controlled and uncontrolled components?
Controlled vs Uncontrolled Components
Controlled Components	Uncontrolled Components
1. They do not maintain their own state	1. They maintain their own state
2. Data is controlled by the parent component	2. Data is controlled by the DOM
3. They take in the current values through props and then notify the changes via callbacks	3. Refs are used to get their current values

!30. What are Higher Order Components(HOC)?
Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components.

!31. What can you do with HOC?
HOC can be used for many tasks like:
Code reuse, logic and bootstrap abstraction
Render High jacking
State abstraction and manipulation
Props manipulation

!32. What are Pure Components?
Pure components are the simplest and fastest components which can be written. They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application.

!33. What is the significance of keys in React?
Keys are used for identifying unique Virtual DOM Elements with their corresponding data driving the UI. They help React to optimize the rendering by recycling all the existing elements in the DOM. These keys must be a unique number or string, using which React just reorders the elements instead of re-rendering them. This leads to increase in application’s performance.

!34. What were the major problems with MVC framework?
Following are some of the major problems with MVC framework:
DOM manipulation was very expensive
Applications were slow and inefficient
There was huge memory wastage
Because of circular dependencies, a complicated model was created around models and views

!35. Explain Flux.
Flux is an architectural pattern which enforces the uni-directional data flow. It controls derived data and enables communication between multiple components using a central Store which has authority for all data. Any update in data throughout the application must occur here only. Flux provides stability to the application and reduces run-time errors.flux 

!36. What is Redux?
Redux is one of the most trending libraries for front-end development in today’s marketplace. It is a predictable state container for JavaScript applications and is used for the entire applications state management. Applications developed with Redux are easy to test and can run in different environments showing consistent behavior.

!37. What are the three principles that Redux follows?
Single source of truth: The state of the entire application is stored in an object/ state tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
State is read-only: The only way to change the state is to trigger an action. An action is a plain JS object describing the change. Just like state is the minimal representation of data, the action is the minimal representation of the change to that data. 
Changes are made with pure functions: In order to specify how the state tree is transformed by actions, you need pure functions. Pure functions are those whose return value depends solely on the values of their arguments.

!38. What do you understand by “Single source of truth”?
Redux uses ‘Store’ for storing the application’s entire state at one place. So all the component’s state are stored in the Store and they receive updates from the Store itself. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.

!39. List down the components of Redux.
Redux is composed of the following components:
Action – It’s an object that describes what happened.
Reducer –  It is a place to determine how the state will change.
Store – State/ Object tree of the entire application is saved in the Store.
View – Simply displays the data provided by the Store.


!40. Show how the data flows through Redux?

!41. How are Actions defined in Redux?
Actions in React must have a type property that indicates the type of ACTION being performed. They must be defined as a String constant and you can add more properties to it as well. In Redux, actions are created using the functions called Action Creators. Below is an example of Action and Action Creator:
function addTodo(text) {
       return {
                type: ADD_TODO,    
                 text    
    }
}

!42. Explain the role of Reducer.
Reducers are pure functions which specify how the application’s state changes in response to an ACTION. Reducers work by taking in the previous state and action, and then it returns a new state. It determines what sort of update needs to be done based on the type of the action, and then returns new values. It returns the previous state as it is, if no work needs to be done.

!43. What is the significance of Store in Redux?
A store is a JavaScript object which can hold the application’s state and provide a few helper methods to access the state, dispatch actions and register listeners. The entire state/ object tree of an application is saved in a single store. As a result of this, Redux is very simple and predictable. We can pass middleware to the store to handle the processing of data as well as to keep a log of various actions that change the state of stores. All the actions return a new state via reducers.

44. How is Redux different from Flux?
Flux	Redux
1. The Store contains state and change logic	1. Store and change logic are separate
2. There are multiple stores	                2. There is only one store
3. All the stores are disconnected and flat	  3. Single store with hierarchical reducers
4. Has singleton dispatcher	                  4. No concept of dispatcher
5. React components subscribe to the store	  5. Container components utilize connect
6. State is mutable	                          6. State is immutable

!45. What are the advantages of Redux?
Advantages of Redux are listed below:
Predictability of outcome – Since there is always one source of truth, i.e. the store, there is no confusion about how to sync the current state with actions and other parts of the application.
Maintainability – The code becomes easier to maintain with a predictable outcome and strict structure.
Server-side rendering – You just need to pass the store created on the server, to the client side. This is very useful for initial render and provides a better user experience as it optimizes the application performance.
Developer tools – From actions to state changes, developers can track everything going on in the application in real time.
Community and ecosystem – Redux has a huge community behind it which makes it even more captivating to use. A large community of talented individuals contribute to the betterment of the library and develop various applications with it.
Ease of testing – Redux’s code is mostly functions which are small, pure and isolated. This makes the code testable and independent.
Organization – Redux is precise about how code should be organized, this makes the code more consistent and easier when a team works with it

!46. What is React Router?
React Router is a powerful routing library built on top of React, which helps in adding new screens and flows to the application. This keeps the URL in sync with data that’s being displayed on the web page. It maintains a standardized structure and behavior and is used for developing single page web applications. React Router has a simple API.

!47. Why is switch keyword used in React Router v4?
Although a <div> is used to encapsulate multiple routes inside the Router. The ‘switch’ keyword is used when you want to display only a single route to be rendered amongst the several defined routes. The <switch> tag when in use matches the typed URL with the defined routes in sequential order. When the first match is found, it renders the specified route. Thereby bypassing the remaining routes.

!48. Why do we need a Router in React?
A Router is used to define multiple routes and when a user types a specific URL, if this URL matches the path of any ‘route’ defined inside the router, then the user is redirected to that particular route. So basically, we need to add a Router library to our app that allows creating multiple routes with each leading to us a unique view.
<switch>
    <route exact path=&rsquo;/&rsquo;&nbsp;component={Home}/>
    <route path=&rsquo;/posts/:id&rsquo; component={Newpost}/>
    <route path=&rsquo;/posts&rsquo;&nbsp;&nbsp; component={Post}/>
</switch>


!49. List down the advantages of React Router.
Few advantages are:
Just like how React is based on components, in React Router v4, the API is ‘All About Components’. A Router can be visualized as a single root component (<BrowserRouter>) in which we enclose the specific child routes (<route>).
No need to manually set History value: In React Router v4, all we need to do is wrap our routes within the <BrowserRouter> component.
The packages are split: Three packages one each for Web, Native and Core. This supports the compact size of our application. It is easy to switch over based on a similar coding style.

!50. How is React Router different from conventional routing?
Conventional Routing vs React Routing
Topic	          Conventional Routing	React Routing
PAGES INVOLVED	Each view corresponds to a new file	      ?Only single HTML page is involved
URL CHANGES	    A HTTP request is sent to a server and corresponding HTML page is received	?Only the History attribute is changed
FEEL	          User actually navigates across different pages for each view	?User is duped thinking he is navigating across different pages

!51. What is the difference between a controlled and uncontrolled component in React?
React interview questions – Controlled and uncontrolled components
In React, a controlled component is a component that has its state controlled by the parent component. The parent component passes the state as props to the controlled component and also handles any changes to the state via callback functions. The controlled component only renders the received props and does not have its own state.
An uncontrolled component, on the other hand, maintains its own internal state and updates it using DOM events. The component directly updates the DOM and does not rely on the parent component to pass and update the state.
An example of a controlled component is a form input that receives its value from the parent component as a prop and updates the parent component’s state via a callback function when the input is changed. An uncontrolled component would be a form input that maintains its own internal state and updates the value directly when the input is changed, without the need for a callback function.
In general, controlled components are considered to be more predictable and easier to debug than uncontrolled components. They also make it easier to implement complex validation and error handling.

!52. How do you handle forms in React?
Handling forms in React can be done in a few different ways, but the most common approach is to create a controlled component for the form and its inputs. A controlled component is a component that has its state controlled by the parent component. The parent component passes the state as props to the controlled component and also handles any changes to the state via callback functions.
Here is an example of how to handle a simple form with two input fields (username and password) in a controlled component:
First, define the initial state of the form in the parent component’s constructor. For example:
</pre>
constructor(props) {
super(props);
this.state = {
  username: '' ,
  password: '',
 };
}
<pre>
Next, create callback functions for each input field that updates the corresponding state property when the input value changes. For example:
</span>
handleUsernameChange = (event) =
this.setState({username: event.target.value});
}
handlePasswordChange = (event) => {
this.setState({password: event.target.value});
}
        3. Pass the state properties and callback functions as props to the controlled form component. For example:
<Form
username={this.state.username}
password={this.state.password}
handleUsernameChange={this.handleUsernameChange}
handlePasswordChange={this.handlePasswordChange}
/>
In the controlled form component, use the passed-in props to set the value and onChange attributes of each input field. For example:
<input
type="text"
value={props.username}
onChange={props.handleUsernameChange}
/>
<input
type="password"
value={props.password}
onChange={props.handlePasswordChange}
/>
Finally, in the parent component’s form submit callback function, you can access the form data from the component’s state and handle the form submission as necessary.
Alternatively, you can use third-party libraries such as Formik, or the new hooks in react, useState and useEffect, to handle forms in a more efficient way.

It’s important to note that when you are creating forms in React, you should also validate the input values, and display appropriate error messages to users.

!53. Explain the concept of a Higher Order Component (HOC) in React.
In React, a Higher Order Component (HOC) design is used to reuse component logic. It is a function that accepts a component as an argument and outputs a new component that extends the capabilities of the input component. Without having to write duplicate code, HOCs can be used to add shared features, like authentication and data retrieval, to various components. All of the original component’s props as well as any extra props supplied to the HOC are transferred to the wrapped component. HOCs are a potent method for composing and enhancing pre-existing components without changing their original source code.

!54. What is the purpose of the mapStateToProps function in Redux?
The mapStateToProps function in Redux is a way for a component to access the current state of the store and update its props accordingly. It does this by taking the current state of the store as an argument and returning an object that maps the state to the props of the component. The returned object is then passed to the component as props, allowing it to access the state and re-render when the state changes. This function is typically defined as a separate function outside of the component and is passed as an argument to the connect function, which is used to connect the component to the store.

!55. How do you handle routing in a React application?
In a React application, routing is typically handled using a library such as React Router. React Router allows you to define specific routes for different parts of your application and map them to specific components. When the user navigates to a specific route, the corresponding component is displayed on the page.
For example, you could have a route for the homepage that maps to a “Home” component and a route for a user’s profile that maps to a “Profile” component. When the user navigates to the “/” route, the Home component would be displayed, and when they navigate to the “/profile” route, the Profile component would be displayed.
To use React Router in a React application, you’ll need to install it, import it into your application, and define your routes and the components they map to. Here’s an example of how you might set up React Router in a simple React application:
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from “./components/Home";
import profile from “./components/Profile”;
function App() {
return (
<Router>
   <Route exact path="/" component={Home} />
<Route path="/profile"” component={Profile} />
</Router>
);
}
In this example, the Router component is used to wrap the entire application and the Route component is used to define the specific routes and the components they map to. The exact prop is used to ensure that only the exact path is matched and not any subpaths.

React interview questions – Server-side and client-side rendering 

!56. Explain the difference between server-side rendering and client-side rendering in React.
In a React application, there are two main ways to render the components: server-side rendering (SSR) and client-side rendering (CSR).
Server-side rendering (SSR) is when the initial render of a React application is done on the server. The server generates the HTML for the initial state of the application and sends it to the browser. When the JavaScript bundle loads, React takes over and the application continues to function as a SPA (Single-Page Application) on the client side.
This approach has a few benefits such as:
Improved performance for search engines and users on slow connections
Faster time-to-first-byte
Better accessibility for users who have JavaScript disabled
Client-side rendering (CSR) is when the React application is rendered entirely in the browser, using JavaScript. The browser requests the JavaScript bundle from the server and then renders the components on the client side. This approach has the benefit of faster load times for users on fast connections and a more responsive user interface.

In general, CSR is the simpler option to implement and more popular, but SSR is a good choice for certain use cases, such as when SEO is a primary concern, or when the app is targeting users on slow internet connections.

It is also worth noting that, it is possible to have a hybrid approach between SSR and CSR which is called isomorphic or universal rendering. This approach allows to leverage the benefits of both SSR and CSR.

!57. How do you handle data persistence in a React application?

In a React application, data persistence can be handled using a variety of methods, including:

Local storage: This allows you to store key-value pairs in the browser’s local storage, which can be retrieved even after the user closes the browser or restarts their device.
Cookies: Cookies are small pieces of data that are stored in the user’s browser and can be accessed by the website on subsequent visits.
IndexedDB: It’s a low-level API for client-side storage of large amounts of structured data, including files/blobs.
Web SQL Database: This is a deprecated technology for storing data in a client-side database using SQL.
Server-side storage: You can also store data on a remote server using an API or a database such as MySQL, MongoDB, etc.
Redux or Mobx: State management libraries like Redux or Mobx can be used to manage and persist application state across different components and sessions.
Which one to use depends on your specific use case and requirements.


!58. What is the difference between a stateless component and a stateful component in React?

In React, a component can be either stateless or stateful. The main difference between the two is how they manage and update their data.

A stateless component, also known as a “dumb” or “presentational” component, is a component that does not maintain its own internal state. It receives data and callbacks through props (short for properties) and only renders the UI based on those props. Stateless components are typically used for simple, presentational elements that don’t need to handle any complex logic or internal state updates. They are simple functions that take props and return JSX.

A stateful component, also known as a “smart” or “container” component, is a component that maintains its own internal state. It can handle internal state updates and side effects, and may also manage the state of other child components. Stateful components are typically used for more complex elements that need to handle user interactions, API calls, or other logic. They are class components that extend React.Component.

In general, it is recommended to use stateless components as much as possible to keep the application simple and easy to understand. Stateful components should only be used when it is necessary to manage state or handle complex logic.


!59. Explain the concept of a Pure Component in React.

A “pure component” in React is a component that updates only when its properties or state have changed. In contrast, a “non-pure component” re-renders each time the parent component re-renders, regardless of whether its props or state have changed. Pure components are more productive since they do not needlessly re-render. By extending React, a component in React can be made pure. React is substituted by PureComponent. Component. This prompts the shouldComponentUpdate method, which decides whether or not to re-render, to provide an automatic shallow comparison of the component’s props and state.


!60. How do you handle optimization in a large React application?

There are several techniques that can be used to optimize a large React application:

Use the React Developer Tools to identify and fix performance bottlenecks. The React Developer Tools allow you to track the performance of individual components and identify which components are causing the most re-renders.

Use the shouldComponentUpdate lifecycle method to prevent unnecessary re-renders. This method allows you to control when a component should update based on its props and state.

Use PureComponent and memo instead of Components. These are more efficient alternatives to React.Component that only re-render when props or state have changed.

Use the useEffect hook to handle side effects. This hook allows you to run side effects, such as network requests, after a component has rendered.

Use the useMemo hook to memoize expensive calculations. This hook allows you to cache the results of expensive calculations and only recalculate them when the inputs have changed.

Lazy loading: Lazy loading is a technique where you only load the components that are needed for the current view. This can greatly improve the performance of your application.

Code splitting: Code splitting is a technique where you split your application into smaller chunks of code that are loaded on demand. This can greatly improve the performance of your application.

Optimize the loading time of your application by using techniques like code minification, compression, and caching.

It’s also important to keep in mind that performance optimization is an ongoing process and you should regularly check and optimize your application as it grows.

 

!61. What is the purpose of the combineReducers function in Redux?

The combineReducers function in Redux is used to combine multiple individual reducers into a single root reducer. In a Redux application, the state is managed by a single store and each piece of the state is managed by a specific reducer. The combineReducers function takes an object whose keys correspond to the keys in the state, and whose values are the individual reducers that will manage those parts of the state.

The combineReducers function is used to compose the different reducers that handle different parts of the state into a single root reducer. This root reducer is then passed to the createStore function to create the Redux store.

The combineReducers function is also useful for structuring and organizing your code in a more modular way, as it allows you to separate the logic for different parts of the state into different files and functions.

The combineReducers function is not mandatory to use, but it makes it easier to split the application state and the reducer functions that handle it in a more modular way and also it helps to avoid name collision if you have multiple reducer functions that handle a specific part of the state.

 

!62. How do you handle error handling in a React application?

A React application can handle errors in a few different ways. To handle problems that happen during rendering, one typical solution is to utilise a try-catch block within a component’s lifecycle functions, such as componentDidCatch. Use the Error Boundaries feature to design a component that detects errors that happen inside its child components as an alternative strategy. In addition, you may manage errors that happen inside a functional component by combining the useEffect hook with a try-catch block.

There are several ways that an error can be handled in a React application. Using a try-catch block in a component’s lifecycle routines, like componentDidCatch, is a common way to manage rendering-related issues. An alternate approach is to construct a component that detects problems that occur inside its child components using the Error Boundaries feature. Additionally, you may control errors that occur inside a functional component by combining a try-catch block with the useEffect hook.


!63. What is the difference between a smart component and a dumb component in React?

Smart Component	Dumb Component
Has state and logic	Has no state or logic
Can communicate with other components through props and callbacks	Can only receive props and emit events
Can make API calls or perform complex logic	Can only display data passed to it
Typically class-based components	Typically functional components
 
!64. Explain the concept of a Render Prop in React.

A render prop in React is a technique for conveying component logic. Instead of using a component’s props to communicate data and behaviour, a render prop is a function that a component utilises to select what to render. The “provider” component makes the render prop available, but the “consumer” component is the one that uses it. With this approach, component flexibility and reuse are enhanced.


!65. How do you handle testing in a React application?

React Testing Library is a great tool for testing React components. It’s a set of helpers that let you test React components without relying on their implementation details. This approach makes refactoring a breeze and also nudges you towards best practices for accessibility. With components, the distinction between a “unit” and “integration” test can be blurry. If you’re testing a form, should its test also test the buttons inside of it? Or should a button component have its own test suite? Should refactoring a button ever break the form test? Jest is a JavaScript test runner that lets you access the DOM via jsdom, which is an approximation of how the browser works. Jest provides a great iteration speed combined with powerful features like mocking modules and timers so you can have more control over how the code executes. It’s a great tool for running tests on React apps. You can also use a tool like BrowserStack’s Real Device Cloud to run end-to-end tests on real devices. Cross browser compatibility testing can also be done with a tool like BrowserStack Live.

!66. What are the different ways to pass data between components in React?
Data is passed as a property on the element when utilising props to communicate between components. For instance, you can do the following to send a user object from a parent component to a child component: The props object, props.user, can then be used in the child component to access the data. Data can be passed via the component tree using context rather than having to go through each level of the tree. You must establish a context object containing a Provider and a Consumer in order to use context.

The components that require the data are served by the Provider, and the components that need to access the data are served by the Consumer. Data that is local to a component can be stored in a state, which allows for the tracking of data across time. Through the useState Hook, state in a component can be obtained. The current state value and a function to update the state value are the two items of an array that the useState Hook returns after receiving an initial value.

!67. Explain the concept of a Portal in React.
A React component can be rendered outside of the DOM hierarchy of its parent component using React Portals. As an example, you could render components in a modal dialogue box, hover card, loader, or popup message, which would be in a “different place” than their parent component. The ReactDOM.createPortal() method, which accepts a React element (child) and a DOM element as inputs, is used to create React portals (container). The container is the DOM element that the child component should be rendered into, and the child component is any renderable React child, such as an element, string, or fragment. For items that must appear above all other elements, such as profile hovercards, modal dialogue boxes, and tooltips, portals are frequently utilised.

!68. How do you handle performance optimization in a React application?
There are several ways to optimize the performance of a React application, including:
Using the shouldComponentUpdate lifecycle method to prevent unnecessary re-renders of components.
Using React’s built-in PureComponent or implementing a custom shouldComponentUpdate method to optimize performance for functional components.
Using the React developer tools to profile the application and identify performance bottlenecks.
Using the React.memo method for functional components
Using React’s Context API instead of props drilling.
Using the useEffect hook to handle side effects in functional components.
Using the useCallback and useMemo hooks to prevent unnecessary re-renders and improve performance.
Lazy loading of components and code splitting.
Minimizing the number of DOM updates by using the key prop when rendering a list of items.
Using the useReducer hook to manage state updates instead of useState
Using a virtualized list library like react-virtualized, react-window etc.
It’s always a good idea to test performance with real-world use cases and user interactions before and after making any optimization.
React interview questions – functional components and class components 

!69. What is the difference between a functional component and a class component in React?
In React, a functional component is a plain JavaScript function that takes in props and returns a React element. A class component is a JavaScript class that extends React.Component and has a render method that returns a React element.

One key difference between the two is that a class component can have local state and lifecycle methods, while a functional component cannot. However, starting with React 16.8, functional components can also have a state using hooks.

Functional components are considered simpler, easier to understand and test, and have better performance than class components. Class components are useful when you need to use lifecycle methods or the local state.

!70. Explain the concept of a Context in React.
In React, context is a way to share data that is considered “global” for a component tree. It allows you to pass data through the component tree without having to pass props down manually at every level.

A component that needs to access the context data can consume it by using the useContext hook or the Consumer component. To make the context available to a component, a parent component needs to provide it using the Provider component.

Context is often used for data that is required by many components in an application, such as the currently authenticated user, the current locale, or the theme.

It should be noted that context should be used sparingly, as it can make your components more difficult to reason about and test. If possible, it’s better to pass props down the component tree manually.

!71. How do you handle asynchronous data loading in a React application?
In a React application, asynchronous data loading can be handled using a technique called “lifting state up”. This involves moving the state that manages the loading and error state of the data to a common ancestor component, and passing down the necessary callbacks and state through props to the components that need to use the data.

One popular way to handle async data loading is to use the useEffect hook in combination with fetch or a library like axios to load data in a component after it has been rendered. The useEffect hook allows you to synchronize a component with an external system, such as a server, by running a side effect (the data loading) after the component has rendered. The hook takes a callback function that contains the effect, and an array of dependencies.

Another way is to use a library like redux-thunk or redux-saga to handle the async request and store the data in the store/state. These libraries provide an easy way to handle async actions and keep the component state clean.

In either case, it’s important to keep an eye on the component’s state and update it properly with the loaded data.

A simple example of loading data asynchronously in a React component using useEffect and fetch:
import { useState, useEffect } from ‘react’;
function MyComponent() {
const [data, setData] = usestate(null);
const [error, setError] = usestate(null);
const [loading, setloading] = usestate(true);
useEffect(() => {
async function fetchData() {
try {
const response = await fetch('https://example.com/data’);
const json = await response.json();
setData(json);
setLoading(false);
} catch (error) {
setError(error) {
setLoading(fase);
    }
}
fetchData();
}, []);
if (loading) {
return <p>Loading...</p>;
}

if (error) {
return <p>Error: {error.message}</p>;
}
return <p>Data: {JSON.stringify(data)}</p>;
}
It’s important to note that this is a simple example, and in a real-world application you may need to handle more complex cases such as pagination, caching and handling different types of errors.

!72. What is the difference between state and props in React?
State and Props are both concepts in React that are used to store and manipulate data within a React component. The main difference between the two is that State is used to store and manage the data that is local and specific to a component, while Props are used to pass data from a parent component to its child components.

State is considered to be dynamic, meaning that it can change over time as a result of user interactions or other events. On the other hand, Props are considered to be static and cannot be changed by the child component. Instead, the parent component is responsible for updating the value of its Props and passing the updated value to the child component.

props and states

In summary, State is used to manage the internal state of a component, while Props are used to pass data from a parent component to its child components.


!73. Explain the concept of a Hook in React.
During an interview, you can explain Hooks in the following way:

“Hooks are a new feature in React that allows us to add state and other React features to functional components. They were introduced in React 16.8 and have since become a popular way to manage state and side effects in functional components. Hooks are named functions that start with the word use and allow us to reuse stateful logic across components without having to write a class component. For example, the useState Hook allows us to add state to a functional component and the useEffect Hook lets us perform side effects like data fetching or updating the document title. Hooks make our code more reusable, easier to understand, and easier to test.”

React interview questions – localization in react

!74. How do you handle localization in a React application?
Handling localization in a React application typically involves creating translated versions of your text content and displaying the appropriate version based on the user’s preferred language.

One way to handle localization in a React application is to use a library such as react-i18next. This library provides a set of tools for internationalization and localization, including the ability to define translation keys and their corresponding translations, as well as providing a way to switch between languages at runtime.

To use react-i18next in your React application, you would install it using npm and then configure it in your index.js file. After that, you can use the useTranslation Hook to access the translations in your components.

Here’s how you can explain localization in a React application in an interview:

“Localization in a React application involves creating translated versions of text content and displaying the appropriate version based on the user’s preferred language. To handle localization in a React application, I would use a library such as react-i18next, which provides a set of tools for internationalization and localization. With this library, I would define translation keys and their corresponding translations and provide a way to switch between languages at runtime. In my components, I would use the useTranslation Hook to access the translations and display the appropriate version of the text content.”

!75. What is the difference between a static component and a dynamic component in React?
In React, a static component is a component that is defined with a fixed set of properties or attributes and does not change during its lifecycle. A static component is defined using a simple JavaScript function that returns a tree of elements that represent the component’s UI.

A dynamic component, on the other hand, is a component that can change its properties, state or behavior based on interactions with the user or events that occur within the application. A dynamic component is typically defined using a class component or a functional component with the useState or useEffect Hooks.

Here’s an example of a static component:
function welcome(props) {
return <h1>Hello, {props.name}</h1>;
}

!76. Explain the concept of a Renderless Component in React.
A Renderless Component in React is a component that doesn’t render any HTML elements to the DOM, but instead exposes data and methods to other components through props and callbacks. The purpose of a renderless component is to encapsulate logic that can be reused across multiple components and keep the component tree lean and flexible. The other components that consume the logic provided by a renderless component can then render the HTML elements they need based on the information and functionality they receive from the renderless component. This approach separates the logic and presentation concerns, making the code easier to maintain and test.


!77. How do you handle server-side rendering in a React application?
Server-side rendering (SSR) in React involves rendering your React components on the server and sending the resulting HTML to the client. This provides a number of benefits, including improved performance and search engine optimization (SEO). To implement SSR in a React application, you can use a library like Next.js or Razzle, which provide an easy-to-use framework for handling SSR. Alternatively, you can use the ReactDOMServer API to manually render your components on the server. The key steps in the process are:

Setting up your server to handle incoming requests and render the appropriate components.
Rendering the components on the server using ReactDOMServer.renderToString or ReactDOMServer.renderToStaticMarkup.
Sending the resulting HTML to the client as part of the response.
Hydrating the components on the client so that they can be interactively controlled by the user.
It’s worth noting that SSR comes with some trade-offs and additional complexity, so it’s important to carefully consider whether it’s the right choice for your application.


!78. What is the difference between a presentational component and a container component in React?

In React, a presentational component (also known as a dumb component) is a component that focuses on UI (user interface) and presentation of the data, while a container component (also known as a smart component) is a component that focuses on how the data is being managed and provides the data for the presentational components.

A presentational component is typically written as a functional component, receiving data as props and returning a view, while a container component is typically written as a class component, handling data management and state changes, and passing down the data to the presentational components as props.

The separation of concerns between the two types of components allows for better code organization, maintenance, and testing.


!79. Explain the concept of a Custom Hook in React.
A Custom Hook in React is a JavaScript function that lets you extract state logic and behavior out of a component, and reuse it across multiple components. Custom Hooks allow you to abstract away state and behavior that is common across your application into a reusable piece of code.

Custom Hooks are named with the prefix use (e.g. useForm, useFetch), and can call other Hooks as well as your own custom Hooks. They have the same rules as Hooks and can only be called at the top level of your component or your own custom Hooks.

Custom Hooks can receive arguments and return values, just like a regular function, but they also have the ability to manage state and perform side-effects. By abstracting state and behavior into a Custom Hook, you can improve the readability and maintainability of your code.

Examples of things you can build with Custom Hooks include:

Data fetching
Managing state updates
Handling form submissions
Implementing animations and transitions
And many more.
Using Custom Hooks can make your components cleaner, more reusable, and easier to test, which makes them a powerful tool in your React toolkit.


!80. How do you handle accessibility in a React application?
Handling accessibility in a React application involves making sure that your application can be used by as many people as possible, including those with disabilities. This can be achieved through various techniques, including:

Semantic HTML: Use semantic HTML elements, such as <button>, <nav>, and <header>, to clearly define the structure and purpose of your content.
Accessible Props: Use accessible props, such as aria-label, role, and tabIndex, to provide additional information to assistive technologies, such as screen readers.
Keyboard Navigation: Ensure that all functionality can be accessed using a keyboard, and that keyboard focus is managed correctly.
Color Contrast: Make sure that the contrast between the text and the background is high enough to be readable by people with color blindness or low vision.
Alternative Text: Provide alternative text for images, videos, and other non-text elements to ensure that information is accessible to screen reader users.
Screen Reader Testing: Test your application with screen readers and other assistive technologies to identify and fix any accessibility issues.
It is important to note that accessibility is a continuous process and should be considered throughout the development of your React application. The use of tools, such as linting rules and accessibility testing tools, can also help ensure that your application is accessible.


!81. What is the difference between a reducer and an action in Redux?
In Redux, a reducer and an action are two different but related concepts.
An action is a plain JavaScript object that describes the change that should be made to the state of the application. It has a type property that defines the type of action being performed, and a payload property that provides any additional data needed to perform the action. Actions are dispatched from the application to the Redux store, which then passes the action to the reducers.

A reducer is a pure function that takes the current state of the application and an action, and returns the next state of the application. The reducer is responsible for handling the actions and updating the state accordingly. It should not perform any side-effects, such as making API calls, but should instead only return the next state.

In summary, actions describe what should change, while reducers define how the state should change in response to the actions.

!82. Explain the concept of a Higher Order Component (HOC) in React and when to use it.
A Higher Order Component (HOC) in React is a function that takes a component as an argument and returns a new component with additional props. The purpose of a HOC is to reuse logic across multiple components. An HOC is not a “part” of React, it’s a pattern in React for reusing component logic.

Use a HOC when you need to:

Share common logic between multiple components, such as data fetching or authorization.
Abstract state and behavior that can be reused across your application, into a reusable HOC.
Render a component within another component and pass props to the wrapped component.
Examples of HOCs include the withRouter HOC from react-router and the connect HOC from react-redux.

!83. How do you handle data validation in a React application?
Data validation in a React application can be handled in a variety of ways, including:
PropTypes: React provides a built-in library called PropTypes that allows you to specify the expected data types for your component’s props. PropTypes will validate the props passed to your component at runtime, and will log warnings in the browser console if any props are of the wrong type.
Custom validation functions: You can write custom validation functions to check the validity of your data. These functions can be called inside your component, and can be used to set error messages or update the state to indicate invalid data.
Third-party libraries: There are several third-party libraries available for data validation in React, such as yup, joi, or zod. These libraries provide a more powerful and flexible way to validate data, and often provide a more user-friendly way to report errors.
Regardless of the method you choose, it’s important to handle data validation in your React application to ensure that the data being processed is in the correct format and meets the required constraints. Validation helps to catch potential errors early in the development process and prevent bugs from affecting the end-user experience.

!84. What is the difference between a synchronous action and an asynchronous action in Redux?
In Redux, an action is a plain JavaScript object that describes the change in the state of the application. Actions can be either synchronous or asynchronous.

A synchronous action is an action that is dispatched and immediately processed by the Redux store. The store updates the state, and the updated state is immediately available for consumption by the components.

An asynchronous action, on the other hand, is an action that is dispatched but takes some time to complete. Asynchronous actions are typically used when performing network requests or doing other operations that take time. These actions cannot be immediately processed by the Redux store, so they require additional logic to handle their completion.

In a Redux application, asynchronous actions are often handled using middleware, such as redux-thunk or redux-saga, which allow for the dispatching of actions that represent the start and completion of asynchronous operations. These middleware provide a way to handle the asynchrony of the operation and ensure that the state is updated appropriately once the operation is complete.

!85. Explain the concept of a Virtual DOM in React.
A Virtual DOM (Document Object Model) is a lightweight in-memory representation of the actual DOM in a web page. In React, the Virtual DOM acts as an intermediary between the React component’s render output and the browser’s DOM.

When a React component’s state changes, React updates the Virtual DOM, instead of directly updating the actual DOM. This is more efficient because updating the Virtual DOM is faster than updating the actual DOM, as it can calculate the difference between the previous and current render output, and only update the parts that have changed.

React then takes the updated Virtual DOM and uses it to update the actual DOM, minimizing the amount of work that needs to be done in the actual DOM and improving the overall performance of the application.

In summary, the Virtual DOM in React acts as an optimization to increase the speed and efficiency of updates to the user interface.

!86. How do you handle browser compatibility in a React application?
To handle browser compatibility in a React application, you can use various techniques such as:
Polyfills: To support older browsers, you can use polyfills, which are JavaScript libraries that emulate missing features in older browsers.
Browser detection: You can use libraries like browser-detect to detect the user’s browser and its version, and adjust your code accordingly.
Feature detection: Instead of relying on browser detection, you can use feature detection to check if a specific feature is supported by the user’s browser before using it.
CSS Reset: You can use CSS resets like normalize.css to make sure that all browsers display the styles in a consistent way.
Testing: Regular testing in different browsers and devices is essential to catch any compatibility issues early in the development process.
By using these techniques, you can ensure that your React application runs smoothly across different browsers and devices.

!87. What is the difference between a stateful component and a stateless component in React?
In React, a stateful component, also known as a “smart” or “container” component, is a component that maintains its own internal state, typically via the useState or this.state hooks. It may also manage data that is passed down to it as props from other components, and it may use lifecycle methods, such as componentDidMount, to fetch data or perform other side effects.

On the other hand, a stateless component, also known as a “dumb” or “presentational” component, is a component that only receives data via props and does not maintain its own internal state. It simply renders the data it receives in a visually appealing way and does not manage or manipulate it in any way. These components are considered “pure” because they are only concerned with the rendering of the data and do not have side effects.

The key difference between the two is the way they manage and manipulate data. Stateful components have their own internal state and are responsible for managing and updating it, whereas stateless components simply receive data via props and render it without any data manipulation.

!88. Explain the concept of a Thunk in Redux.
A Thunk in Redux is a function that returns another function instead of a plain action object. It’s used to perform asynchronous operations and dispatch multiple actions. Thunks allow you to write action creators that return a function instead of an action. This can be useful for performing asynchronous operations, such as API calls, and dispatching multiple actions, such as one to indicate that the API call has started and another to indicate that it has finished. The inner function receives the store’s dispatch method as an argument, which can be used to dispatch actions at any point in the future. Thunks are typically implemented using a middleware, such as the redux-thunk middleware.

!89. How do you handle security in a React application?
Handling security in a React application involves multiple steps, including:

Input validation: Validate all user inputs on the client and server side to prevent any malicious data from being processed.

Authenticating and authorizing users: Use a secure authentication mechanism such as JSON Web Tokens (JWT) to ensure that only authorized users can access sensitive data.

Storing sensitive data securely: Do not store sensitive information such as passwords and credit card numbers in local storage, use encrypted storage instead.

Implementing HTTPS: Use HTTPS to ensure secure communication between the client and server and protect against network attacks such as man-in-the-middle attacks.

Keeping dependencies up-to-date: Regularly update React and its dependencies to patch any known security vulnerabilities.

Using Content Security Policy (CSP): Implement a Content Security Policy (CSP) to restrict the types of resources that can be loaded in a React application and prevent cross-site scripting (XSS) attacks.

Regular security audits: Conduct regular security audits to identify and address potential security issues in a timely manner.

!90. What is the difference between a function component and a class component in React?
In React, there are two main types of components: function components and class components.

Function Components, also known as “stateless” or “functional” components, are JavaScript functions that accept props as input and return React elements as output. They are simple, easy to understand and test, and are usually used for presentational components that don’t have their own state or lifecycle methods.

Class Components, on the other hand, are JavaScript classes that extend the React.Component base class. They are used for creating components that have a state, or need to access lifecycle methods such as componentDidMount or shouldComponentUpdate. Class components are more complex than function components, but provide more advanced features.

In summary, the main difference between function and class components in React is that function components are simpler, more straightforward, and easier to understand, while class components are more powerful and provide more advanced features, but are also more complex.

!91. Explain the concept of a Provider in React-Redux.
The “Provider” in React-Redux is a higher-order component that wraps your React application and provides it with the ability to access the Redux store. It allows you to pass the store down to your components using context, without having to manually pass it down as props through every level of the component tree.

By using the Provider, you ensure that all of your components can subscribe to the store and dispatch actions to modify its state. In other words, the Provider acts as a bridge between your React components and your Redux store, making the store accessible to all components in your application.

!92. How do you handle code splitting in a React application?
Code splitting in React can be handled using the following approaches:

Dynamic Imports: Dynamic imports allow you to load a component lazily only when it is needed. This is done using the import() syntax and provides a way to split code into smaller chunks that can be loaded on demand.
import React, { Suspense } from 'react’;
const LazyComponent = React.lazy(() => import('./LazyComponent'));
function App() {
return (
<div>
<Suspense fallback={<div>Loading...</div>}>
<LazyComponent />
</Suspense>
</div>
);
}
import React, { lazy, Suspense } from 'react’;
import { Route } from 'react-router-dom’;
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
function App() {
return (
<div>
<Suspense fallback={<div>Loading...</div>}>
<Route exact path="/" component={Home} />
<Route path="/about" component={About} />
</Suspense>
</div>
);
}
Webpack Bundle Analyzer: This is a tool that provides a visual representation of the code and its size. You can use this tool to identify the large chunks of code that can be split into smaller chunks and loaded lazily.

By using these approaches, you can effectively handle code splitting in a React application and improve its performance by reducing the initial loading time and only loading the required code on demand.

!93. What is the difference between a connected component and a component in React-Redux?
Component	    Connected Component (Higher Order Component)
Definition	  A plain React component that receives props and returns a tree of React elements.
Usage	        Used to display UI elements, manage local component state and pass props to child components.
Example	      A button, a form, a card, etc.
Connected components are higher-order components that are wrapped around plain components to provide them access to the Redux store. Connected components are used to access the state of the store and dispatch actions, whereas plain components are used to manage UI elements and local component state.

!94. Explain the concept of a Sagas in Redux.
A Saga in Redux is a way to manage side effects (e.g. asynchronous operations like data fetching and impure operations like accessing the browser cache) in a Redux application. It is implemented as a middleware using generator functions in JavaScript and runs in the background, separate from the main thread of your application, watching for actions dispatched to the store. When a specific action is detected, the Saga can perform various tasks and trigger additional actions as needed, updating the store based on the results of the asynchronous operations. The key benefit of using Sagas is that they make it easier to reason about, test, and manage the flow of data in your application.

!95. How do you handle code optimization in a large React application?
Handling code optimization in a large React application can be achieved through several approaches:

Code splitting: This allows you to split your code into smaller chunks that can be loaded on demand, reducing the initial load time of your application.
Lazy loading: Lazy loading allows you to load components only when they are required, reducing the amount of code that needs to be loaded and parsed at startup.
Use of a bundler such as Webpack: A bundler can help you optimize your code by reducing the size of your JavaScript files, combining multiple files into one, and more.
Use of caching: You can cache the data and components that are frequently used in your application to avoid fetching the same data over and over.
Use of efficient algorithms and data structures: In order to keep your application fast, it’s important to use algorithms and data structures that are optimized for performance.
Regular performance monitoring and profiling: Regular performance monitoring and profiling can help you identify performance bottlenecks and areas for improvement in your code.
Use of optimization techniques such as memoization: By using techniques such as memoization, you can reduce the number of unnecessary re-renders and computations in your application, improving its overall performance.

!96. What is the difference between a React component and a React element?
A React component is a JavaScript class or function that returns a React element. It is a reusable piece of UI that describes a part of the user interface.

A React element, on the other hand, is a plain JavaScript object that represents a DOM node. It is an immutable representation of a DOM node, which can be created using React.createElement or JSX.

In short, a component is a blueprint for creating elements, and an element is an instance of a component.

!97. Explain the concept of a Middleware in Redux.
In Redux, a middleware is a software component that sits between the store and the action dispatching process to add additional functionality, such as logging, crash reporting, handling asynchronous actions, etc. It allows you to extend the store’s behavior without modifying the store itself. Middlewares are applied using the applyMiddleware method and can be composed together to achieve a desired behavior. When an action is dispatched, it passes through each middleware in the order they were composed, giving the middleware an opportunity to interact with the action before it reaches the store. This provides a way to manipulate actions and state, and to perform complex actions that can span multiple actions.

!98. How do you handle internationalization in a React application?
Handling internationalization (i18n) in a React application involves adapting the user interface and content of the application to meet the language and cultural requirements of different locales.

There are several libraries and techniques that can be used to implement internationalization in a React application, including:

react-intl: A popular library for internationalizing React applications. It provides components for formatting dates, numbers, and strings, as well as handling pluralization and message extraction.
Context API: React’s Context API can be used to store the current locale and make it available to the components that need it. The locale can be changed dynamically to switch the language of the application.
Custom hooks: Custom hooks can be written to encapsulate the logic for formatting and retrieving messages, and to make it easier to use in components.

Here’s an example of how the react-intl library can be used to implement internationalization in a React application:
import React from 'react';
import { FormattedMessage, useIntl } from ‘react-intl';
function MyComponent() {
const intl = useintl();
return (
<div>
<p>
   <FormattedMessage id="greeting" defaultMessage="Hello, World!" />
</p>
<p>
{int1.formatDate(new Date(), {
weekday: 'long’,
year: ‘numeric’,
month: 'long’,
day: ‘numeric’,
})}
</p>
</div>
);
}
In this example, the useIntl hook is used to access the intl object, which provides internationalization functions like formatDate. The FormattedMessage component is used to display a localized message with the ID greeting.

Implementing internationalization in a React application can greatly improve the user experience for users who speak different languages and are located in different regions. It’s an important consideration for any application that aims to have a global reach.

!99. What is the difference between a React component and a React class?

When it comes to an interview, it’s important to understand the difference between React class components and functional components. This knowledge can demonstrate your understanding of React and its components, and it may also show your ability to write efficient and maintainable code.

When asked about class components, you can highlight that they are defined as JavaScript classes that extend the React.Component class, have a render method, and can have additional lifecycle methods and state. You can also provide a simple example to show your understanding of class components.

When asked about functional components, you can emphasize that they are defined as plain JavaScript functions that return the component’s JSX markup, and that they can use state and other React features with hooks. You can also give an example to show how to write a functional component that achieves the same functionality as a class component.

Finally, you can explain the trade-offs between class components and functional components, such as that functional components are generally simpler and easier to read, while class components offer more features and flexibility. Showing your ability to weigh the pros and cons of each approach can demonstrate your critical thinking skills and ability to write maintainable code.

!100. Explain the concept of a Memoization in React.

In React, memoization is a technique used to optimize the performance of a component by avoiding unnecessary re-renders. It involves caching the results of a component’s render so that if the inputs (props) to the component do not change, the cached result can be reused, instead of re-computing the result.

React provides a built-in hook called useMemo for implementing memoization. useMemo takes a function and an array of dependencies as arguments and returns a memoized value. The function is re-executed only if one or more of the dependencies have changed.

Here is an example of how useMemo can be used to memoize an expensive calculation:
import React, { useMemo } from 'react’;
function MyComponent({ data }) {
const memoizedvalue = useMemo(() => {
// Do some expensive calculation
let result = 0;
for (let i = 0; i < data.length; i++) {
result += data[i];
}
return result;
}, [data]);
return <div>The result is {memoizedvalue}</div>;
}
In this example, useMemo is used to memoize the result of the expensive calculation performed on data. The calculation will only be re-executed if the value of data changes.

Memoization can greatly improve the performance of a React application by avoiding unnecessary re-renders and re-calculations, especially when dealing with complex or large data structures.

!101. How do you handle events in React?
When building a React application, it’s common to need to respond to user actions such as button clicks, form submissions, and other events. In React, this is achieved through the use of event handlers. An event handler is a callback function that is attached to an element in the UI, and it’s executed when a specified event occurs.

For example, to handle a click event on a button, you would define a function in your React component that updates the component’s state, and then attach that function to the button as an onClick event handler.
class MyComponent extends React.Component {
constructor(props) {
super(props);
this.state = {count: 0};
}
handleclick() {
this.setstate({count: this.state.count + 1});
}
render() {
return (
<div>
<p>You clicked {this.state.count} times</p>
<button onClick={() => this.handleClick()}>
Click me
</button>
</div>
);
}
In this example, when the button is clicked, the handleClick function is called and the component’s state is updated. This causes a re-render of the component, and the displayed count is updated accordingly.

Event handlers are a key part of React’s event handling system and are used to add interactivity to your application.

!https://www.interviewbit.com/react-interview-questions/s


* /

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
*/

// ! Z:\Courses\[GigaCourse.Com] Udemy - The Ultimate React Course 2023 React, Redux & More\4. [Optional] Review of Essential JavaScript for React
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

//! Sort
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

//! Immutable Arrays
// 1) Add book object to array
const newBook = {
  id: 6,
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J.K Rowling',
};
const addBook = [...books, newBook];
addBook;

// 2) Delete book object from array
const deleteBook = addBook.filter((book) => book.id !== 3);
deleteBook;

// 3) Update book object in the array
const updateBook = deleteBook.map((book) => (book.id === 1 ? { ...book, pages: 1210 } : book));
updateBook;

//! Asynchronous JavaScript Promises
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// console.log('jonas');

//! Asynchronous JavaScript Async/Await
async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
}

getTodos();
console.log('jonas');

//! J:\Courses\[GigaCourse.Com] Udemy - The Ultimate React Course 2023 React, Redux & More\5. Working With Components, Props, and JSX
/* 
import logo from './images/logo.png';

const images = import.meta.glob('../assets/img/avatars/*');

function ImageList() {
  return (
    <ul>
      {images.map((image) => (
        <li key={image}>
          <img src={image} alt="Image description" />
        </li>
      ))}
    </ul>
  );
}

*/

//! Z:\Courses\[GigaCourse.Com] Udemy - The Ultimate React Course 2023 React, Redux & More\5. Working With Components, Props, and JSX\15. Rendering Lists
