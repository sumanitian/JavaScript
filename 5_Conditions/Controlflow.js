// if
// = assignment
// == check
// != not equal
// === strict checking it checks type as well.

// if (2 == "2"){
//     console.log("Executed")
// }

// if (2 === "2"){
//     console.log("Executed")
// }

const temperature = 6
if(temperature < 10){
    console.log("less than 10") // less than 10
}
console.log("temperature is greater than 10"); // temperature is greater than 10

// this will get executed as it is not in the scope of if

// we can perform with else

if(temperature < 10){
    console.log("less than 10") // less than 10
} else {
    console.log("temperature is greater than 10");
}

// scope releated
const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User Power: ${power}`);
}
// upto this braces this code will run smoothly
// but after this braces if i put this console message we will get error

// console.log(`User Power: ${power}`);// power is not define
// if it has been declared by var then it will become global but that is the biggest problem.


// Short Hand Notation

const balance = 1000
// implicit scope
// we can write the multiple line but scope will be same 
// if(balance > 500) console.log("test"),
// console.log("test2");
// but this is not a readable code.