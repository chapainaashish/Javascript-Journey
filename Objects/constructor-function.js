// Constructor Function
// There is no specific difference between factory and constructor function
// We use 'new' and 'this' keyword to create objects in constructor function
function Person(fname) {
    this.fname = fname;
    this.eat = function () {
        console.log("eat");
    }
}

/* 3 things happen when we use new keyword to declare new object
        1. creates an empty Object, like: {   }
        2. point that empty Object to constructor function
        3. return that object after assigning value to that Object
*/
const aashish = new Person("aashish");
console.log(aashish);

// Every object has a "constructor" property which returns the function that was used to construct or create that object. 
// let x = new Object(); under the hood this will happen
const x = {};
x.constructor; // returns Object() 