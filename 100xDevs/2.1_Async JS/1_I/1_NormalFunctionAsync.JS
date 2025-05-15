// Normal function in JS
// The way to write functions in JS is as follows -
// -------------------------------------------------------------------

// this is a synchronous code 

// when the code is begin to run it runs line by line.

// What is Synchronous Code
// Synchronous code is executed line by line, in the order it's written.
// Each operation waits for the previous one to complete before moving on
// to the next one.
// for example
// -------------------------------------------------------------------


// Find sum of two numbers

function sum(a,b){
    return a + b;
}
let ans = sum(2,3)
console.log(ans); // 5

let ans1 = sum("20", 30)
console.log(ans1) // 2030

// Solution is to parse it to a number or use typescript
// return parseInt(a) + parseInt(b);

// Think how threads work

// ------------------------------------------------------------------

// Find sum from 1 to a number

// 1 => n
// 2 => 1+2 =3
// 5 => 1+2+3+4+5 = 15

function sum(n){
    let ans3 = 0;
    // complicated way
    for (let i = 1; i <= n; i++){
        ans3 = ans3 + i
    }
    return ans3;

    // smart way
    // return n * (n + 1);

}
const ans3 = sum(10);
console.log(ans3);

// --------------------------------------------------------------------



