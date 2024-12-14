// creating the object
let rectangle = {
    length: 1,
    breadth: 2,

    // adding the functionality

    draw: function() {
        console.log('drawing rectangle')
    }
};
rectangle.draw()
console.log(rectangle.length)
console.log(rectangle.breadth)

// Object Creation Methods

// Factory Function
// go and create a function and it will give you object.
// to store the object output then store in any variable
// for example if length, breadth and draw then assign it into the variable a
// for accessing a.length, a.breadth, a.draw()

// function createRectangle(){
//     let rectangle = {
//         length: 1,
//         breadth: 2,
    
//         // adding the functionality
    
//         draw: function() {
//             console.log('drawing rectangle')
//         }
//     };
//     return rectangle;
// }

// let rectangleobj1 = createRectangle();

// issue in the above code is that length & breadth is fixed

function createRectangle(length, breadth){
    let rectangle = {
        // length: length,
        // breadth: breadth,
        // or
        length,
        breadth,
    
        // adding the functionality
    
        draw: function() {
            console.log('drawing rectangle')
        }
    };
    return rectangle;
}

let rectangleobj2 = createRectangle(5,4);
rectangleobj2.draw()
console.log(rectangleobj2.breadth)
console.log(rectangleobj2.length)

// Constructor Function
    // follow the Pascal Notation: First letter of every word is capital
    // constructor function intialize or define the properties or methods
    // no need of return

function Rectangle(len, bre) {
    this.length=len;
    this.breadth=bre;
    this.draw = function() {
        console.log('drawing');
    }
}
// object creating using construction functiion
let rectangleObject = new Rectangle(1,2);
rectangleObject.draw()
console.log(rectangleObject)
