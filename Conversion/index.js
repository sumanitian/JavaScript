let score = 33

console.log(typeof score); //number
console.log(typeof (score)); // number

let score1= "33"
console.log(typeof score1); // string
console.log(typeof (score1)); // string

let valueInNumber = Number(score1)
console.log(typeof valueInNumber); // number -> converted to number

let score2 = "33abc"
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2); // number
// this should be converted in the number
console.log(valueInNumber2)  // NaN

let score3 = null
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3); // number
console.log(valueInNumber3);  // 0

// this is the issue when you are matching with some 0 values.

let score4 = undefined
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4); // number
console.log(valueInNumber4);  // NaN

let score5 = true
let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5); // number
console.log(valueInNumber5);  // NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

let isLoggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1); //false

let isLoggedIn2 = "suman"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2); // true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);