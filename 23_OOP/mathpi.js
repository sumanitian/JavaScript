// show hidden part of object

// Object.getOwnPropertyDescriptor(Math)

// console.log(Math.PI); // 3.141592653589793
// // you can not overwrite the value of Math.PI

// Math.PI = 5
// console.log(Math.PI) // 3.141592653589793

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)
/*
    {
        value: 3.141592653589793,
        writable: false,
        enumerable: false,
        configurable: false
    }
*/

const lang = {
    name: 'js',
    price: 399,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(lang)); // undefined
// lang is not a property. name, price and isAvailable is property.

console.log(Object.getOwnPropertyDescriptor(lang, "name"));
// { value: 'js', writable: true, enumerable: true, configurable: true }

// Object.defineProperty(lang, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(lang, "name"));
// { value: 'js', writable: false, enumerable: false, configurable: true }

// for (let [key, value] of lang) {
//     console.log(`${key} : ${value}`);
// } 

// TypeError: lang is not iterable

// for (let [key, value] of Object.entries(lang)) {
//     console.log(`${key} : ${value}`);
// }

// name : js
// price : 399
// isAvailable : true

// but code fategi kyunki agar function likh di.

// to condition check kr lo

for (let [key, value] of Object.entries(lang)) {
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
    
}