// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const num of arr) {
    console.log(num);
}

const greetings = "Hello World"

for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// Maps [unique values]
// it is an object holds key-value pair and remembers the original
// insertion order of the keys.

const map = new Map
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for(const [key, value] of myObject) {
//     console.log(key, ':-', value); // myObject is not iterable
// }
// this does not work here.

// for in
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for(const key in myObject){
    // console.log(key)
    // console.log(myObject[key])
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}

// map is not iterable in for in