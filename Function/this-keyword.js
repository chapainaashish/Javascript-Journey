/*
this keyword reference the object that is executing the current function

If that function is part of na object we call that function a method.
method ---> this references that object itself

If that function is a regular function, not part of an object.
function ---> this references the global object (which is the window object in browsers and global in node)

constructor function ---> 'this' references to new object
*/

// CASE 1 (IN OBJECT METHOD)
// As read is a method of people object, 'this' keyword refers to person object itself.
const people = {
    fname: "Aashish",
    id: 2,
    read() {
        console.log(this)
    }
}
people.read();

// CASE 2 (IN BARE/DEFAULT FUNCTION)
// Here,'this' keyword refers to global object which is windows in browser and global in node
function eat() {
    console.log(this);
}
eat();

// CASE 3 (IN CONSTRUCTOR FUNCTION)
// Here, 'this' keyword refers to new Student object
function Student(school, roll) {
    this.school = school;
    this.roll = roll;
    console.log(this);
}

const aashish = new Student("JMC", 1);

const video2 = {
    title: "a",
    tags: ["a", "b", "c"],
    play() {
        // Here 'this' references the object itself, because play is a method in the video object.
        console.log(this);
    },
    showTags() {
        // If we use a function as a callback function, It will be treated as default/bare function 
        // so that 'this' keyword references the global object.
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this); // As a second argument we can pass this keyword. So the 'this' in the callback function references the object itself and not the global object.
    },
};

video2.showTags();
