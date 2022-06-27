// so inheritance is hard to implement and sometimes become vague when we
// make many subclass from main class. we use mixin to make independent method
// and combine them to form a new class

const canEat = {
    eat: function () {
        console.log('can eat');
    }
};


const canMove = {
    walk: function () {
        console.log('can walk');
    }
};

// creating new object by combining two objects 
const human = Object.assign({}, canEat, canMove);

function mixin(target, ...sources) {
    // Copies all the properties from all the source objects 
    // to the target object. 
    Object.assign(target, ...sources);
}

function Person() { }

mixin(Person.prototype, canEat, canWalk);