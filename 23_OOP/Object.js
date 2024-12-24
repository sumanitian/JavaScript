function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5)); // 25
console.log(multipleBy5.power); // 2
console.log(multipleBy5.prototype); // {}

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

// const js = createUser("js", 25)
// const javascript = createUser("javascript", 250)

// here it is confused if executing the increment, which one to increase 25 or 250.
// because there is no context.

// jisne bhi bulaya to uska badha do
// this.score++

// js facilitates that you do not write prototype i will take care of it.
// behind the scene

// js.printMe()
// problem is 
// TypeError: Cannot read properties of undefined

// humne function se jab properties transfer ki js = createUser to additional properties bhi aayi hai to usko new keyword se batanan hota hai.

const js = new createUser("js", 25)
const javascript = new createUser("javascript", 250)

js.printMe() // score is 25