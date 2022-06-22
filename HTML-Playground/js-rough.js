
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
        // return person.firstName + " " + person.lastName; same as above
    }
};

console.log(person.fullName())