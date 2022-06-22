// strict mode is a way to make the code more strict.
// it is used in the beginning of a script or a function.
// You can use strict mode in all your programs. It helps you to write cleaner code, 
// like preventing you from using undeclared variables.

let z = 10;
function foo() {
    "use strict";
    // it will create error as y is not defined
    y = 20;
    // let y = 10; it wont create error
}

foo();