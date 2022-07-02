// Promises in JS
// promises are used to handle asynchronous operations,
// It's either return a result or an error
const p = new Promise(function (resolve, reject) {
    // Some async JS code
    // returning result
    setTimeout(() => {
        // returning some value
        resolve(1); // pending ----> fulfilled, resolved
    }, 2000)
});

// consuming Promises
// we ca combine then and catch i.e. result and error
p.then(result => console.log("Successfully returned a result", result))
    .catch(err => console.log("Error arrived"));


const r = new Promise(function (resolve, reject) {
    // Some async JS code
    // returning error
    setTimeout(() => {
        reject(new Error('123Error')); // pending ---> error, rejected
    }, 2000)
});

r.catch(result => console.log("Successfully returned a result", result));