// The get syntax binds an object property to a function
// that will be called when that property is looked up. 
// this way we can use function like a property
// Getter is used to set object property dynamically and it is read only
// to make it write, we have to use setter, setter is used to assign some 
// value to the property dynamically 
const person = {
    firstName: "Aashish",
    lastName: "Chapain",

    // Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Setter
    set fullName(value) {
        const names = value.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}


console.log(person.fullName); // Here we print Aashish Chapain using the getter

person.fullName = 'Viviane Sedola' // Here with the setter we modify the full name to Viviane Sedola

console.log(person.fullName) // Now with the getter the result is Viviane Sedola
console.log(person)