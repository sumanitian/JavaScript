// Functional Arguments

// write a calculator program that adds, subtracts, multiplies, divides two arguments.

// Approach#1
// Calling the respective function

function sum(a,b){
    return a + b;
}
function multiply(a, b){
    return a * b;
}
function subtract(a, b){
    return a - b;
}
function divide(a, b){
    return a / b;
}

console.log(sum(1,2));

// Approach#2 -> Passing in what needs to be done as an argument.
// Passing a function to another function as an argument.

function doOperation(a, b, op){
    return op(a, b)
}

console.log(doOperation(1, 2, sum))

// 3rd argument sum become specific thing 

function op(a,b){
    return a + b;
}