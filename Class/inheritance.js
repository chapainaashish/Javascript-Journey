// Class inheritance in JS && Method Overriding
class Animal {
    constructor(food) {
        this.food = food;
    }
    eat() {
        console.log(`eating ${this.food}`);
    }
    breath() {
        console.log("breathing");
    }
}

class Human extends Animal {
    constructor(food, book) {
        // we must also call base class constructor
        super(food);
        this.book = book;
    }
    read() {
        console.log(`reading ${this.book}`);
    }
    // Method overriding
    breath() {
        console.log("human breathing");
    }
}

const h1 = new Human("rice", "Ikigai");
h1.read();
h1.eat();
// Human read method will be called 
h1.breath();