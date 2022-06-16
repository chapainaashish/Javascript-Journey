// The rest operator is like the args in Python
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));

// We can't declare any formal arguments after rest operator
// i.e the rest operator argument should be in the last
function discountTaker(discount, ...args) {
    const price = args.reduce((a, b) => a + b);
    return (price * discount);
}

console.log(discountTaker(0.2, 40, 50));

//-------------------------------PASSING DEFAULT PARAMETER TO THE FUNCTION------------------------
// We can pass the default parameter to the function but make sure that parameter
// is either in the last or the parameter after them all have a default value
function multiply(a, b = 2, c = 3) {
    return (a * b * c);
}

console.log(multiply(5));
console.log(multiply(5, 2, 3));