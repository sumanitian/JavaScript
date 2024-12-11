let value = 3
let negValue = -value
// console.log(negValue); // -3

// console.log(2 + 2) // 4
// console.log(2 - 2); // 0
// console.log(2 * 2); // 4
// console.log(2 ** 3); // 8
// console.log(2 % 3); // 2

let str1 = "hello"
let str2 = " suman"

let str3 = str1 + str2
console.log(str3); // hello suman

console.log( "1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + "2"); // 12

console.log("1" + 2 + 2); // 122  if first is string then all in string.
console.log(1 + 2 + "2"); // 32 if first is num then add then concatenate

console.log(true); // true
console.log(+true); // 1

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // readiability is very bad

let gameCounter = 100
// gameCounter++;
// console.log(gameCounter) // 101

++gameCounter;
console.log(gameCounter) // 101

let num = 1
let str = "1"

console.log(num === str)
console.log(num == str)

let age = 17;
let status = (age >= 18) ? "yes vote" : "No Vote"
console.log(status)


console.log(false || true);
console.log(false || "suman"); // falsy or truthy wala concept.
console.log(false || 5 || 8); // concept of short circuting.
// agar pahila truthy value mil gaya phir wo aage check nhi krta hai.

