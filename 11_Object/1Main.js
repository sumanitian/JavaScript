// objects are declared in two ways like litrals ways and constructor ways

// singleton -> koi bhi constructor jis se aap banate hai singleton object banta hai
// ek hi object hai

// dusre tarike se banate hai multiple instance ban jata hai

// Object Literals

// Object.create // ye banta hai constructor k through
// const JsUser{} // ban gaya object

// decleration of symbol
const mySym = Symbol("key1")

const JsUser = {
    name: "Suman", // internal me aise "name" : "Suman" process hota hai
    
    "fullName": "Suman Prasad", // aab koi chance hi nhi hai ki . method se access kr lo. to square notation se hi access hoga.
    
    // object k keys me symbol ko add kiya aise jata hai
    [mySym]: "myKey1",
    
    age: 21,
    location: "XYZ",
    email: "kuchbhinhi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

// Accessing the object

// console.log(JsUser.email) 
// there is another way to access the object
// there is no way to access this full name using this syntax console.log(JsUser.fullName)

console.log(JsUser["email"])

// so use this way
console.log(JsUser["fullName"])

// console.log(typeof JsUser.mySym) // string but need symbol type

// write [mySym]: "myKey1"

console.log(JsUser[mySym]) //myKey1

//override value by just =
JsUser.email = "kuchbhinhi@yahoo.com"

// if you want to freeze the changes use freeze
// Object.freeze(JsUser) // you will not get error but changes will not get placed

JsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(JsUser.greeting); // [Function (anonymous)] 
// Function execute nhi hua hai but function ka reference aaya hai.

console.log(JsUser.greeting()); // Hello JS User


JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetingTwo()) // Hello JS User, Suman