// JSON Stringify is the method that converts a JavaScript object into a JSON string.
// JSON Stringify will not stringify functions
const person = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking']
}

// jsonperson is now a javascript string ready to be displayed
let jsonperson = JSON.stringify(person);
console.log(jsonperson);