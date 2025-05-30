// DOM => Document Object Model.
// Document is the root of the DOM tree.

// Document API
// We want to cange the text of the first <h1> element in the document.


// 1. You neeed to first select the element that you want to change.
//  // A.tag
//  // B.class
//  // C.id (Preferred one)

// // 3.id (Preferred one)
// // let h1Element =  document.getElementById("header");
// // h1Element.innerText = "Hello World!";

// // 2. select the element with the help of the class.
// // let result = document.getElementsByClassName("header-class");
// // result[0].innerHTML = "Hello world!";


// // // Query selector.

// // document.querySelector("#header").innerHTML = "Hello world 2!";

// // // It will select the forst element that is having the className = "header-class".
// // document.querySelector(".header-class").innerHTML = "Hello world 3!";
// // document.querySelectorAll(".header-class")[1].innerHTML = "Hello world 4!";



// // // change the text of the all the avalaible html elements having className "header-class".

// // const listOfElements = document.querySelectorAll(".header-class")
// // for(let i = 0; i < listOfElements.length; i++) {
// //     listOfElements[i].innerHTML = "Latest Changes";
// // }



// //  A. The text will be converted into Hello world (wrong)
// //  B. The text won't be converted into Hello world
// //  c. ERROR



// console.log("Event Listners")

// console.log(document)
// // 1. onClick Event 

// // document.getElementById("btn")
// // .addEventListener("click", function(){
// //     console.log("Button clicked!");
// // })


// TASK
const button = document.getElementById("btn");
const container = document.getElementById("container");

// // Creating a call back function

function fetchPostsFromInternet() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((posts) => {
        posts.forEach((post) => {
            createElementsForEveryPost(post);
        })
    })
}


function createElementsForEveryPost(post) {
    // 1. Create a div element (createElement)
    const div =  document.createElement("div")
    // 2. Create a two paragraph elements
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    
    div.className = "post"
    p1.className = "body"
    p2.className = "title"

    p1.textContent = post.body
    p2.textContent = post.title

    // 3. Create a connection b'w paras and div element.
    div.appendChild(p1)
    div.appendChild(p2)

   container.appendChild(div);

   console.log(div)

}
button.addEventListener("click",function() { 
    fetchPostsFromInternet();
});





// When WE click on this button a message will be printed in the console.



// 2. OnChange.

const nameInput = document.getElementById("name");


nameInput.addEventListener("change",function(event) {
    console.log(event.target.value);
})
