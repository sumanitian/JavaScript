const User = {
    _email: 'js@.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// fayda
// factory function use kr skte hai

const lang = Object.create(User)
console.log(lang.email);

//jitni bhi property
// _ underscore almost private property define dikhata hai 
// get and set utna meaning nhi rhta hai underscore ka
// get and set method nhi rhne deta
// getter and setter special method hai jo property k upper rakh rha hu

