// Data abstraction and private properties in JavaScript
// According to OOP philosophy, private properties should not be accessible from outside the class.

// We can hide the details by using private members. Replace "this" with "let". 
function Circle(radius) {
    // Public member 
    this.radius = radius;

    // Private member                       
    let defaultLocation = {};
}
const circle = new Circle(10);
circle.radius; // 10
circle.defaultLocation // error cant access private member