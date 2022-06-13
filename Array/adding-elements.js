// Adding elements in the beginning, middle and the ending
const numbers = [6, 7, 8, 9];

// adding element at the last
numbers.push(10, 23);

// adding element at the beginning
numbers.unshift(78, 23);

// adding element at the middle
// arguments => index, deletion of elements any, add elements
numbers.splice(3, 0, 9, 23, 56);

console.log(numbers);