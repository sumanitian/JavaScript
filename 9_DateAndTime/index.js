let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// yyyy mm dd
// let myCreatedDate = new Date("2023-01-14")

// mm dd yyyy
let myCreatedDate = new Date("01-14-2023")

// TimeStamp
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // for comparisons

console.log(Math.floor(Date.now()/1000)); // converting into seconds
// direct dividing by 1000 will give you decimal value

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long",
})