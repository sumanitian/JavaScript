

// reason why these three

{} // this is called blocks when it comes with if else

var c = 300
let a = 300
if (true){
    let a = 10
    console.log("Inner a ", a); //Inner a 10
    const b = 20
    var c = 30
}

// console.log(a) // not declared: it is true
// console.log(b) // not declared: it is true
// console.log(c) // 30: problem is here

// if i had declared var c = 300 above then again the output is 30 so this is the biggest problem with the var.

// {} inside this value should not go out

console.log(a) // 300

// function one(){
//     const username = "suman"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website); // error line by line execution so two never gets executed.
    
//     two(); // this never get executed.
// }

// one()

function one(){
    const username = "suman"

    function two(){
        const website = "youtube"
        console.log(username); // suman
    }
    // console.log(website); 
    
    two();
}

// one()



if (true) {
    const username = "suman"
    if (username === "suman") {
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website); // error because of scope
}
//console.log(username); // error because of scope


// Hoisting

// function addone(num){
//     return num + 1
// }
// console.log(addone(5)) // 6


// const addTwo = function(num){
//     return num + 2
// }
// console.log(addTwo(5)) // 7


console.log(addone(5)) // 6
function addone(num){
    return num + 1
}

console.log(addTwo(5)) // ReferenceError: Cannot access 'addTwo' before initialization
// this error how you declare the functions.in this we had declared and stored in a variable.
const addTwo = function(num){
    return num + 2
}