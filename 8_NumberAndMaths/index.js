const score = 400 // simple pattern
console.log(score) // 400
// this is also number js had identified it as a number.

// we can define as number explicitly
const balance = new Number(100)
console.log(balance); // [Number: 100]


console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00 
// toFixed is frequently used in E-commerce application

// const otherNumber  = 23.8966
// console.log(otherNumber.toPrecision(3)); // 23.9

// const otherNumber  = 123.8966
// console.log(otherNumber.toPrecision(3)); // 124 focused on first three digit

const otherNumber  = 1123.8966
console.log(otherNumber.toPrecision(3)); // 1.12e+3

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')); // 1,00,000


console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random()); // 
console.log((Math.random() * 10) + 1); // +1 to avoid 0.014
//wrapping (Math.random() * 10) for the bodmass rule.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + 10);

// (Math.random() * (max - min + 1))
// (max - min) to get the range and +1 to avoid 0
// +10 to get the minimum.