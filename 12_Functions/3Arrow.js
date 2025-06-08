const user = {
    username: "suman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
                    //         suman, welcome to website
                    // {
                    //   username: 'suman',
                    //   price: 999,
                    //   welcomeMessage: [Function: welcomeMessage]
                    // }
                    // sam, welcome to website
                    // {
                    //   username: 'sam',
                    //   price: 999,
                    //   welcomeMessage: [Function: welcomeMessage]
                    // }
                    // this talks about the current context.
    }

}
user.welcomeMessage() // suman, welcome to website
user.username = "sam"
user.welcomeMessage() // sam, welcome to website

// console.log(this); // {} because of node environment.

// when it runs in windows browser then most global object is window so capture the event.

function one(){
    console.log(this);
}
one() // global: [Circular *1],
// clearImmediate: [Function: clearImmediate],
// setImmediate: [Function: setImmediate] {
//   [Symbol(nodejs.util.promisify.custom)]: [Getter]
// },

// when this is exectued in any function in node environment then you gets global object.

// function some(){
//     let username = "suman"
//     console.log(this.username)
// }
// some() // undefined 
// function k under this ko aise use nhi kr pa rhe hai.


// Arrow Function

// const some = () => {
//     let username = "suman"
//     console.log(this.username); // undefined
// }
// some()

// Explicit Return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

// Implicit Way
// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3,4)) 