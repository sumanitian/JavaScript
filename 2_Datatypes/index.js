"use strict"; //treat all JS code as newer version

// alert("hello")
// alert(3 + 3)
// we are using node js, not browser

// console.log(3 + 3) console.log("Suman")
console.log(3 + 3); console.log("Suman")

// code readiablity


// mdn is the documentation of mozilla organization

// tc39.es this is original documentation


let name = "suman"
let age = 23
let isLoggedIn = false

// Primitive Data Types
// number => 2^53
// bigint => used in trading, stockmarket etc
// string => ""
// boolean => true/false
// null => standalone value. Representation of empty value
// undefined => value aap ne nhi define ki
// symbol => unique

console.log(typeof "suman"); // string
console.log(typeof age); // number

console.log(typeof null);  // object
console.log(typeof undefined); // undefined. ye apne aap me type


// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const loggedIn = false
const outsideTemp = null
let userEmail;  // undefined

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id === anotherId); //false

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ['shaktiman', 'naagraj', 'doga'];
let myObj = {
    name: "suman",
    age: 22,
} // inside the curly braces all are objects.

const myFunction = function(){
    console.log("hello");
}
