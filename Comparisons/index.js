console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1);// true

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); //false
console.log(null >= 0); //true

//The reason is that an equality check == and comaprisons ><>= <= work differently.
//Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.


console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// using strict check
console.log("2" === 2); // false