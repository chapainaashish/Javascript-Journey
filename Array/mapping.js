// Filter, Map in Array
//------------------------FILTER---------------------
const numbers = [1, 2, 3, 4, 5, 6, 7];

// Return new array
//filtering array elements which are greater than 4
const newArray = numbers.filter(value => value >= 4);
console.log(newArray)

//------------------------MAPPING--------------------
/*
With the ".map()" method we can map each item in the array to something else.
This method takes a callback function as an argument, and returns a new array.
It does not modify the original array.

This method is useful, for example, to convert elements in an array to html markup.  
*/

const list_items = [6, 4, 8, 2, 0];
// mapping to string
const listed = list_items.map(function (value) {
    return "<li>" + value + "</li>";
});

// with the '.join()' method we convert the array to a string.
const html = '<ul>\n' + listed.join('\n   ') + '\n</ul>';
console.log(html)

// Object Mapping
// NOTE: We have to pass () outside the object declaration
const listObject = list_items.map(n => ({ value: n }))
console.log(listObject);

// we can chain multiple method like map filter in single statement
// const filteredToMapped = numbers
//     .filter(number => number > 0)
//     .map(number => '<li>' + number + '</li>');