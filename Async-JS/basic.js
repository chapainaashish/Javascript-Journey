/*
Asynchronous JavaScript is used to achieve asynchronous code execution.(non-blocking)
We can deal with asynchronous code by using three different ways:
1. Callback function
2. Promise
3. Async/Await
*/

// Example
console.log("Before");
// the setTimeout() function is a async function
setTimeout(() => {
    console.log("Running")
}, 2000);

console.log("After");