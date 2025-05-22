// Classes in JS

// Primitive types

 // 1. number
 // 2. string
 // 3. boolean

// Complex types

 // 1. Objects
 // 2. Arrays

// Classes

/* 

In JavaScript, classes are a way to define blueprints for creating objects (these objects are different from the objects defined in the last section).

*/

// For example

class Rectangle {
    constructor(width, height, color) {
        // this logged the objects
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        const area = this.width * this.height;
        return area;
    }

    paint(){
        console.log(`Painting with color ${this.color}`);
    }
}

const rect = new Rectangle(2, 4,"red")
const area = rect.area();
rect.paint();
console.log(area)

// Key Concepts

/* 

    1. Class Declaration:
        You declare a class using the class keyword.
        Inside a class, you define properties {variables} and methods {functions} that will belong to the objects created from this class.
    
    2. Constructor:
        A special method inside the class that is called when you create an instance (an object) of the class.
        It's used to initialize the properties of the object.

    3. Methods:
        Functions that are defined inside the class and can be used by all instances of the class.
    
    4. Inheritance:
        Classes can inherit properties and methods from other classes, allowing you to create a new class based on an existing one.


*/

// we can do with the traditional way but the classes gives you the cleaner code.
// simple key value pair.
// define a variable
const rect1 = {
    width: 2,
    height: 3,
    color: "red"
}

// define a function
function area(rect) {
    return rect.width * rect.height;
}

// calling a function
area(rect1);

// Some more classes js provide you out of the box.

// Date

const now = new Date(); // Current date and time
console.log(now); // prints time in weired format

const map = new Map();
map.set('name', 'Suman');
map.set('age', 30);

const firstName = map.get('name');
console.log(firstName); 

