// Polymorphism is the ability of an object to take on many forms.
// In JavaScript this is possible by using the prototype property.
// creating prototype intermediate inheritance function
function createPrototype(ParentClass, ChildClass) {
    ChildClass.prototype = Object.create(ParentClass.prototype)
    ChildClass.prototype.constructor = ChildClass;
}

function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function () {
    console.log("Eating");
}

function Human(name, age) {
    Animal.call(this, name);
    this.age = age;
}

// Prototype Inheritance
createPrototype(Animal, Human);

// Method Overriding
Human.prototype.eat = function () {
    console.log("Human Eating");
}
function Dog(name, age) {
    Animal.call(this, name);
    this.age = age;
}

// Prototype Inheritance
createPrototype(Animal, Dog);

// Method Overriding
Dog.prototype.eat = function () {
    console.log("Dog Eating");
}


objects = [
    new Human("John", 12),
    new Dog("Puppy", 2),
];

/*On above code we have two objects, one is Human and other is Dog inheriting from Animal.
Each child object has its own eat() function/method.
But we can call each child object's eat() function/method by using the for loop which is the example
of polymorphism. 
Note: here key variable is acting as polymorphic object which call eat method depending upon the object
*/
for (let key of objects) {
    key.eat();
}

