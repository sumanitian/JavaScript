// JS Architecture for async code

// How JS executes asynchronous code - http://atentflip.com/loupe/

function timeout() {
    console.log("Click the button");
}

console.log("Hi!");

setTimeout(timeout, 1000);

console.log("Welcome to loupe.");

let c = 0;
// 3- 4 s
// cpu expensive operation
for (let i = 0; i<10000000000; i++) {
    c = c + i;
}

console.log("Expensive operation done");

/* 
    option 1 Correct
     Hi
     Welcome to loupe.
     Expensive operation done
     click the button
    
    option 2 Incorrect
     hi
     Welcome to loupe.
     Click the button
     Expensive operation done



*/

// Call Stack

/* 

    The call stack is a data structure that keeps track of the function calls in your program. It operates in LIFO manner, meaning the last 
    function that was called is the first one to be executed and removed from the stack.

    When a function is called, it gets pushed onto the call stack. When the function completes, it is pop

*/

// Web APIs

/* 
    Web APIs are provided by the browser (or the Node.js runtime) and allow you to perform tasks that are outside the scope
    of the javascript language itself, such as making network requests, setting timers, or handling DOM events.

*/

// Callback Queue

/*
    The callback queue is a list of tasks (callbacks) that are waiting to be executed once the call stack is empty. These
    tasks are added to the queue by Web APIs after they have completed their operation.

*/

// Event loop

/*

    The event loop constantly checks if the call stack is empty. if it is, and there are callbacks in the callback queue, it will push
    the first callback from the queue onto the call stack for execution.

*/