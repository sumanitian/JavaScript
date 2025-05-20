// JS Architecture for async code

// How JS executes asynchronous code - http://atentflip.com/loupe/

function timeout() {
    console.log("Click the button");
}

console.log("Hi!");

setTimeout(timeout, 1000);

console.log("Welcome to loupe.");