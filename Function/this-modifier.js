// Different methods to change the value of this in function

function person(id, roll) {
    console.log(this);
}

// Calling actual function
// person();

// { fname: "Aashish" } will substitute the global object of the function 
person.call({ fname: "Aashish" }, 24, 1);

// The only difference between call and apply is in apply we pass arguments as a array
person.apply({ fname: "Aashish" }, [21, 1]);

// bind() returns a new function point to this object 
const newPerson = person.bind({ fname: "Aashish" }, 1, 2);
newPerson();

// The bind approach to use this in the callback function.
const videoBind = {
    title: "a",
    tags: ["a", "b", "c"],
    play() {
        // Here this references the object itself, because play is a method in the video object.
        console.log(this);
    },
    showTags() {
        this.tags.forEach(
            function (tag) {
                console.log(this.title, tag);
            }.bind(this)
        );
    },
};

// Using arrow function
// Arrow function inherit 'this' from the containing function or parent function/object
// i.e it doesn't refer to global object
const videoArrow = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        }
        );
    },
};

console.log(videoArrow);