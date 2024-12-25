function setUsername(username){
    // complex DB Calls
    this.username = username
    console.log("called");
}

// function createUser(username,email,password){
//     setUsername(username)
//     // this setUsername will set the username.
//     // for this it require access.

//     this.email = email
//     this.password = password
// }

// const js = new createUser("js", "js@.com", "123")
// console.log(js); // createUser { email: 'js@.com', password: '123' }

// but what to do with the property setUsername
// above output username is not being set only email and password are present.
// actually me call ho bhi rha hai.
// agar call ho rha hota to hume object milta username email password.
// setUsername(username) technically isse reference hua hai call nhi hua hai
// actually me call ho rha hai lekin jaise hi call hone pe exectuion context function hataya to uske varibale bhi gayab.
// so we need reference holding.
// js me kuch method hota hai jise aap explicitly call kr skte hai.
// 

function createUser(username,email,password){
    setUsername.call(this,username)

    // use my this to hold the reference

    this.email = email
    this.password = password
}
const js = new createUser("js", "js@.com", "123")
console.log(js); // createUser { username: 'js', email: 'js@.com', password: '123' }