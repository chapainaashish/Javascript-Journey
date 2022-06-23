// We have mainly Primitive and Referenced data type in Javascript
// Primitive data types are: String, Number, Boolean, Symbol, undefined and null
// Referenced data types are: Object, Function and Array, they use constructor function to create an object.
// in another word, referenced types are objects.
// The default value of variable in javascript is undefined
// Avoid global variable and constant as much as possible

//Primitive data types in javascript------------------------------

//String Literal
let name = "Aashish";

//In javascript we don't have float and int data type mechanism
//Number Literal
let age = 19;

//Boolean Literal
let isPassionate = true;

//undefined is both type and value
//Undefined Literal
let firstName = undefined;

//Clearing Previous Variable Value
let lastName = null;


//Referenced data type
let school = {
    address: "NEPAL",
    motto: "Educate the world"
}

// Accessing variables value

//Using dot notation
console.log(school)
console.log(school.address)

//Using bracket notation
school["motto"] = "Now, Tomorrow and the future"
console.log(school["address"])

