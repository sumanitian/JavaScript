// Iteration
// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };
// let dest = {};
// for(let key in src) {
//     dest[key] = src[key];
// }
// console.log(dest); // { a: 10, b: 20, c: 30 }

// src.a++;
// console.log(dest); // { a: 10, b: 20, c: 30 }

// Assign
let src = {
    a: 10,
    b: 20,
    c: 30
};

let dest = Object.assign({}, src);

console.log(dest); // { a: 10, b: 20, c: 30 }

src.a++

console.log(dest); // { a: 10, b: 20, c: 30 }



let src2 = { value: 25 };
let dest2 = Object.assign({}, src, src2);
console.log(dest2);
src.a++;
console.log(dest2);


// Spread

let dest3 = {...src};
console.log(dest3);
src.a++;
console.log(dest3);