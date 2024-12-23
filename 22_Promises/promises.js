// creation of promise

// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB class, cyptography,network
//     setTimeout(function(){
//         console.log('Async task is completed');
//     }, 1000)
// })

// // consumption of promise
// // resolve direct connection is with .then()

// promiseOne.then(function(){
//     // value return
//     console.log("Promise Consumed");
// })

// after the exectuion
// "Async task is completed" gets printed but "Promise Consumed" did not get printed.
// i.e., promised kabhi pura hua nhi

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB class, cyptography,network
    setTimeout(function () {
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

// resolve gets connected with the .then() then promise is fullfiled.

promiseOne.then(function () {
    // value return
    console.log("Promise Consumed");
})


// it is not required to store promise in a variable

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // mostly object are passed
        resolve({ username: "suman", email: "xyz@example.com" })
    }, 1000)
})

// kaise data ko lena hai

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "suman", password: "123" })
        } else {
            reject('ERROR: Something Went Wrong')
        }
    }, 1000)
})

// const usrname = promiseFour.then((user) => {
//     // only username
//     console.log(user);
//     return user.username
// })
// we can't do like this error will be encountered

promiseFour.then((user) => {
    // only username
    console.log(user); //{ username: 'suman', email: 'xyz@example.com' }
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error) // ERROR: Something Went Wrong
})

// let error = false

// we will get the user name
// { username: 'suman', password: '123' }
// suman

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch(function (error) {
        console.log(error)
    }).finally(() => console.log("The promise is either resolve or rejected"))

// this finally is executed always.

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS Went Wrong')
        }
    }, 1000)
})

// async function consumePromisFive() {
//     const response = await promiseFive // promiseFive() we do not consume like this.
//     console.log(response);
// }
// consumePromisFive()

// agar aap network se koi data aa rha hai aur error aa gaya to async wo error ko handle nhi krta hai.

async function consumePromisFive() {
    try {
        const response = await promiseFive // promiseFive() we do not consume like this.
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromisFive() //ERROR: JS Went Wrong

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // issue with this code is getting the response is time taking so we need await in response.json()
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

// same method using .then 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
// for handling the response
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))