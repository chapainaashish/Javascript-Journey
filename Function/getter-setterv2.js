// getter and setter in constructor function
// getter and setter is used to access, modify private member of the object/function
function Circle(radius) {
    // Public member 
    this.radius = radius;

    // Private member                       
    let defaultLocation = { value: 1 };

    // To define a getter/setter, use Object.defineProperty():
    Object.defineProperty(this, 'defaultLocation', {
        get: function () { return defaultLocation; },
        set: function (value) { defaultLocation = value; }
    });
}
const circle = new Circle(10);
circle.radius; // 10
circle.defaultLocation;

// getting private property value using getter
console.log(circle.defaultLocation);

// using setter to modify private property value
circle.defaultLocation = { value: 2 };
console.log(circle.defaultLocation);

