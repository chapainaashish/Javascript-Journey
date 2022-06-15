// Return an integer array which contains the number range from start arg to end arg
function rangeArray(start, end) {
    const array = [];
    for (let i = start; i <= end; i++) array.push(i);
    return array;
}

console.log(rangeArray(-10, 10));