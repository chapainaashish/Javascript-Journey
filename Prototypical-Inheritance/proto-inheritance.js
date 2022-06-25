// all objects in javascript are instances of Object and 
function Human() {
    // this function won't be inherited to its children object
    this.do = function () {
        console.log("doing");
    }
}

// this will be inherited to its children object
Human.prototype.eat = function () {
    console.log("eating");
}


// inheriting people object from human object [prototypical inheritance]
// Structure of inheritance is: People.prototype => Human.prototype => Object.prototype => null
People.prototype = Object.create(Human.prototype);
// whenever we reset the prototype, we should also reset the constructor, 
// So that the constructor of the child object remain the same.
People.prototype.constructor = People;

// both are same implementation
// new People.prototype.constructor("aashish") => new People("aashish");

function People(name) {
    this.name = name;
}
const p1 = new People("John");

// calling parent Human() object method
p1.eat();