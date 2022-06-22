// String in Javascript

//Primitive string
const data = 'hello';
console.log(typeof data);
// Return 'string'

//Object string
const dataobj = new String('Hi');
console.log(typeof dataobj);
// Return 'Objects'

// However JS engine wrap up primitive string to object string, so we can use
// string object methods and properties in primitive string

// Length property
console.log(data.length);

// Bracket notation to access a character by its index.
console.log(data[4]);

// To check if a string includes certain characters.
// Return a boolean, in this case true.
console.log(data.includes("hello"));
// Returns false.
console.log(data.includes("hi"));

// To check how th string starts.
// Return a boolean, in this case true.
console.log(data.startsWith('he'));

// To check how the string ends.
// Return a boolean, in this case true.
console.log(data.endsWith('lo'));

// To find the index of a given character.
// Returns the index number.
console.log(data.indexOf('el'));
// Returns -1 if the characters are not in the string.
console.log(data.indexOf('not'));

// To replace the string
// It returns a new string and does not modify the original one.
console.log(data.replace('hello', 'hi'));

// Uppercase
console.log(data.toUpperCase());

// Lowercase 
console.log(data.toLowerCase());

// Remove preceding and following white spaces
console.log(data.trim());

// split string and return an array of string
console.log(data.split(' '));

// slice() extracts a part of a string and returns the extracted part in a new string.
console.log(data.slice(1, 3));