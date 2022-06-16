// Exception handling
function sumNumber(a, b) {
    // Exception case
    if (typeof a != 'number')
        throw new Error("Arguments must be number");
    return a + b;
}

// Trying the block 
try {
    value = sumNumber('aashish', 5);
}
// Catching error 
catch (e) {
    // do something, here in case just printing in the console
    console.log(e);
}

console.log(sumNumber(3, 4));