/*
THE BEST FUNCTION ARE THOSE WITH  NO PARAMETERS ----UNCLE BOB
Function Declaration  
There are two ways of function definition in JS
Termination of function with semi-colon isn't necessary but necessary for variable and constant declaration

Hoisting is JavaScript's default behavior of moving declarations to the top.
The key difference between Function Declaration and Function Expression is that:
    Function declarations can be called before being declared
    Function expression can not, it's the same as using a variable.

The reason for this is when our JavaScript engine runs this code, it moves all function declarations to the top.
Its called Hoisting. The process of moving Function Declarations to the top of the file, and it is made automatically by the Javascript engine.
*/

read();     //like this
function read() {
    console.log("just read");
}

// Anonymous Function Expression
// WE CAN'T CALL THIS FUNCTION BEFORE FUNCTION DEFINITION
// write(); This will give error
let write = function () {
    console.log("just write");
};

// Named Function Expression
const jump = function jump(times) {
    console.log("jump" + times);
};

read();
write();
jump();

// We can reference a function
let lekhni = write;
let padni = read;
lekhni();
padni();

// In JavaScript, functions are objects. They have properties and methods. 
jump.name;
jump.length;
jump.constructor; // returns Function()
jump.call({}, 1); // to call the jump function 
jump.apply({}, [1]);