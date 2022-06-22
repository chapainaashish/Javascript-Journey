//  A javascript set object has the unique set of elements in array like object where
// elements aren't repetitive

// Changing array to the set
const marks = [12, 23, 43, 12];
const markSet = new Set(marks);
console.log(markSet);

// Directly defining set
const roll = new Set([1, 2, 3, 4, 5, 6]);
console.log(roll);

// adding element to the set
roll.add(7);