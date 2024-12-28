class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    // once you define getter then define setter also

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const suman = new User("noemail.com","123")
console.log(suman.password)

// causing error because constructor is setting the password and setter is also setting the password.
