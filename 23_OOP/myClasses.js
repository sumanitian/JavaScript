// ES 6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const js = new User("js", "js@mail.com", "123")
// console.log(js.encryptPassword()); // 123abc
// console.log(js.changeUsername()); // JS

// Behind the scence

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const javascript = new User("javascript", "javascript@mail.com", "123")
console.log(javascript.encryptPassword()); // 123abc
console.log(javascript.changeUsername()); // JAVASCRIPT