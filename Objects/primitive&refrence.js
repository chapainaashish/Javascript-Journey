// in javascript, we have two categories of types, value types(primitive) and referenced types (objects)
// Primitive data types are: String, Number, Boolean, Symbol, undefined and null
// Referenced data types are: Object, Function and Array, they use constructor function to create an object.
// in another word, all objects are referenced types.
// Reference types are: Object, Function and Array 
// primitive pass the copy of the value whereas referenced pass the actual memory value or reference.
// call by value                                 call by references

//primitive type
// copy by value
let x = 20;
let y = x;
x = 10;
console.log(y);
//result  20

// referenced type
// copy by reference just like pointer in C
let a = { value: 20 };
let b = a;
a.value = 10;
console.log(b.value);
//result 10
