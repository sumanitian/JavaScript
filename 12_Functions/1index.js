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
        // console.log("Please enter a username");
        return  "Please enter a username";
    }
    return `${username} just logged in`
}
loginUserMessage("suman") // no output
console.log(loginUserMessage("suman")) // suman just logged in
console.log(loginUserMessage()) // undefined

// shopping cart

// if you do not know the number of arguments
// rest operator ... it is also calle spred but uscase are different.

// function calculateCartPrice(...num1){
//     return num1
// } 
// console.log(calculateCartPrice(200, 400, 500)) // [ 200, 400, 500 ]

function calculateCartPrice(val1, val2, ...num1){
    return num1
} 
console.log(calculateCartPrice(200, 400, 500, 2000)) // [500, 2000]

// val1 gets the value 200
// val2 gets the value 400
// ...num1 collects the remaining arguments [500, 2000] into an array

const user = {
    username: "suman",
    price: 199
}

function handleObject(anyoject){
    console.log(`Username is ${anyoject.username} and price is ${anyoject.price}`);
}

handleObject(user)

// problem occurs when price becomes prices so type safety must be handled.

// we can pass also like this
handleObject({
    username: "sam",
    price: 399
})

const newArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));