// using let keyword
let a = 5;
console.log(a);
let name = "suman";
console.log(name); 
let status = true;
console.log(status)

// use var keyword
/*
    prefer not to use var 
    because of issue in block scope and functional scope
*/

// use const

// const num = 12;
// num = 13;
// throw error: Uncaught TypeError: Assignment to constant varibale.


const accountId = 142
let accountEmail = "xyz@gmail.com"
var accountPassword = "12345"

// this is not a good practice to declare the varibale like this but javascript takes care of this.
accountCity = "Xyz"

let accountState;
// this will give undefined.

accountEmail = "yxz@gmail.com"
accountPassword = "212121243343"
accountCity = "yxc"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
console.log(accountId);


