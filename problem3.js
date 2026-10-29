// Problem 3: Online Order Simulation
// Problem
// Simulate an online order system using async callbacks.

// Tasks
// placeOrder(order, callback)

// Wait 2 seconds.
// If order is not empty → return orderId.
// Else return "Order failed: empty cart".
// processPayment(orderId, callback)

// Wait 1.5 seconds.
// Return "Payment successful for order #<orderId>".
// deliverOrder(orderId, callback)

// Wait 2 seconds.
// Return "Order #<orderId> delivered successfully!".
// Chain them: placeOrder(...) → processPayment(...) → deliverOrder(...) → print result.

// Additional
// Introduce error handling: If payment fails, stop and print "Payment failed for order #...".

function placeOrder(order, callback){
    setTimeout(() => {
        if (!order) {
            callback("Order failed: empty cart", null);
            return;
        }
        const orderId = 101;
        callback(null, orderId);
    }, 2000);
}

function processPayment(orderId, callback){
    setTimeout(() => {
        const paymentSuccessful = false;

        if (!paymentSuccessful) {
            callback(`Payment failed for order #${orderId}`, null);
            return;
        }
        
        callback(null, `Payment successful for order #${orderId}`);
    }, 1500);
}

function deliverOrder(orderId, callback){
    setTimeout(() => {
        const message = `Order #${orderId} delivered successfully!`;
        callback(null, message);
    }, 2000);
}


placeOrder("Laptop", (error, orderId) => {
    if (error) {
        console.log(error);
        return;
    }

    processPayment(orderId, (error, paymentMessage) => {
        if (error) {
            console.log(error);
            return;
        }

        console.log(paymentMessage);

        deliverOrder(orderId, (error, result) => {
            if (error) {
                console.log(error);
                return;
            }

            console.log(result);
        });
    });
});