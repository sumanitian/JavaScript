class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const suman = new User("suman")
// console.log(suman.createId()) // 123

// situation ye hai ki aap createId method ko haar baar us object ko access nhi dena chahte hai jo iss class se derived hua hai.
// just put static

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","ipad@.com")
iphone.logMe();
console.log(iphone.createId()); // error because of static