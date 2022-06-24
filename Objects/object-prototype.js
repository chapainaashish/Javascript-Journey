/* 
All javascript object inherit properties and methods from a prototype
Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:
Date objects, Array objects, and Person objects inherit from Object.prototype.
Object.prototype is a special object that is automatically created for every object
Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.

As we already know, we can't add properties to the constructor function directly
So, we use the prototype property to add properties to the constructor function
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}
// The JavaScript prototype property also allows you to add new methods to objects constructors:
Person.prototype.school = "JMC";