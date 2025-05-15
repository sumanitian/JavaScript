// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()


// push()
function pushExample(arr, element) {
    console.log("Original Array:", arr); // Original Array: [ 1, 2, 3 ]
  
    arr.push(element);
    console.log("After push:", arr); // After push: [ 1, 2, 3, 4 ]
  }
  pushExample([1, 2, 3], 4);
  
  // pop()
  function popExample(arr) {
    console.log("Original Array:", arr); // Original Array: [ 1, 2, 3 ]
  
    arr.pop();
    console.log("After pop:", arr); // After pop: [ 1, 2 ]
  }
  popExample([1, 2, 3]);
  
  // shift() : pop or pulls from the front of the array
  function shiftExample(arr) {
    console.log("Original Array:", arr); // Original Array: [ 1, 2, 3 ]
  
    arr.shift();
    console.log("After shift:", arr); // After shift: [ 2, 3 ]
  }
  shiftExample([1, 2, 3]);
  
  // unshift() : puts in the fron of the array
  function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.unshift(element);
    console.log("After unshift:", arr);
  }
  unshiftExample([1, 2, 3], 0);
  
  // concat()
  function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);
  
    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
  }
  concatExample([1, 2, 3], [4, 5, 6]);
  // other way
  const initialArray = [1, 2, 3];
  const secondArray = [4, 5, 6];
  const finalArray = initialArray.concat(secondArray);
  console.log(finalArray);


  // forEach() : it expect function as argument
  function forEachExample(arr) {
    console.log("Original Array:", arr);
  
    arr.forEach(function(item, index) {
      console.log(item, index);
    });
  }
  forEachExample([1, 2, 3]);
  
  // map()
  function mapExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.map(function(item) {
      return item * 2;
    });
    console.log("After map:", newArr);
  }
  mapExample([1, 2, 3]);
  
  // filter()
  function filterExample(arr) {
    console.log("Original Array:", arr);
  
    let newArr = arr.filter(function(item) {
      return item > 3;
    });
    console.log("After filter:", newArr);
  }
  filterExample([1, 2, 3, 4, 5]);
  
  // find()
  function findExample(arr) {
    console.log("Original Array:", arr);
  
    let found = arr.find(function(item) {
      return item > 3;
    });
    console.log("After find:", found);
  }
  findExample([1, 2, 3, 4, 5]);
  
  // sort()
  function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr);
  }
  sortExample([5, 2, 3, 4, 1]);