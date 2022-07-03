/* Calling the super constructor
Method Overriding: method overriding is when we override the method of the parent class and 
define the same method with the same name in the child class.
it is used to call the constructor of the superclass and assign the superclass' properties to the subclass.
*/
// creating prototype intermediate inheritance function
function createPrototype(ParentClass, ChildClass) {
    ChildClass.prototype = Object.create(ParentClass.prototype)
    ChildClass.prototype.constructor = ChildClass;
}

function Animal(name) {
    this.name = name;
}

function Human(name, age) {
    // calling the super constructor
    Animal.call(this, name);
    this.age = age;
}

Animal.prototype.eat = function () {
    console.log("Eating");
}

// Prototype Inheritance
createPrototype(Animal, Human);

// Method Overriding
Human.prototype.eat = function () {
    console.log("Human Eating");
}


const rabi = new Human("ravi", 12);
rabi.eat();
console.log(rabi);