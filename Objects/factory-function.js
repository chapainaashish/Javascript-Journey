// Just like a factory producing products, factory function produce objects
// Creating object with object literal syntax is bad if we want to have multiple  object with same 
// implementation. So, we either use factory function or constructor function.
// this keyword is not available in factory function and also 'new' keyword is not used to create objects
// through factory function.

function addPerson(fname, lastName) {
    return {
        firstName: fname,
        // lastName: lastName --can be written as below if we have key and value are same
        lastName,
        eat() {
            console.log("eat")
        }
    };
}

const aashish = addPerson("Aashish", "Chapain");
console.log(aashish)