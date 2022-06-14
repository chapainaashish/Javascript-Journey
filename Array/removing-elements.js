// Removing an elements from an array
const marks = [12, 34, 45, 67, 34, 89];

// Removing last element
marks.pop();

// Removing first element
marks.shift();

// Removing 2 elements starting from index 3
marks.splice(3, 2);

console.log(marks);

//Removing all elements from array
let number = [1, 2, 3, 4, 5];

// Use with single array 
number = [];

// Use when multiple object referencing a single array
number.length = 0;