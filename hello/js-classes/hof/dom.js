// DOM => Document Object Model.
// Document is the root of the DOM tree.

// Document API
// We want to cange the text of the first <h1> element in the document.


// 1. You neeed to first select the element that you want to change.
 // A.tag
 // B.class
 // C.id (Preferred one)

// 3.id (Preferred one)
// let h1Element =  document.getElementById("header");
// h1Element.innerText = "Hello World!";

// 2. select the element with the help of the class.
let result = document.getElementsByClassName("header-class");
result[0].innerHTML = "Hello world!";


// Query selector.

document.querySelector("#header").innerHTML = "Hello world 2!";

// It will select the forst element that is having the className = "header-class".
document.querySelector(".header-class").innerHTML = "Hello world 3!";
document.querySelectorAll(".header-class")[1].innerHTML = "Hello world 4!";



// change the text of the all the avalaible html elements having className "header-class".

const listOfElements = document.querySelectorAll(".header-class")
for(let i = 0; i < listOfElements.length; i++) {
    listOfElements[i].innerHTML = "Latest Changes";
}



//  A. The text will be converted into Hello world (wrong)
//  B. The text won't be converted into Hello world
//  c. ERROR