// Find the sum of given arguments either on array or number arguments
function sumFinder(a, ...args) {
    if (Array.isArray(a)) {
        return a.reduce((b, c) => b + c)
    }
    return args.reduce((a, b) => a + b) + a;
}
console.log(sumFinder([1, 2, 3, 4, 5]));


// Mosh solution
function sum(...items) {
    console.log(items)
    // [ [ 1, 2, 3, 4, 5 ] ] As items is array itself in rest operator and we also pass array 
    // we have to extract the inner array
    if (items.length === 1 && Array.isArray(items[0])) {
        items = [...items[0]];
    }
    return items.reduce((acc, curr) => acc + curr);
}
console.log(sum([1, 2, 3, 4, 5]));