//JavaScript arrays are resizable and can contain a mix of different data types.

// arrays decleration

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]); // 1

// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitray strings as indexes, but must be
// accessed  using nonnegative integers as indexes.

//JavaScript arrays are zero-indexed, the first element of an array is at index 0, the second is at index 1, and so on 
// and the last element is at the value of the array's length property minus 1.


//Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9); // time consuming. start at the first 
myArr.shift() // remove that value.
console.log(myArr);

console.log(myArr.includes(9)); // return true or false
console.log(myArr.indexOf(9)) // return -1 because it is not present

const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr); // string me convert with comma sepearated and binded.

// slice, splice

console.log("A ", myArr); // A  [0, 1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1,3) 

console.log(myn1); // [ 1, 2 ]

console.log("B ", myArr); // B  [0, 1, 2, 3, 4, 5, 6]

const myn2 = myArr.splice(1,3)
console.log("C ", myArr) // C  [ 0, 4, 5, 6 ]
console.log(myn2); // [ 1, 2, 3 ]

// splice manuplates the original array

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros) // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// // problem is array inside array
// // this also proves that array takes any data. This has taken array as a data.
// // push -> it pushes the data on the existing array
// console.log(marvel_heros[3]) // [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]) // flash

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// concat actually returns the new array.

// more easy way is spread operator

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Rarely
const another_array = [1, 2, 3, [4, 5, 6] ,7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray('Suman')) // false
console.log(Array.from('Suman')) // [ 'S', 'u', 'm', 'a', 'n' ]

console.log(Array.from({name: 'Suman'})) // [] what to make array key or string? Interestsing

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]


