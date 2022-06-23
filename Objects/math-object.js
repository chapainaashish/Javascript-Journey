/*
Javascript have some built-in objects
Math object is one of the built-in object in javascript
To know more:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

//Return a random number from 0 -1
console.log(Math.random());

// In case we want to specify the range we can use a function.
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
};

console.log(getRandom(10, 80));

//Return a round value of float number
console.log(Math.round(3.9));

//Return a max number from range of number
console.log(Math.max(1, 2, 4, 8, 3, 5));

//Return a min number from range of number
console.log(Math.min(1, 2, 4, 8, 3, 5));
