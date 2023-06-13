console.log('\u{1F600}');

const colors = ['red', 'green', 'blue'];
const items = colors.map((color) => `<li>${color}$</li>`);
console.log(items);

// When functions are assigned to the properties of an object, we call
// them "methods." All JavaScript objects (including arrays) have methods:
let a = []; // Create an empty array
a.push(1, 2, 3); // The push() method adds elements to an array
a.reverse(); // Another method: reverse the order of elements
// We can define our own methods, too. The "this" keyword refers to the object
// on which the method is defined: in this case, the points array from earlier.
points.dist = function () {
  // Define a method to compute distance between points
  let p1 = this[0]; // First element of array we're invoked on
  let p2 = this[1]; // Second element of the "this" object
  let a = p2.x - p1.x; // Difference in x coordinates
  let b = p2.y - p1.y; // Difference in y coordinates
  return Math.sqrt(
    a * a + // The Pythagorean theorem
      b * b
  ); // Math.sqrt() computes the square root
};
points.dist(); // => Math.sqrt(2): distance between our 2 points

// JavaScript statements include conditionals and loops using the syntax
// of C, C++, Java, and other languages.
function abs(x) {
  // A function to compute the absolute value.
  if (x >= 0) {
    // The if statement...
    return x; // executes this code if the comparison is true.
  } // This is the end of the if clause.
  else {
    // The optional else clause executes its code if
    return -x; // the comparison is false.
  } // Curly braces optional when 1 statement per clause.
} // Note return statements nested inside if/else.
abs(-10) === abs(10); // => true
function sum(array) {
  // Compute the sum of the elements of an array
  let sum = 0; // Start with an initial sum of 0.
  for (let x of array) {
    // Loop over array, assigning each element to x.
    sum += x; // Add the element value to the sum.
  } // This is the end of the loop.
  return sum; // Return the sum.
}
sum(primes); // => 28: sum of the first 5 primes 2+3+5+7+11
function factorial(n) {
  // A function to compute factorials
  let product = 1; // Start with a product of 1
  while (n > 1) {
    // Repeat statements in {} while expr in () is true
    product *= n; // Shortcut for product = product * n;
    n--; // Shortcut for n = n - 1
  } // End of loop
  return product; // Return the product
}
factorial(4); // => 24: 1*4*3*2
function factorial2(n) {
  // Another version using a different loop
  let i,
    product = 1; // Start with 1
  for (
    i = 2;
    i <= n;
    i++ // Automatically increment i from 2 up to n
  )
    product *= i; // Do this each time. {} not needed for 1-line loops
  return product; // Return the factorial
}
factorial2(5); // => 120: 1*2*3*4*5

class Point {
  // By convention, class names are capitalized.
  constructor(x, y) {
    // Constructor function to initialize new instances.
    this.x = x; // This keyword is the new object being initialized.
    this.y = y; // Store function arguments as object properties.
  } // No return is necessary in constructor functions.
  distance() {
    // Method to compute distance from origin to point.
    return Math.sqrt(
      // Return the square root of x² + y².
      this.x * this.x + // this refers to the Point object on which
        this.y * this.y // the distance method is invoked.
    );
  }
}
// Use the Point() constructor function with "new" to create Point objects
let p = new Point(1, 1); // The geometric point (1,1).
// Now use a method of the Point object p
p.distance(); // => Math.SQRT2

/* as const export get null target void
    async continue extends if of this while
    await debugger false import return throw with
    break default finally in set true yield
    case delete for instanceof static try
    catch do from let super typeof
    class else function new switch var
    enum implements interface package private protected public */

var numbers = [33, 54, 76, 34, 2, 6];
numbers.forEach(function (number) {
  console.log(number);
});
