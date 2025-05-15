// parseInt is a global function it will parse int from int followed by string

function explainParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42"); 
explainParseInt("42px"); 
explainParseInt("aaadadd42px"); 
explainParseInt("3.14");

// Original Value: 42
// After parseInt: 42
// Original Value: 42px
// After parseInt: 42
// Original Value: aaadadd42px
// After parseInt: NaN
// it gives the correct output when the string is at the last only.
// Original Value: 3.14
// After parseInt: 3

function explainParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");

// Original Value: 3.14
// After parseFloat: 3.14
// Original Value: 42
// After parseFloat: 42
// Original Value: 42px
// After parseFloat: 42