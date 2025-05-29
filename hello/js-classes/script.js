// Declaraing the variable.

// var keyword helps you to declare the variable.
var myName = 'Rahul';

// Reassigning the variable.

myName = 'raj';

// let and const
let age = 24;
age = 30;

// const
// ! const can't be reassigned.
const city = 'Delhi';

// Console is used to print the output in the console and It is an API 
console.log(city)

// city = 'Mumbai';

/* 1.var, let and const keywords used to create variables in JavaScript.
   2. We can reinitialize the variable using var and let keywords.
   3. const is used to declare a constant variable that cannot be reassigned.
*/

// Creating functions in javascript.

//1. using function keyword.

// function <name-of-the-function>(parameters) {
//     body of the function
// }

// This type of function declaration is called function declaration.
function greet(name) {
    console.log('firstName' + ' ' + name);
}

greet('Rahul');


//2. using var, let and const keywords.
// This type of function declaration is called function expression.
const greet2 = function(name) {
    console.log('secondName' + ' ' + name);
}
greet2('Raj');

// 3. Arrow Functions
// Structure of arrow function

// <keyword (let, const and var)> <name-of-the-function> = (parameters) => {}
//Arrow function which is used to calculate the sum of two integers.

// const sumOfTwoIntegers = (a,b) => {
//     return a + b;
// }
const sumOfTwoIntegers = (a,b) => a + b;

console.log(sumOfTwoIntegers(10, 20));


function createJuice(fruit1, fruit2) {
    return `Juice with ${fruit1} and ${fruit2}`;
}

// createJuice('Apple', 'Banana'); No need to call like this.

// 4.   Immediately Invoked Function Expression (IIFE)
// This type of function is executed immediately after it is defined.

let juice = (function createJuiceIIFE (fruit1, fruit2) {
    return `Juice with ${fruit1} and ${fruit2}`;
})('Apple', 'Banana');

console.log(juice)


let res =  (function sumOfThreeIntegers (a,b,c) {
    return a + b + c;
})(12,24,36);

console.log(res);