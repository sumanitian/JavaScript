const name = "suman"
const repoCount = 50

// console.log(name + repoCount +" value"); // outdate syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Hello my name is suman and my repo count is 50

const gameName = new String('Suman') // other way to declare string
// this syntax have a key value pairs structure.
// when you hit this variable name in the browser console you will be able to see key pairs and various methods.
console.log(gameName) // [String: 'Suman']

console.log(gameName[0]); // 5

console.log(gameName.__proto__); // {}

console.log(gameName.length); // 5

console.log(gameName.toUpperCase()); // this will not change the original value.
// SUMAN

console.log(gameName.charAt(2)); // m
console.log(gameName.indexOf('m')); // 2

// slicing

const newString = gameName.substring(0, 4)
console.log(newString); // Suma
// if you pass negative in substring it will not obey

const anotherString = gameName.slice(-4, 4)
console.log(anotherString) // uma

// Triming: it works on white space characters plus line-terminators.

const newStringOne = "   Suman    "
console.log(newStringOne); // output with having both side space
console.log(newStringOne.trim()); // it will remove the spaces.

// Replace

const url = "https://suman.com/suman%20prasad"
console.log(url.replace('%20', '-')) // https://suman.com/suman-prasad

console.log(url.includes('suman')) // true

const a = "suman-prasad";
console.log(a.split('-')); // [ 'suman', 'prasad' ]

// we can split based on the space as well.