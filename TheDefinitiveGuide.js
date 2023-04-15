// let primes = [2, 3, 5, 7];

// primes[primes.length-1]
// prime[0] + primes[1]


// function fact(x) {
//     if (x > 1) return x * fact(x-1);
//     else return 1;
// }
// console.log(fact(5))


// // Arrays and objects can hold other arrays and objects:
// let points = [ // An array with 2 elements.
// {x: 0, y: 0}, // Each element is an object.
// {x: 1, y: 1}


// points[1].x - points[0].x // numbers, concatenates strings
// "3" + "2" // => "32": + add

// let x = 2, y = 3; // These = signs are assignment, not equality tests].x // => 1: more complicated operands also work

// function factorial(n) {
//     let product = 1;
//     while(n > 1) {
//         product *= n;
//         n--;
//     }
//     return product;
// }
// console.log(factorial(4))

/*
function factrial2(n) {
    let i, product = 1;
    for (i=2; i<=n; i++)
        product *= i;
    return product;
}
console.log(factrial2(5))
*/

// function square(x, log) {   // The second argument is an optional function
//     log?.(x);                   // Call the function if there is one
//     return x * x; /             / Return the square of the argument
// }


// The first comma below is part of the syntax of the let statement
// The second comma is the comma operator: it lets us squeeze 2
// expressions (i++ and j--) into a statement (the for loop) that expects 1.
// for(let i=0,j=10; i<j;i++,j--) {
//     console.log(i+j);
// }


// let count = 0;
// while(count < 10) {
//     console.log(count);
//     count++;
// }

// let i, j, sum = 0;
// for(i = 0, j = 10 ; i < 10 ; i++, j--) {
//     sum += i * j;                                                                                                                            
// }

