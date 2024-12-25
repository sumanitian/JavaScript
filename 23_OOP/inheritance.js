class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

// const js = Teacher("js", "js@mail.com", "123") // TypeError: Class constructor Teacher cannot be invoked without 'new'
const js = new Teacher("js", "js@mail.com", "123")
js.addCourse() // A new course was added by js

const javascript = new User("javascript")
// javascript.addCourse() // no access // TypeError: javascript.addCourse is not a function

javascript.logMe() // USERNAME is javascript

console.log(js === javascript ) // false

// only instance

console.log(js instanceof Teacher) // true
console.log(js instanceof User) // true