// ------------ Run node.js service with systemd -------------------
// /opt/nodeserver/server.js
const http = require('http');

const hostname = '0.0.0.0'; // listen on all ports
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("Hello World\n");
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

node /opt/nodeserver/server.js
Create /etc/systemd/system/nodeserver.service
/*
[Unit]
Description=Node.js Example Server
#Requires=After=mysql.service       # Requires the mysql service to run first

[Service]
ExecStart=/usr/local/bin/node /opt/nodeserver/server.js
# Required on some systems
#WorkingDirectory=/opt/nodeserver
Restart=always
# Restart service after 10 seconds if node service crashes
RestartSec=10
# Output to syslog
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=nodejs-example
#User=<alternate user>
#Group=<alternate group>
Environment=NODE_ENV=production PORT=1337

[Install]
WantedBy=multi-user.target

sudo systemctl enable nodeserver.service
sudo systemctl start nodeserver.service
sudo systemctl status nodeserver.service
sudo systemctl daemon-reload
sudo systemctl restart nodeserver.service
sudo systemctl status nodeserver.service
*/



// https://medium.com/bb-tutorials-and-thoughts/how-to-write-production-ready-node-js-rest-api-javascript-version-db64d3941106

//! Fullstack React with TypeScript: Learn Pro Patterns for Hooks, Testing, Redux, SSR, and GraphQL

// https://www.bezkoder.com/react-node-express-postgresql/
// https://www.bezkoder.com/react-crud-web-api/
// www.bezkoder.com/integrate-react-express-same-server-port/

// netstat -aof | findstr :8081
// netstat -ano | findstr :8081
// netstat -aon | find /i "listening"
// tasklist /fi "pid eq 8081"
// netstat -aon | find /i "listening" |find "8081"
// for /f "tokens=5" %a in ('netstat -aon ^| findstr :8081') do tasklist /FI "PID eq %a"
// taskkill /F /PID 3312

// NodeJS/kindson-restapi { all methods work: ***** }
// REST stands for REpresentational State Transfer
// Sequelize is a promise-based NodeJS ORM
// CORS stands for Cross Origin Resource Sharing
// EJS stands for Embedded JavaScript
// SuperSimpleDev -- YouTube Channel 4 Web Dev't
// fragments not needed in current react instead use "<></>"

// INSERT INTO "public"."users" ("id", "firstname", "lastname", "location") VALUES (1, 'Kindson', 'Munonye', 'Budapest') RETURNING *

// Projects 4 Self-Taught
// 1.Portfolio Website
// 2.App with Login
// 3.Incorporate External APIs

// ----- Cloud Computing -----
// Iaas --> Infrastructure as a Service (Rent) { AWS, Google Cloud, MS Azure }
// Paas --> Platform as a Service { AWS Elastic Beanstalk, App Engine, App Service }
// SaaS --> Software as a Service { twilio }
// Load Balancer, // Microservices
// Image Upload: { Blob Storage(AWS S3) + CDN (AWS Cloudfront) --> secondary DBs }
// Text Search: { Elasticsearch --> secondary DB }
// Speeding up Primary Database -> Cache: { redis }
// Data Science: { Analytical Database (Snowflake) }
// Scheduled Tasks: { RabbitMQ }
// JavaScript --> { Framework: ReactJS, Bundler: Webpack, Transpiler: TypeScript }
// CSS --> Preprocessor ( Bundler + Transpiler ) { SASS, Framework: Bootstrap }
// XMLHttpRequest --> { axios, fetch }
// JavaScript Frameworks --> {
// 1. Rendering       -> View
// 2. Data Handling   -> Model
// 3. Event Handling  -> Controller

// https://www.section.io/engineering-education/ten-tips-for-working-with-nodejs/
// 1. Understand the Node.js Package Manager (NPM)
// 2. Understand the A to Z Most Useful Node.js Modules and Frameworks
// 3. The Node.js HTTP Server Module
// 4. Embracing Asynchronous Node.js Functions
// 5. Handling Node.js Errors
// 6. Debugging Node.js Programs
// 7. Always Keep Your Code Simple and Light
// 8. Security practices for your server
// 9. Deploying Your Node.js Application
// 10 Monitoring Your Node.js Application

// https://www.section.io/engineering-education/debug-nodejs-vscode/

// npm install nodemon --save-dev
// npm list --depth=0
// npm outdate
// npm update
// npm uninstall moment
// npm list -g --depth=0
// package-lock.json
// npm audit fix
// npm cache clean --force
// var express = require('express'); --> app.js
// Axios, moment, express, Nodemon, Gulp, Async, Lodash, JSHint, Browserify, Nodemailer, Restify
// https: var app = express();

// app.listen(3000, () => {
//   console.log('Application started and Listening on port 3000');
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// const moment = require('moment');
// const today = moment();
// console.log(today.format());

{
  /* <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <script>
        // You have a 'moment' global here
         const today = moment();
         console.log(today.format());
        </script> */
}

// https://www.smashingmagazine.com/2019/02/node-api-http-es6-javascript/

// https://www.smashingmagazine.com/2020/04/express-api-backend-project-postgresql/
// .editorconfig
// root = true
// [*]
// indent_style = space
// indent_size = 2
// charset = utf-8
// trim_trailing_whitespace = false
// insert_final_newline = true
// README.md
// .gitignore
// node_modules/
// yarn-error.log
// .env
// .nyc_output
// coverage
// build/
// express-generator
// express -f
// "start": "node ./src/bin/www"
// ES5 (routes/index.js)
// var express = require('express');
// var router = express.Router();
// router.get('/', function(req, res, next) {
//   return res.status(200).json({ message: 'Welcome to Express API template' });
// });
// module.exports = router;

// ES6
// import express from 'express';

// const indexRouter = express.Router();

// indexRouter.get('/', (req, res) =>
//   res.status(200).json({ message: 'Welcome to Express API template' })
// );

// export default indexRouter;

// Create a file named nodemon.json at the root of your project and add the code below:
// {
//     "watch": [
//       "package.json",
//       "nodemon.json",
//       ".eslintrc.json",
//       ".babelrc",
//       ".prettierrc",
//       "src/"
//     ],
//     "verbose": true,
//     "ignore": ["*.test.js", "*.spec.js"]
//   }

// Now create the .eslintrc.json file in the project root and add the below code:
// {
//     "env": {
//       "browser": true,
//       "es6": true,
//       "node": true,
//       "mocha": true
//     },
//     "extends": ["airbnb-base"],
//     "globals": {
//       "Atomics": "readonly",
//       "SharedArrayBuffer": "readonly"
//     },
//     "parserOptions": {
//       "ecmaVersion": 2018,
//       "sourceType": "module"
//     },
//     "rules": {
//       "indent": ["warn", 2],
//       "linebreak-style": ["error", "unix"],
//       "quotes": ["error", "single"],
//       "semi": ["error", "always"],
//       "no-console": 1,
//       "comma-dangle": [0],
//       "arrow-parens": [0],
//       "object-curly-spacing": ["warn", "always"],
//       "array-bracket-spacing": ["warn", "always"],
//       "import/prefer-default-export": [0]
//     }
//   }

// Create a file named .prettierrc and add the code below:
// {
//     "trailingComma": "es5",
//     "tabWidth": 2,
//     "semi": true,
//     "singleQuote": true
//   }

// Now add the following scripts to your package.json:
// # add these one after the other

// "lint": "./node_modules/.bin/eslint ./src"

// "pretty": "prettier --write '**/*.{js,json}' '!node_modules/**'"

// "postpretty": "yarn lint --fix"

// Now, create the settings.js file inside the src/ folder and add the below code:
// import dotenv from 'dotenv';
// dotenv.config();
// export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
// Open src/routes/index.js and replace the code with the one below.
// import { testEnvironmentVariable } from '../settings';

// https://picsum.photos/id/0/info
// https://picsum.photos/
// Open src/middleware/middleware.js and add the below function:
// export const performAsyncAction = async (req, res, next) => {
//   try {
//     await axios.get('https://picsum.photos/id/0/info');
//     next();
//   } catch (err) {
//     next(err);
//   }
// };

// Open src/app.js and add the below code just before the export default app line.
// app.use((err, req, res, next) => {
//   res.status(400).json({ error: err.stack });
// });

// export default app;

// heroku login
// heroku create app-name
// https://app-name.herokuapp.com/ | https://git.heroku.com/app-name.git
// git remote add heroku https://git.heroku.com/my-shiny-new-app.git
// heroku logs --tail
// heroku config:set TEST_ENV_VARIABLE="Environment variable is coming across."
// heroku config:set CONNECTION_STRING=your-db-connection-string-here.
// heroku config:set NPM_CONFIG_PRODUCTION=false
// heroku config
// git push heroku
// heroku open /v1
// heroku open /v1/messages
// yarn runQuery
// heroku run yarn runQuery

//! ------------- How To Build a REST API With Nodejs and PostgreSQL ----------------------
// https://www.crowdbotics.com/blog/how-to-build-a-rest-api-with-nodejs-and-postgresql
// Sequelize. Sequelize is a promise-based Node.js ORM (https://sequelize.org/)
// {REST: REpresentational State Transfer}

// mkdir rest-api-nodejs-postgresql
// cd rest-api-nodejs-postgresql
// npm init --yes
// npm install -S express
// npm i -D nodemon
// package.json
// "scripts": {
//     "start": "nodemon server.js"
// }
// npm run start
// npm install -S sequelize-cli
// npm install -S sequelize sequelize-cli
// .sequelizerc
// sequelize init
// npx sequelize init  (this works)
// npm install -S pg pg-hstore
// createdb -U postgres -p 5433 -W todos
// npx sequelize model:create --name Todo --attributes title:string
// npx sequelize model:create --name TodoItem --attributes content:string,complete:boolean
// npx sequelize db:migrate

// npm config get prefix
// npm config set prefix /usr/local

//! Creating a REST API Backend using Node.js, Express and Postgres
// https://www.geeksforgeeks.org/creating-a-rest-api-backend-using-node-js-express-and-postgres/

// create database gfgbackend;
// \c gfgbackend;
// create table test(id int not null);
// insert into test values(1);
// insert into test values(2);
// select * from test;
// mkdir gfg && npm init
// npm install --save express
// npm install --save pg
// npm install --save pg-hstore
// touch indexe.js
// npm install --save body-parser
// http://localhost:3000/testdata

// var http = require('http');

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World!');
//   })
//   .listen(8080);

//! ----------- CRUD REST API with Node.js, Express, and PostgreSQL -----------
// https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
// Representational State Transfer (REST)
// RESTful API is an API that conforms to the REST architectural style and constraints.
// brew install postgresql
// brew services start postgresql
// brew services stop postgresql
// \conninfo
// CREATE ROLE me WITH LOGIN PASSWORD 'password';
// CREATE ROLE bhargavbachina WITH LOGIN PASSWORD 'password';
// ALTER ROLE me CREATEDB;
// ALTER ROLE bhargavbachina CREATEDB;
// \du -- list roles
// psql -d postgres -U me
// postgres=> CREATE DATABASE api;
// \c api
// CREATE TABLE users (
//     ID SERIAL PRIMARY KEY,
//     name VARCHAR(30),
//     email VARCHAR(30)
// );
// INSERT INTO users (name, email)
//   VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');
// SELECT * FROM users;
// mkdir node-api-postgres
// cd node-api-postgres
// npm i express pg

// GET: / | displayHome()
// GET: /users | getUsers()
// GET: /users/:id | getUserById()
// POST: /users | createUser()
// PUT: /users/:id | updateUser()
// DELETE: /users/:id | deleteUser()

// POST: Inserting empty fields (look into it later)

//! How To Use PostgreSQL With Node.js on Ubuntu 20.04
// https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-node-js-on-ubuntu-20-04

// mkdir node_pg_app
// cd node_pg_app
// npm init -y
// npm install pg
// sudo -u postgres psql
// CREATE USER fish_user WITH PASSWORD 'password';
// CREATE DATABASE fish OWNER fish_user;
// sudo -u fish_user psql -d fish
// CREATE TABLE shark(
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(50) NOT NULL,
//     color VARCHAR(50) NOT NULL
// );

//! How to Build NodeJS REST API with Express and PostgreSQL
// https://medium.com/bb-tutorials-and-thoughts/how-to-build-nodejs-rest-api-with-express-and-postgresql-674d96d5cb8f
// npm run dev
// npm install swagger-ui-express swagger-jsdoc --save

//!-------------------------- How to Set up a TypeScript + NodeJs Server (2023) -----------------------
// https://medium.com/before-semicolon/how-to-setup-a-typescript-nodejs-server-2023-16f3874f2ce5
// mkdir typescript-nodejs
// cd typescript-nodejs
// git init
// npm init -y
// mkdir src
// npm install -D typescript @types/node
// The @types/node pretty much sets up types for the entire node itself.
// We can now create the ts-config.json file by running:
// npx tsc --init
// src/index.ts
// package.json
// "scripts": {
//   "build": "tsc"
// }
// npm run build
// "scripts": {
//   "build": "tsc",
//   "start": "node src"
// }
// npm install -D nodemon rimraf npm-run-all ts-node
// "scripts": {
//   "clean": "rimraf ./build",
//   "build": "npm run clean && tsc",
//   "start": "node src",
// }
// "local": "ts-node src",
// "local:watch": "nodemon src -e ts,json --exec 'npm run local'",
// npm run local:watch

// npx nodemon ./main.ts
// nodemon app.js 5000
// npx nodemon --watch src
// nodemon.json
// npx ts-node myScript.ts
// npx ts-node --version
// {
//   "execMap": {
//       "ts": "ts-node"
//   }
// }
// nodemon index.ts

// npm i -D supertest @types/supertest jest @types/jest ts-jest
// jest.config.js
// module.exports = {
//   transform: {
//     '^.+\\.ts?$': 'ts-jest',
//   },
//   testEnvironment: 'node',
//   testRegex: './src/.*\\.(test|spec)?\\.(js|ts)$',
//   moduleFileExtensions: ['ts', 'js', 'json'],
//   roots: ['<rootDir>/src'],
// };
// index.test.ts
// npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint prettier eslint-config-prettier
// .eslintrc
// .gitignore

//! --------------- Building a RESTful Web API in Node.js using PostgresSQL and Express ------------
// https://www.section.io/engineering-education/restful-web-api-using-nodejs-postgressql-and-express/
// npm install cors ejs express pg
// npm install --save-dev nodemon
// CREATE DATABASE my_todos_db;
// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   title VARCHAR(100) NOT NULL,
//   checked  Boolean NOT NULL
// );

//! ----------------- Node.js Express & PostgreSQL: CRUD Rest APIs example with Sequelize ------------------
// https://www.bezkoder.com/node-express-sequelize-postgresql/
// Method   Urls                       Actions
// GET      api/tutorials              get all Tutorials
// GET      api/tutorials/:id          get Tutorial by id
// POST     api/tutorials              add new Tutorial
// PUT      api/tutorials/:id          update Tutorial by id
// DELETE   api/tutorials/:id          remove Tutorial by id
// DELETE   api/tutorials              remove all Tutorials
// GET      api/tutorials/published    find all published Tutorials
// GET      api/tutorials?title=[kw]   find all Tutorials which title contains 'kw'

//! ---------------------- React + Node.js + Express + PostgreSQL example: Build a CRUD App ------------------
// https://www.bezkoder.com/react-node-express-postgresql/
// Node.js Express Back-end

/*
Methods	        Urls	                    Actions
GET	            api/tutorials	            get all Tutorials
GET	            api/tutorials/:id	        get Tutorial by id
POST	          api/tutorials	            add new Tutorial
PUT	            api/tutorials/:id	        update Tutorial by id
DELETE	        api/tutorials/:id	        Tutorial by id
DELETE	        api/tutorials	            remove all Tutorials
GET	            api/tutorials?title=[kw]	find all Tutorials which title contains 'kw'
*/

// npm install express sequelize pg pg-hstore body-parser cors --save
// npm install express sequelize pg pg-hstore cors --save
// npm i -D nodemon

// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and re-sync db.');
// });

// ALTER TABLE tutorial RENAME TO bezkoder;

// npx create-react-app react-crud
// npm install bootstrap
// npm install react-router-dom
// npm install axios

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//! React Typescript example Project with Axios and Web API
// https://www.bezkoder.com/react-typescript-axios/

// npx create-react-app react-axios-typescript-example --template typescript
// npm install bootstrap
// npm install @types/react-router-dom
// npm install axios
// npm cache clean --force
// npm install --save-dev @types/react-router-dom@latest

//! Fullstack React with TypeScript { E-Book } -- PDF of 2022 yet to be released
// nvm install --lts {: nvm-windows}

// Defining Custom Types in TypeScript
// type User = {
//   firstName: string,
//   lastName: string,
// };

// function greet(user: User) {
//   return `Hello ${user.firstName} ${user.lastName}`;
// }

// import PropTypes from 'prop-types';

// const Greeting = ({ name }) => {
//   return <h1>Hello, {name}</h1>;
// };

// Greeting.propTypes = {
//   name: PropTypes.string,
// };

//! -------------------- Learn React with TypeScript { E-Book } --------------
// https://babeljs.io/repl
// https://codesandbox.io/
// JSX
// function App() {
//   return (
//     <div className="App">
//       <Alert type="information" heading="Success">
//         Everything is really good!
//       </Alert>
//     </div>
//   );
// }
