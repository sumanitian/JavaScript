// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}
//console.log(element); // error elements will not be accessible.

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5){
        console.log("5 is best number");
    }
    console.log(element);
}

// table 0 to 10
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`)
    for(let j = 0; j <= 10; j++){
        //console.log(`Inner loop value ${j} and inner loop ${i}`);    
        console.log(i + '*' + j + ' = ' + i*j);    
    }
}