// err first callback vs rejects in promises

// Callbacks

// fs.readFile function used an err first callback approach to propagate back erros

const fs = require("fs")
function afterDone(err, data) {
    if (err) {
        console.log("Error while reading file");
    } else {
        console.log(data)
    }
}

fs.readFile("a.txt", "utf-8", afterDone);

// Promises

function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}

function readFileAsync() {
    return new Promise(function(resolve, reject) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            //err
            if (err) {
                reject("File not found")
            } else {
                resolve(data);
            }
        })
    })
}

readFileAsync()
    .then(function(x) {
        console.log("Files has been read" + x);
    })
    .catch(function(e) {
        console.log("Error");
        console.log(e);
    })