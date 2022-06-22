// Maps in JS
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

// initializing a new map object {adding array as arguments}
const animals = new Map([
    ["cow", 20],
    ["goat", 10],
    ["buffalo", 34]

]);
console.log(animals);

// another way
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// set() method also can be used to change existing map values
fruits.set("apples", 200);

// getting value of map element
const cowValue = animals.get("cow");
console.log(cowValue);

//getting the total number of elements in map
console.log(animals.size)

//deleting the element from map
animals.delete("cow");
console.log(animals)

// checking if element exist in map
// The has() method returns true if a key exists in a Map:
console.log(animals.has("goat"));