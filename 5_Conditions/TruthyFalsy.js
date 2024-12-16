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