// Problem 2: Read & Transform File Data
// Problem
// Simulate reading and transforming a text file with async callbacks.

// Tasks
// Write a function readFile(fileName, callback)

// Wait 2 seconds.
// If fileName === "data.txt" → return "hello world".
// Else return an error "File not found".
// Write a function toUpperCase(data, callback)

// Wait 1 second.
// Convert string to uppercase.
// Chain them: readFile("data.txt", ...) → toUpperCase(...) → print result.

// Expected: "HELLO WORLD".
// If file not found → print error.

function readFile(fileName, callback){
    setTimeout(() => {
        if(fileName === "data.txt"){
            callback(null, "hello world");
        } else {
            callback("File not found");
        }
    },2000);
}

function toUpperCase(data, callback){
    setTimeout(() => {
        const result = data.toUpperCase();
        callback(null, result);
    },1000);
}

readFile("data.txt", (error, data) => {
    if (error) {
        console.log(error);
        return;
    }

    toUpperCase(data, (error, result) => {
        if (error) {
            console.log(error);
            return;
        }

        console.log(result);
    });
});