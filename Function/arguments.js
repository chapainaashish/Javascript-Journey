// Arguments 

function sum(a, b) {
    return a + b;
}

// return 3 as expected
console.log(sum(1, 2));

// return NaN (Not a Number). Because the function is returning 1 + undefined
console.log(sum(1));

// return NaN (Not a Number). Because the function is returning undefined + undefined
console.log(sum());

// return 3. Only the first two arguments are used, the rest is being ignored.
console.log(sum(1, 2, 3, 4, 5));
// THE POINT IS WE DON'T GET ANY ERROR WHILE PASSING ARGUMENTS IN DIFFERENT FORMS


/*If want to have the flexibility to pass as many arguments as we want.
There exists a array like object in javascript which is called arguments
*/

// THINK ARGUMENTS LIKE AN ARRAY WHICH CAN PROCESS AN ELEMENTS
function sum2() {
    let total = 0;
    for (let num of arguments) {
        total += num;
    }
    return total;
}
console.log(sum2(1, 2, 3, 4, 5));