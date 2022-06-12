// in javascript, we have two categories of types, value types(primitive) and referenced types (objects)
// primitive pass the copy of the value whereas referenced pass the actual memory value
// call by value                                 call by references

//primitive type
let x = 20;
let y = x;
x = 10;
console.log(y);
//result  20

//referenced type
//just like pointer in C
let a = { value: 20 };
let b = a;
a.value = 10;
console.log(b.value);
//result 10
