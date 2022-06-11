// Constructor Function
// There is no specific difference between factory and constructor function
function Person(fname) {
    this.fname = fname;
    this.eat = function () {
        console.log("eat");
    }
}

/* 3 things happen when we use new keyword to declare new object
        1. creates an empty Object
        2. point that empty Object to constructor function
        3. return that object after assigning value to that Object
 */
const aashish = new Person("aashish");
console.log(aashish);