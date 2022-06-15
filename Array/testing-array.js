// Testing array on given condition
const numbers = [1, 2, 3, 4, 5, 6];

// Return a boolean value after checking the given condition on all the elements of array
// Return true if all of the element meet the condition
let positiveNumber = numbers.every(function (value) {
    return value >= 0;
})

// Return true if one of the element meet the condition
let negativeNumber = numbers.some(function (value) {
    return value <= 0;
})

console.log(positiveNumber);
console.log(negativeNumber);