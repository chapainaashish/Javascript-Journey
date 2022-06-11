//Just like a factory producing products, factory function produce objects

function addPerson(fname, lastName) {
    return person = {
        // we can also define properties like this if key and value are same
        // lastName: lastName
        firstName: fname,
        lastName,
        eat() {
            console.log("eat")
        }
    };
}

const aashish = addPerson("Aashish", "Chapain");
console.log(aashish)