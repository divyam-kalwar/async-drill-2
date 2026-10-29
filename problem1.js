// Problem 1: Fetch & Process User Data
// Problem
// Simulate fetching and processing user data using callbacks.

// Tasks
// Write a function getUserData(userId, callback)

// Wait 2 seconds (setTimeout).
// If userId > 0 → return { id: userId, name: "John Doe", age: 25 }.
// Else return an error "Invalid userId".

// Write a function processUserData(user, callback)
// Wait 1 second.
// Return "Welcome, John Doe! Your age is 25.".
// Chain them: getUserData(1, ...) → processUserData(...) → print result.

// Handle errors at any stage.

// Additional
// Add a saveMessage(message, callback) function that simulates saving to a DB. Print "Message saved successfully!".

function getUserData(userId, callback){
    setTimeout(() => {
        if(userId > 0) {
            const user =  { 
                id: userId, 
                name: "John Doe", 
                age:25 
            };
            callback(null, user);
        } else {
            callback("Invalid userId", null)
        }
    },2000);
}

function processUserData(user, callback){
    setTimeout(() => {
        const msg = `Welcome, ${user.name}! Your age is ${user.age}`;
        callback(null,msg);
    },1000);
}

function saveMessage(message, callback){
    setTimeout(() => {
        console.log("Message saved successfully!");
        callback(null);
    },1000);
}

getUserData(1, (error, user) => {
    if(error) {
        console.log(error);
        return;
    }

    processUserData(user, (error, message) => {
        if(error) {
            console.log(error);
            return;
        }

        console.log(message);

        saveMessage(message, (error) => {
            if(error){
                console.log(error);
                return;
            }
        });
    });
});

