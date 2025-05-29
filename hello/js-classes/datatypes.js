// 1. Number

let num = 12.5; // They don't have any range you can store big numbers;
let num2 = 19;

let primeNumber = 7;

// 2. STRING

let firstName = "Rahul";
let surName = 'Chhabra';

let qualification = "B.Tech in Computer Science";


// 3. Boolean
let isPrime = true;
let isEven = false;

// undefined.


console.log(age)
var age = 20;
console.log(age)


var containsUndefined = undefined;


// What if I try to log vriables before
// even declared.....


// console.log(fullName); // ""

// Reason -> getFullName is allocated
 // memory before the execution of the code.


console.log(getFullName()); 

function getFullName() {
    var fullName = "Rahul Chhabra";
    return fullName;
}

console.log(getFullName()); 


someFunctionWhichIsNotCreated();




function someFunctionWhichIsNotCreated() {
    console.log("This is a function which is not created yet.");
    return "This is a function which is not created yet.";
}



// previously we were using var keyword to declare variables.

// !Will discuss in hoisting.
// console.log(genspark);

// const genspark = "Genspark Academy";



// object

// information is a variable which is an object.
let information = {
    firstName : "Rahul",
    lastName : "Chhabra",
    age : 24,
    gender: "Male",
    qualification:"B.Tech in Computer Science",
}
console.log(information);
// information.firstName = "Raj";
// information['lastName'] = "Raj";
// console.log(information);

let otherInformation = information;

let oneMoreInformation = otherInformation;

let anotherInformation = {
    firstName : "Rahul",
    lastName : "Chhabra",
    age : 24,
    gender: "Male",
    qualification:"B.Tech in Computer Science",
}
oneMoreInformation = anotherInformation;
oneMoreInformation.firstName = "ABCD";
console.log(information.firstName);

console.log(oneMoreInformation.firstName)



// Arrays

const fruits = ["Apple", "Banana", "Orange", "Mango",undefined,10,true, {name: "Grapes", color: "Green"}];

console.log(fruits[7].name)


// forEach

fruits.forEach((fruit,index) => {
    console.log("John" + " likes " + fruit + " at index " + index);
})

// revised deadline ==> before 10 AM on upcoming Tuesday
// Milestone 1
//      Trello App

// Milestone 2
//      AuthMicroservice (Info available in the chat)
// Milestone 3
//      ADD testing to the Auth Microservice.