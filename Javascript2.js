// "use strict";  -- strict mode

document.getElementById("id_name");
document.getElementByTagName("a");

var mainTitile = document.getElementById("mainTitile");
console.log("This is an element of type: ", mainTitle.nodeType );
console.log("the Inner HTML is ", mainTitle.innerHTML );
console.log("Child nodes: ", mainTitle.childNOdes.length)

var myLinks = document.getElementByTagName("a");
console.log("Links: ", myLinks.length);

var myListItems = document.getElementByTagName("li");
var myFirstList = document.getElementByID("abc");
var limitedlist = myFirstList.getElementByTagName("li");

var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align", "right");

mainTitle = document.getElementById("mainTitle");
console.log(mainTitle.innerHTML);

var sidebar = document.getElementById("sidebar");
console.log(sidebar.innerHTML);

var myNewElement = document.createElement("li");
myElement.appendChild(myNewElement);
var myText = document.createTextNode("New list item text");
myNewElement.appendChild(myText);

parent.insertBefore(newElement, existingElement)

myElement.onClick = function() {
  // your event handler code
};

document.addEventListener('click', myFunction, false);
// internet exp 8 and previous
document.attachEvent('onclick', myFunction);

// when javascript is loaded initially at the beginning of the page 

function prepareEventHandlers() {
	 var myImage = document.getElementById("mainImage");
	 myimage.onclick = function() {
		alert("You clicked the image");
	 }
}

window.onload = function() {
	prepareEventHandlers();
}

console.log
console.error
console.debug
console.warn
console.info

var values = [10,20,30,40,50];
console.log(food.length);

// var reversed = values.reverse(); || join() || sort()

var myArrayOfLinks = document.getElementByTagName("a");

var foo = "55";
var myNumber = Number(foo);

if ( isNaN(myNumber)) {
	console.log("It is not a number");
}
Math.log || PI || random

STRINGS

var phrase = "This is a simple phrase.";

var words = phrase.split(" ");

var position = phrase.indexOf("simple");

if (phrase.indexOf("DDDD") == -1) {
	console.log("That word does not occur.");
}

var segment = phrase.slice(6,5);

// REFERENCE http://developer.mozilla.org/en/JavaScript/Reference


// DATE (get and set)
var today = new Date();
var y2k = new(2000,0,1,0,0,0);

today.getMonth(); // 0-11 month is 0 based 2 -- means march
today.getFullYear(); // YYY not zero-based
today.getDate(); // 1-31
today.getDay(); // 0-6  0 == sunday
today.getHours(); // 0-23
today.getTime(); // milliseconds since 1/1/11970

OBJECTS
var player1 = {name: "Fred", score: 1000, rank: 1};

function PlayerDetails () {
	// display information about each player
	console.log(this.name + "has a rank of:" + this.rank + "and a score of " + this.score);
}

player1.logDetails = playerDetails;

player1.logDetails();

while (a<10) {
	console.log(a);
	a++;
}

do {
	console.log(a);
	a++;
}while (a < 10);

for (var i = 1; i < 10; i++) {
}

for (var i =1; i < 10; i++) {
	if( i % 5 ==0) {
		continue;
	}
}

var a = 500;
var b = 600;

var highScore = (a > b)? a:b;
alert(highScore); -- 600

Number("5") == 5

square(12);


function power(base, exponent) {
var result = 1;
for (var count = 0; count < exponent; count++)
result *= base;
return result;
}
power(2, 10);
! 1024

var set = {"Spot": true};
set["White Fang"] = true;
delete set["Spot"];
"Asoka" in set;
! false


var mailArchive = {0: "Dear nephew, ... (mail number 1)",
1: "(mail number 2)",
2: "(mail number 3)"};
for (var current = 0; current in mailArchive; current++)
print("Processing email #", current, ": ", mailArchive[current]);

function range(upto) {
var result = [];
for (var i = 0; i <= upto; i++)
result[i] = i;
return result;
}
range(4);
! [0, 1, 2, 3, 4]

var doh = "Doh";
typeof doh.toUpperCase;
! "function"
doh.toUpperCase();
! "DOH"

var mack = [];
mack.push("Mack");
mack.push("the");
mack.push("Knife");
mack;
! ["Mack", "the", "Knife"]
mack.join(" ");
! "Mack the Knife"
mack.pop();
! "Knife"
mack;
! ["Mack", "the"]

for (var i = 0; i < ARCHIVE.length; i++) {
var email = ARCHIVE[i];
// Do something with this email...
}

var mailArchive = ["mail one", "mail two", "mail three"];
for (var current = 0; current < mailArchive.length; current++)
print("Processing email #", current, ": ", mailArchive[current]);

if (true == false)
print("How confusing!");
else
print("True still isn't false.");

var num = prompt("Pick a number:", "0");
if (num < 10)
print("Small");
else if (num < 100)
print("Medium");
else
print("Large");

var currentNumber = 0;
while (currentNumber <= 12) {
print(currentNumber);
currentNumber = currentNumber + 2;
}

var result = 1;
var counter = 0;
while (counter < 10) {
result = result
*
2;
counter = counter + 1;
}
result;

do {
var input = prompt("Who are you?");
} while (!input);

for (var number = 0; number <= 12; number = number + 2)
print(number);

var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
result = result
*
2;
result;

2^10

// This program finds the first number that is greater than 20 and divisible by 7:
for (var current = 20; ; current++) {
if (current % 7 == 0)
break;
}
current;

switch(prompt("What is the weather like?")) {
case "rainy":
print("Remember to bring an umbrella.");
break;
case "sunny":
print("Dress lightly.");
case "cloudy":
print("Go outside.");
break;
default:
print("Unknown weather type!");
break;
}

if (variable == "value1") action1();
else if (variable == "value2") action2();
else if (variable == "value3") action3();
else defaultAction();

/* keywords
abstract boolean break byte case catch char class const continue debugger
default delete do double else enum export extends false final finally float
for function goto if implements import in instanceof int interface long native
new null package private protected public return short static super switch
synchronized this throw throws transient true try typeof var void volatile
while with */

var name = "Bucky";
var age = 24;
var tune = "old"
document.write(name + "is my name and my age is " + age);
document.write(name+age+tuna);

function funcky() {
	alert("Ouch wat da Fuck");
}

{/* <form><input type="button" value="touch me" onclick="funcky"></form> */}

function meatball(x) {
	alert("i love " + x);
}

meatball("bacon"); // == i love bacon

function apples(one, two) {
	document.write(one + " is better than " + two + "<br />");
}

apples("Bucky", "Hobart");

function easy() {
	return "gametime";
}

document.write(easy());

function addNumbers(a, b) {
	var c = a+b;
	return c;
}

document.write(addNumbers(3, 6));

function start() {
	apples();
	addNumbers();
}

start();

var girl = " kelsy ";

function spit() {
	var boy = "bucky" ;
	document.write(girl);
	document.write(boy);
}

spit();
document.write(girl);
document.write(boy);

chop = 67;
// chop++;  === 68
// chop--   === 66

var bucky = 24;

var apples = 34;
var hotdogs = 53;

if(apples==hotdogs) {
	document.write("Yah it worked! ");
}

if(apples==hotdogs) {
	document.write("Yah it worked! ");
}else {
	document.write("I love strawberry");
}

var firstName = "bucky";
var lastName ="roberts";

NESTING
if(firstName==bucky) {
	if(lastName==roberts){
		document.write("Yah it worked! ");
	}
}


if(firstName==bucky) {
	if(lastName==roberts){
		document.write("Yah it worked! ");
	}else{
		document.write("Welcome Bucky Roberts");
	}
}

if(firstName==bucky) {
	if(lastName==roberts){
		document.write("Yah it worked! ");
	}
}else {
	document.write("I love strawberry");
}

if( (first=="bucky") && (last=="roberts") ) {
	document.write("Hey good job bucky");
}

if( (first=="bucky") || (last=="roberts") ) {
	document.write("Hey good job bucky");
}

var girl = "natalie";

switch(girl) {
	case "natalie":
		document.write("You must like Garden state");
		break;
	case "ashley":
		document.write("Fan of Twilight");
		break;
	default:
		document.write("this is the default");
}

// LOOPS
for(x=0;x<10;x++) {
	x+=3
	document.write("hey watsup <br />");
}

var x = 1;

while(x<10) {
	document.write(x + "how do you like them pples? <br />");
	x++;
}

var x =5;

do{
	document.write(x + "alo! <br />");
	x++;
}while(x<=20);

// EVENT HANDLERS
{/* <form>
	<input type="button" value="touch me" onClick="alert('ahh!');alert('eh eh!');"/>
</form>

<a href="http://wat.co.ug" onMouseOver="alert('Gametime');"> Linking </a>  // onMouseOut

<body onLoad="alert('Your website has loaded');">
</body> // onUnload */}

// ***********OBJECTS (properties and methods)*********
document.write("Hey wats up");
object.method();

function person(name, age){
	this.name = name;
	this.age = age;
}

var bucky = new person("Bucky Roberts", 24);
var taylor = new person("Taylor Swift", 20);

document.write(bucky.name);

// *************OBJECT INITIALIZERS**********
bucky = {name:"Bucky Roberts", age:24};
taylor = {name:"Taylor Swift", age:20};

document.write(bucky.name + " Loves " + taylor.name + " Because she is " + taylor.age);

// ******* Adding Methods to Objects *********
function person(name, age){
	this.name = name;
	this.age = age;
	this.yearsUntilRetire = yearsLeft;
}

function yearsLeft() {
	var numYears = 65 - this.age;
	return numYears;
}

var natalie = new people("Natalie Portman", 28);
document.write(natalie.yearsUntilRetire());

// ******** ARRAYS *******

var people = new Array("Bucky", "Tommy", "Sarah", "Hanah");
document.write(people[2]);  -- Sarah

// Creating Arrays
var things = new Array(3);
things[0] = "jersey shore"
things[1] = "brian regan"
things[2] = "thenewboston"

var stuff = new Array();

var dudes = new Array("Bucky", "Dan", "Randy");
var chicks = new Array("Lisa", "Erin", "Hannah");

document.write(dudes.length);

var people = dudes.concat(chicks);

var string1 = dudes.join(" - ")	// || (); // -- convert array to strings
document.write(string1);

document.write(dudes[2] + "<br />");
dudes.pop(); //-- deletes last element


// ********reverse push sort **********
dudes.reverse();
dudes.push("herbert");
dudes.sort();

// ***************Input Text Prompt*********
var pie = prompt("Enter your name:", "");
document.write("Hello" + pie);

// ***Add Elements using for loop ***
for(i=0;i<3;i++){
	crap[i] = prompt("Add something to the ARRAY", "");
}

// ***** Print Arrays *****
stuff.sort();
for(i=0;i<stuff.length;i++){
	document.write(stuff[i] + <br />);
}

// ****** Associative Array ******
var bucky = new Array();
bucky["color"] = "blue";
bucky["food"] = "hot pockets";
bucky["name"] = "Bucky roberts";

document.write("bucky's favprite food is " + bucky["food"]);

// *********** MATH OBJECTS ************
document.write(Math.PI); // | E 

var n = prompt("Enter a number:", "");
var answer = Math.sqrt(n);
// alert("The square root of " + n " is " + answer);

// *********** Date Object **********
function doSomething() {
	document.write("Tuna");
}

setInterval("doSomething", 1000);

function printTime(){
	var now = new Date();
	var hours = now.getHours();
	var mins = now.getMinutes();
	var seconds = now.getSeconds();
	document.write(hours+ ":"+mins+":"+seconds+"<br />");
}

setInterval("printTime()", 1000);

// ***************Accessing Forms ******************

var x = document.forms[0].length;
document.write(x);


<form name="walas">
	Username: <input type="text" name="username" />
	Password: <input type="password" name="passwd" />
	<input type="submit" value="Submit" />
	<input type="checkbox" name="thebox" />
	<input type="button" value="Press me" onClick="validator();"/>
</form>

var x = document.forms[0].elements[0].name;
document.write(x);

var x = document.walas.username.name;

// Simple Form Validation

function validator(){
	if(document.walas.thebox.checked)
		alert("Yes its checked");
	else
		alert("No its not checked");
}

/* Javascript is an Event Driven Language
As you can tell from the input examples, Javascript is an event driven language which means
your scripts react to events you set up. Your code isn't runningall the time, it simply waits until
an event starts something up! Going into all the Javascript events is beyond the scope of this
document but here's a short-list of common events to get youstarted. 
Event Description
onAbort An image failed to load.
onBeforeUnload The user is navigatingawayfrom a page.
onBlur A form field lost the focus (User moved to another field)
onChange The contents of a field has changed.
onClick User clicked on this item.
onDblClick User double-clicked on this item.
onError An error occurred while loadingan image.
onFocus User just moved into this form element.
onKeyDown A key was pressed.
onKeyPress A key was pressed OR released.
onKeyUp A key was released.
onLoad Thisobject (iframe, image, script) finished loading.
onMouseDown A mouse button was pressed.
onMouseMove The mouse moved.
onMouseOut A mouse moved offof this element.
onMouseOver The mouse moved over this element.
onMouseUp The mouse button was released.
onReset A form reset button was pressed.
onResize The window or frame was resized.
onSelect Text has been selected.
onSubmit A form's Submit button has been pressed.
onUnload The user is navigatingawayfrom a page.
 */
var userName = 'Bob';
var hello = (userName=='Bob') ? 'Hello Bob!' : 'Hello Not Bob!'; 
// var someVariable = (condition to test) ? (condition true) : (condition false);

// The question mark (?) and colon (:) tend to get lost incomplex expressions as you can see in this
// example taken from wikipedia (but whichwill also work in Javascript ifthe various variables are
// assigned...) 

for (i = 0; i < MAX_PATTERNS; i++)
c_patterns[i].ShowWindow(m_data.fOn[i] ? SW_SHOW : SW_HIDE);

/* 
This is actually an extreme simplification of what a for statement can do. On the other end of the
spectrum, consider this shuffle prototype whichwill randomly shuffle the contents of an array.
Here, everythingis defined, and executed withinthe context of the for statement itself, needing
no additional block to handle the code. 
Array.prototype.shuffle = function (){ 
for(var rnd, tmp, i=this.length; i; rnd=parseInt(Math.random()*i), tmp=this[--i], this[i]=this[rnd], this[rnd]=tmp);
}; */

/* Loops: FOR/IN
Javascript has a variant of the for loop when dealing with Javascript objects. 
Consider the following object�  */
var myObject = { 'animal'  : 'dog',
'growls'  : true,
'hasFleas': true,
'loyal'  : true }                
// We can loop through these values with the followingconstruct. 
var myObject = { 'animal'  : 'dog',
'growls'  : true,
'hasFleas': true,
'loyal'  : true }
for (var property in myObject) {
document.writeln(property + ' contains ' + myObject[property]+'<br>');
}                                 
// Outputs:
// animal contains dog
// growls contains true
// hasFleas contains true
// loyal contains true

/* What this essentiallydoes is assignthe propertyname to the variable property. We can then
access myObjectthrough an associativearray style syntax. For instance the first itteration of the
loop assigns animal to propertyand myObject["animal"] will return dog. 
There is a big caveat here in that properties and methods added by prototypingwill also show
up inthese types of loops. Therefore it's best to always check to make sure you are dealingwith
data and not a function as such�  */
for (var property in myObject) {
if (typeof(myObject[property]) != 'function') {
document.writeln(property + ' contains ' + myObject[property]+'<br>');
}
}                                 
/* The typeof check to screen out functions will ensure that your for/inloops will extract only data
and not methods that maybe added by popular javascript libraries like Prototype. 

Loops: WHILE
while loops inJavascript also follow basic C syntax and are easy to understand and use. 
The whileloop will continue to execute until its test condition evaluates to false or the loop
encounters a breakstatement.  */
var x = 1;
while (x<5) {
x = x +1;
}
var x = 1;
while (true) {
x = x + 1;
if (x>=5) {
break;
}
}
// Sometimes it makes more sense to evaluate the test condition at the end of the loop instead of
// the beginning.So for this Javascript supports a do/whilestructure. 
var x=1;
do {
x = x + 1;
} while (x < 5);

// default text reappars in the textbox after tab out
var emailField = document.getElementByID("email");

/* emailField.onFocus = function() {
	if (emilField.value == "your email") {
		emailField.value = "";
	}
};

emailField.onblur = function() {
	if (emailField.value == "") {
		emailField.value = "your email";
	}
}

setTimeout(function, 5000); //after 5s
setInterval(function, 3000); */

var myImage = document.getElementById("mainImage");

var imagArray = ["_images/overlook.jpg", "...", "", "", "", "..."];

var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

setInterval(changeImage,5000);

var intervalHandler = setInterval(changeImage,5000);

myImage.onclick = function() {
	clearInterval(intervalHandler);
}

function calculateSum(a,b,c) {
	return a+b+c;
}

var result = calculateSum();

/* FORMS
TEXTFIELDS
text.value property
//main events
onfocus
onBlur
onchange
onKeyPress
onKeydown
onKeyUp

BUTTONS
checked

SELECT LISTS
mySelect.type
(select-one or select-multiple)

select-one
mySelect.selectedIndex

select-multiple
mySelect.options[x].selected

style.display

FORM EVENTS
onsubmit
return false;

CSS and JAVASCRIPT

style  --- style.csscontent
bg-color -- bgColor
class  ---  .className = ....


javascript style guidelines */

// *****************MINIFICATION TOOLS
// JSMin
// YUI Compressor
// Google Closure Compiler

http://closure-compiler.appsort.com/home

// ****************QUALITY CHECK
// JSLint  -- at JSLint.com

// LIBRARIES
// code.google.com/apis/libraries
// ***********jQuery and jQuery UI(accordion)

document.getElementById("myDiv").classNamem = "highlight";

jQuery("#myDiv").addClass(highlight);
jQuery(".someClass")
jQuery("p")
jQuery("a")
jQuery("li")
jQuery("p.description")

/* **********HTML5 FEATURES
*************caniuse.com
Video Support
Audio Support
Canvas element
Offline storage
New form elements
Drag-and-Drop
Geolocation 
Local storage */

// document.getElementByClassName("");

// HTML5 Video and Audio in Depth -- lynda.com tutorial

//setlocalstorage["username"] = name;

//get
// var name = localstorage["username"];

// Offline Storage Web SQL IndexedDB
// HTML5: Local Storage and Offline Application in Depth -- lynda.com tutorial

// WEB WORKERS
// var worker = new Worker("anotherjsfile.js");

// get readdy to receive messages from worker
/* worker.onmessage = function(e) {
	console.log("The worker called me");
}; */

//send messages to the worker
// worker.postMessage("firstFunction");

// ******FEATURE DETECTION***
// ********modernizr.com 
// if (document.getElementByClassName) {
//   // it exist, we can use it
//   //....
// } else {
// 	// it doesn't exist on this browser
// }

// if (Modernizr.video) {
// 	// yes -- use HTML5 video
// } else {
// 	// perhaps replace with Flash video
// }

/* :first
:last
:contains
:visible
:first
 */
// jQuery("what to find").ssomeAction;

/* .addClass().
.removeClass().
.toggleClass().

alias $ -> jQuery */

// EFFECTS
// $("p").hide(4000);  // -- take 4s to hide all paragraphs

/* EVENTS
CONTENT DISTRIBUTION NETWORK(CDN)
CREATE REGULAR EXPRESSIONS */

// var myRE = /hello/;
// or
// var myRE = new RegExp("hello");

// var myString = "Does this sentence have the word hello in it?";
// if (myRE.test(myString)) {
// 	alert("Yes");
// }

// awk & sed like expr
// /^[]+@[]+\.[]{}$/

//  PREPARE TO ACCEPT THE RESPONSE
//  myRequest.onreadystatechange = function(){
// 	console.log("We were called!");
// 	// console.log(myRequest.readyState);
//  };
 
 // YHEN configure and send
//  myRequest.open("GET", "http://mysite.com/somedata.php", true);
//  myRequest.send(null);
 
//  OBJECTS AND CONSTRUCTORS(Objects Prototypes)
 
 function Player(n,s,r) {
	this.name = n;
	this.score = s;
	this.rank =r;
 }
 
//  Player.prototype.logInfo = function () {
// 	console.log("I am:", this.name);
//  }
 
//  var fred = new Player("Fred");
 
//  fred.logInfo();
 
// $( "button.continue" ).html( "Next Step..." )

/* Event Handling
Show the #banner-message element that is hidden with  display:none in its CSS when any button in #button-container is clicked. */

// var hiddenBox = $( "#banner-message" );
// $( "#button-container button" ).on( "click", function( event ) {
//   hiddenBox.show();
// });

/* Ajax
Call a local script on the server /api/getWeather with the query parameter zipcode=97201 and replace the element #weather-temp's html with the returned text. */

$.ajax({
  url: "/api/getWeather",
  data: {
    zipcode: 97201
  },
  success: function( data ) {
    $( "#weather-temp" ).html( "<strong>" + data + "</strong> degrees" );
  }
});
 