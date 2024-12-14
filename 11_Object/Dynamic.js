function Rectangle(length, breadth) {
    this.length = length;
    this.breadth = breadth;
    this.draw = function() {
        console.log('drawing');
    }
}

let rectangleObject = new Rectangle(4,6)

// adding the new properties in the object
rectangleObject.color = 'yellow';
console.log(rectangleObject);

// deleting the particular properites
delete rectangleObject.color;
console.log(rectangleObject);

// if any properites exists or not
if('color' in rectangle) {
    console.log('Present');
} else {
    console.log('Absent');
}

// Construtor Properties

// finding the constructor of rectangleObject then it is function Rectangle
console.log(rectangleObject.constructor); // [Function: Rectangle]

//function is also an object
// every object will have constructor

// Finding the constructor of Function Rectangle
console.log(Rectangle.constructor); // [Function: Function]

// how this Rectangle is created

let Rectangle1 = new Function(
    'length', 'breadth',
    `this.length = length;
     this.breadth = breadth;
     this.draw = function() {
         console.log('drawing');
}`);
//object creation using Rectangle1
let rect = new Rectangle1(2,3)
console.log(rect);

// Functions are object

rect.length;
rect.breadth;

// primitive type me copy banti hai

// let a = 10;
// let b = a;
// a++;
// console.log(a); // 11
// console.log(b); // 10 


// reference type me address pass hota hai

// let a = { value: 10}; // a is object value is 10
// let b = a; // b is pointing to a
// a.value++;
// console.log(a.value); // 11
// console.log(b.value); // 11

// primitive are copied by their value.
// References are copied by their address/references.

// let a = 10;
// function inc(a){  // is function ka 'a' alag bana hai
//     a++;
// }
// inc(a);
// console.log(a); // 10

let a = {value: 10};

function inc(a) {
    a.value++;
}
inc(a);
console.log(a);

//for-in loop

let rectangle = {
    length: 1,
    breadth: 2
};

for(let key in rectangle) {
    // key are reflected through key variable
    // values are reflected through rectangl[key]
    console.log(key, rectangle[key]);
}

//for-of loop
// for(let key of rectangle) {
//     console.log(key) // error: rectangle is not iterable
// }

for(let key of Object.keys(rectangle)) {
    console.log(key); // length, breadth
}

for(let key of Object.entries(rectangle)) {
    console.log(key); // [ 'length', 1 ] [ 'breadth', 2 ]
}