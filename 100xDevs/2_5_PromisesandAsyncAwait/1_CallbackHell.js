// Callback hell

/*

    Q. Write code that
        1. logs hi after 1 second
        2. logs hello 3 seconds after step 1
        3. logs hello there 5 seconds after step 2

*/

// Assume promisified does not exist

function Callback() {
    console.log("hi");
}

setTimeout(function () {
    console.log("hi");
    setTimeout(function () {
        console.log("hello");
        setTimeout(function () {
            console.log("hello there")
        }, 5000);
    }, 3000);
}, 1000);

/* 

Callback hell refers to a situation in asynchronous JavaScript code where multiple nested callbacks become difficult to read, manage, and debug. It happens when:
    Callbacks are nested inside other callbacks.
    The indentation increases with each nested level.
    Logic becomes hard to follow due to deep nesting.

*/

// if restriction is use anonymous function then you can't get rid of call back hell.

// Alt solution (doesn't really have callback hell)

function step3Done() {
    console.log("hello there");
}

function step2Done() {
    console.log("hello");
    setTimeout(step3Done, 5000);
}

function step1Done() {
    console.log("hi");
    setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);

// promisified version

function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}


setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    setTimeoutPromisified(3000).then(function () {
        console.log("hello");
        setTimeoutPromisified(5000).then(function () {
            console.log("hello there");
        })
    })
})

// it is stll call back.

// Promise Chaining (Alt Solution)

setTimeoutPromisified(1000)
    .then(function () {
        console.log("hi");
        return setTimeoutPromisified(3000);
    })
    .then(function () {
        console.log("hello");
        setTimeoutPromisified(5000)
    })
    .then(function () {
        console.log("hello there");
    });