// Immediately Invoked Function Expressions (IIFE)

//global scope se pollution hoti hai kai baar jo global scope k varibale hai usko pollution ko hatane k liye likhte hai iife

// (function some(){
//     console.log(`DB CONNECTED`);
// })()

// // ()()

// ( () => {
//     console.log(`DB CONNECTED TWO`); // error
// })() 
// this function is giving error because above function is invoked immediately but does not know when to stop the context so need a semicolon ; at the end

// named iife
(function some(){
    console.log(`DB CONNECTED`); // DB CONNECTED
})();

// ()()

// unnamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); // DB CONNECTED TWO suman
})("suman")