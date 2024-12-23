// Object Literal

const user = {
    username: "suman",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        console.log(`Username: ${this.username}`) // suman
        console.log(this); // will get all the values placed in memory.
    }
}
console.log(user.username)
console.log(user.getUserDetails());
console.log(this) // {} // because globally nothing is present in node environment but in window enviroment lots of apis are available.

// Constructor Function

// const promiseOne = new Promise()
// const date = new Date() // new keyword is constructor fucntion
// from one object literal you can create multiple instances.

function User(username, loginCount, isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    
    return this
}

// const userOne = User("suman", 12, true)
// const userTwo = User("JavaScript", 11, false)
// console.log(userOne) // userTwo will overwrite the values.

const userOne = new User("suman", 12, true)
const userTwo = new User("JavaScript", 11, false)
console.log(userOne)
console.log(userOne.constructor) // reference hoti hai khud hi k bare me.
console.log(userTwo)

// if you do not return this then implicitly it is defined.

// new keyword as you use it create a empty object which is called instance.
// constructor is called because of new keyword.
// this keyword injects all your arguments.