// You will explore things about higher order component
// higher order function



// A higher Order function 
    // is a function that takes a function as an argument or return a function as a result.

    // higher order function.

    function callBackFunction() {
        console.log("I am a callback function");
    }

    // This is a higher order function....
    function MakeCounter(callBackFunction) {
        callBackFunction();
    }
    MakeCounter(callBackFunction);
 

    function CreateCounter() {
        let count = 0;
        return function() { return ++count }
    }

    const returnedFuntion = CreateCounter();
    console.log(returnedFuntion()); // 1
    console.log(returnedFuntion()); // 2
    console.log(returnedFuntion()); // 3




    /*
    line 1 (completed)
    line 2 (complted)
    line 3 (completed)
    line 4 making a n/w request to get the posts from the internet (take some extra time) (skip)
    we can use a callback function to print the information. 

    line 5 (complete)
    line 6 (complete)
    ..

    ...
    */