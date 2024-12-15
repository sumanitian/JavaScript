function sayMyName(){
    console.log("S")
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }
// addTwoNumbers(3, 4) // 7
// // 3 and 4 are arguments
// // number1 and number2 are parameters.

// // problem is when user do not give number
// addTwoNumbers(3, "4") // 34
// // addTwoNumbers(3, "A")
// // addTwoNumbers(3, null) 
// // so checking is necessary

// const result = addTwoNumbers(3, 5) // 8

// console.log("Result: ", result); // Result:  undefined

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
loginUserMessage("suman") // no output
console.log(loginUserMessage("suman")) // suman just logged in
console.log(loginUserMessage()) // undefined