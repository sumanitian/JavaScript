// I?O heavy operations

// I/O (Input/Output) heavy operations refer to task in a compiler program that involve a lot
// data transfer between the program and external systems or devices. These operations usually
// require waiting for data to be read from or written to sources like disks, networks, databases
// or other external devices, which can be time-consuming compared to in-memory computations.

// Examples of I/O Heavy Operations:
// 1. Reading a file
// 2. Starting a clock
// 3. HTTP Requests 

// we're going to introduce import/requires next.
// A require statement lets you import code/functions export from another file/module.

// create a file in there (a.txt) with some text inside
// write the code to read a file synchronously

const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
// readFileSynce --> read the file synchronously
console.log(contents);

// create another file (b.txt)
// write the code to read the other file synchronously

// const fs = require("fs")
const contents1 = fs.readFileSync("a.txt", "utf-8");
console.log(contents1);
const contents2 = fs.readFileSync('b.txt', 'utf-8')
console.log(contents2);

const contents3 = fs.readFile("a.txt", "utf-8"); // asynchronously
console.log(contents3);
const contents4 = fs.readFileSync('b.txt', 'utf-8')
console.log(contents4);


// I/O bound tasks vs CPU bound tasks

// CPU bound tasks

// CPU-tasks are operations that are limited by the speed and power of the CPU.
// These task require significant computation and processing power, meaning that the performance bottlenect is the CPU itself.

let ans = 0;
for (let i = 1; i <= 1000000; i++) {
    ans = ans + i
}
console.log(ans);

// A real world example of a CPU intensive task is running for 3 miles. Your legs/brain have to constantly be engaged for 3 miles while you run.


// I/O bound tasks

// I/O-bound tasks are operations that are limited by the system's input/output capabilities, such as disk I/O, network I/O, or any other form of data transfer.
// These tasks spend most of their time waiting for I/O operations to complete.

const fs = require("fs")
const contents6 = fs.readFileSync("a.txt", "utf-8");
console.log(contents6);

// Doing I/O bound tasks in the Real World

// what if you were asked with doing 3 things
// 1. Boil some water.
// 2. Do some laundry.
// 3. Send a package via mail

// Would you do these
// 1. One by one (synchronously)
// 2. Context switch between them (Concurrently)
// 3. Start all 3 tasks together, and wait for them to finish. The first one that finishes gets catered to first.
