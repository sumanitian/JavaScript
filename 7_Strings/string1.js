// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.


// Length
function getLength(str) {
  console.log("Original String:", str); // Original String: Hello World
  // // gives the current length of the string
  console.log("Length:", str.length); // Length: 11
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str); // Original String: Hello World
  console.log("Index:", str.indexOf(target)); // Index: 6
}
findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str); // Original String: Hello World World
  console.log("Index:", str.lastIndexOf(target)); // Index: 12
}
findLastIndexOf("Hello World World", "World");

// slice: gives you upto 5 starting from 0
function getSlice(str, start, end) {
  console.log("Original String:", str); // Original String: Hello World
  console.log("After slice:", str.slice(start, end)); // After slice: Hello
}
getSlice("Hello World", 0, 5);

// substring: gives 5 letters 
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);


// we can implement substring as this

function cutIt(str, startIndex, endIndex){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
      if (i >= startIndex && i < endIndex){
        newStr += str[i];
      }
    }
    return newStr;
  }
  let ans = cutIt("Hello World", 0, 5);
  console.log(ans); // Hello

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str); // Original String: Hello World
  console.log("After replace:", str.replace(target, replacement)); // After replace: Hello JavaScript
}
replaceString("Hello World", "World", "JavaScript");

// split: it splits the string based on your delimeter
// in this example delimeter is space
function splitString(str, separator) {
  console.log("Original String:", str); // Original String: Hello World
  console.log("After split:", str.split(separator)); // After split: [ 'Hello', 'World' ]
}
splitString("Hello World", " ");

// trim
function trimString(str) {
  console.log("Original String:", str); // Original String:  Hello World
  console.log("After trim:", str.trim()); // After trim: Hello World
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");