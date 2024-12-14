// const tinderUser = new Object() // singleton object

// Non-Singleton Object
//const tinderUser = {} // exact same value empty object {}

//console.log(tinderUser); // {} Empty object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }


const regularUser = {
    email: "kuchbhinhi@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Suman",
            lastname: "Prasad"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname); // if fullname does not exist.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
//console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// same issue

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = Object.assign({}, obj1, obj2) // dono ko combine kr k {} isme la do
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// {} this is target

// const obj3 = {...obj1, ...obj2} // spread method

// database se data aata hai to kaise aata hai

// const users = [
//     {
//         id: 1,
//         email: "@gmail.com"
//     },
//     {
//         id: 1,
//         email: "@gmail.com"
//     },
//     {
//         id: 1,
//         email: "@gmail.com"
//     },
// ]

// users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// you can apply loop on this

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true


// Object Destructring

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "suman"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor); // suman


// // const navbar = (props.company // {company}) => {

// }
// navbar(company = "suman")


// API
// {
//     "name": "suman",
//     "coursename": "js",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]