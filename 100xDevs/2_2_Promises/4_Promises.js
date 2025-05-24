// Promise class gives you a promise, that I will return u something in the future.

function logName() {
    console.log("Suman");
}

setTimeout(logName, 3000);

// callback based approach
// promise based approach --> cleaner way to 

// Promise Class

// Calling a promise is easy, defining your own promise is where things get hard.

/* 

    A promise in JavaScript is an object that represents the eventful completion (or failure) of
    an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more
    effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code
    that executes asynchronously, such as API Calls, file I/O, or timers.

*/

// Using a function that returns a promise
// Ignore the function definition of setTimeoutPromisifed for now

function setTimeoutPromisifed(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
    console.log("3 seconds have passed");
}

setTimeoutPromisifed(3000).then(callback)

// Syntax

// Promisified Version
setTimeoutPromisifed(3000).then(callback)

// Callback Version
setTimeout(callback, 3000);

let p = setTimeoutPromisifed(5000); // return object of the Promise class
console.log(p)

// wrapper on setTimeout, no promise logic.
function waitFor3S(resolve) { // resolve = main
    console.log(resolve); // prints function main
    setTimeout(resolve, 3000)
}

function main() {
    // after 3 second main function is called
    console.log("main is called")
}
// after 3 sec resolves called.
waitFor3S(main);
//callin the resolve after 3 second

// we can write like this

setTimeout(main, 3000)

function main() {
    console.log("main is called")
}

// transform call back to promisified version

function waitFor3S(resolve) {
    setTimeout(resolve, 10000)
}

function setTimeoutPromisifed() {
    return new Promise(waitFor3S);
}

function main() {
    console.log("main is called")
}

setTimeoutPromisifed().then(main); // promise based approach

/* 

    promise class says i will take one function as input
    whatever the first argument of this function (resolve), whenever the resolve argument is called 
    i will call whatever is passed in .then, this is what promise function class does.

*/


function random(resolve) { // resolve is also a function
    // immediately resolved
    // resolve();
    // eventually happening after 3 sec.
    setTimeout(resolve, 3000);
}
let a = new Promise(random); // supposed to return u something eventually
console.log(a) //Promise { <pending> }
// instance of a promise class is pending now

// when eventually complete please call my callback function

// using the eventual value returned by the promise
function callback() {
    console.log("promised succeded")
}
p.then(callback);

// Q. When this new promise eventually complete?
// jab aap bana rhe ho tabhi to batana padega bhai aap eventually compelte like this.


// promisified version of read file function

const fs = requrire("fs");


// creation of promise

function readTheFile(sendTheFinalValueHere) {
    // significance of first argument is
    // do ur thing, whenever u have the final value, call sendTheFinalValueHere("finalValue");
    fs.readFile("a.txt", "utf-8", function(err, data) {
        sendTheFinalValueHere(data);
    })
}

function readFile(fileName) {
    // read the file and return its value
    return new Promise(readTheFile);
}

// using a promise
const b = readFile();

function callback(contents) {
    console.log(contents);
}
b.then(callback)