// let total = 0, count = 1;
// while (count <= 10) {
//     total += count ;
//     count += 1;
// }
// console.log(total);

// console.log(sum(range(1, 10)));


// function factorial(n) {
//     if (n ==0 ) {
//         return 1;
//     } else {
//         return factorial(n - 1) * n;
//     }
// }

// console.log(factorial(8))
// console.log(Math.max(2, 4));

// let number = 1;
// while (number <= 12) {
//     console.log(number);
//     number = number + 2;
// }


// let result = 1;
// let counter = 0;
// while (counter < 10) {
//     result *= 2;
//     counter += 1;
// }
// console.log(result);

// for (let number = 0; number <= 12; number = number + 2) {
//     console.log(number);
// }


// let result = 1;
// for (let counter = 0; counter < 10; counter = counter + 1) {
//     result = result * 2;
// }
// console.log(result);


// for (let current = 20; ; current = current + 1) {
//     if (current % 7 == 0) {
//         console.log(current);
//         break;
//     }
// }

// const power = function(base, exponent) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//         result *= base;
//     }
//     return result;
// };
// console.log(power(2, 10));

function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent -1);
    }
}
console.log(power(2, 3));
