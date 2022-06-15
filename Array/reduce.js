/*
".reduce()" method perform some operation in the array and return a single value.
This value can be a string a number, a object or anything.

This method takes a callback function as argument with two values.
    Accumulator
    Current Value
    
Optionally we can pass a second argument to the ".reduce()", that is the value to initialize the accumulator.
If we don't set the initial value for the accumulator, it will assume the first value of the array.
*/

const marks = [5, 4, 3, 2, 1];

// here 0 is initial value of accumulator 
const sum = marks.reduce((accumulator, arrayValue) => accumulator + arrayValue, 0);
console.log(sum);