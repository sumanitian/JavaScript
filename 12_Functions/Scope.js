

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