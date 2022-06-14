// Combining and Slicing Array
/*
When dealing with Reference types they copy the object reference into the new array 
and not the object value.Both the original and new array refer to the same object. That is, 
if a referenced object is modified, the changes are visible to both the new and original 
arrays. This includes elements of array arguments that are also arrays.
*/
const first = [23, 45, 67];
const second = [3, 5, 6];

// Return new combined array
const third = first.concat(second);
console.log(third);

// Slicing an array
// Return new array
// args(start_index, ending_index)
const fourth = third.slice(2, 5);
console.log(fourth);

// Using spread operator RECOMMENDED
const fifth = [...first, ...second];

// We can also add other value and combine at whole make a single new array
const sixth = [...first, "a", ...second, "e"];

// Copying array 
const seventh = [...sixth];