// const userEmail = "s@suman.ai"

// if(userEmail) {
//     console.log("Got User Email"); // Got User Email
// } else {
//     console.log("Don't have user email");
// }

const userEmail = []
// empty array to true mann liya
if(userEmail) {
    console.log("Got User Email"); // Got User Email
} else {
    console.log("Don't have user email");
}

// falsy value 
    // false, 0, -0, BigInt, 0n, "", null, undefined, NaN
// truthy value
    // "0", "false", " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is Empty"); // Array is Empty
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// false == 0 
// true
// false == ''
// true
// 0 == ''
// true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
console.log(val1); // 5
console.log(val1); // 10
console.log(val1); // 15
console.log(val1); // 10


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")

