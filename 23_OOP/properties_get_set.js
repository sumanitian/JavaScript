// same thing in getter and setter file

// function based setter and getter

function User(email, password){
    this._email = email;
    this._password = password

    // function apne aap me function bhi hai aur object bhi

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const js = new User("js@.com", "js")
console.log(js.email);