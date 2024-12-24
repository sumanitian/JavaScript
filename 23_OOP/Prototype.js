// let myName = "suman"

// console.log(myName.length); 5

// let myName = "suman      "
// console.log(myName.length); // 11 

// console.log(myName.truelength);
// Solve this challenge

// jaha pe string ho by default truelength method aa jaye.

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

// injecting power to object

Object.prototype.suman = function(){
    console.log(`suman is present in all objects`);
}

heroPower.suman() // suman is present in all objects

myHeros.suman() // suman is present in all objects

// injecting power to array only

Array.prototype.heySuman = function(){
    console.log(`Suman says hello`);
}

myHeros.heySuman() // Suman says hello
// heroPower.heySuman() // TypeError: heroPower.heySuman is not a function

// Inheritence

const User = {
    name: "kuchnhi",
    email: "kuchnhi@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // Access all the property of Teaching Support
    __proto__: TeachingSupport,
}

// Teacher can access all the property of user
Teacher.__proto__= User

// This is old approach

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
// TeachingSupport is accessing the property of Teacher.


let anotherUsername = "Suman           "

String.prototype.truelength = function(){
    console.log(`${this}`); // Suman
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.truelength() // True length is 5

"suman".truelength() // True length is 5
"js".truelength() // True length is 2