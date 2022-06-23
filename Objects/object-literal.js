/*
OBJECT LITERALS, ADDING, DELETING PROPERTIES OF AN OBJECT
Object are used to group highly related variable/function upon the single name
value of the key. In javascript object can be anything: variable, constant, function.
every object has a constructor property and that references a function 
that was used to create that object in javascript, even function are object,
javascript use garbage collector, so we don't have to worry about allocating 
and deallocating memory.

Objects are commonly defined as constant and it is recommended also
*/
//Referenced data type
let school = {
    address: "NEPAL",
    motto: "Educate the world"
}


const person = {
    firstName: "Aashish",
    address: {
        permanent: "Parbat",
        temporary: "Pokhara"
    },
    phNumber: 983333333,
    mark: [58, 45, 90, 23],
    isPassionate: true,
    info: function () {
        return this.firstName + " " + this.address;
        // return person.firstName + " " + person.lastName; same as above
    }
};

// calling info method
console.log(person.info());

// object in javascript are dynamic that means once we define object in javascript, 
// we can add, delete method and attributes to that object
person.lastName = "chapain";
person['hobby'] = "experimenting";

delete person.firstName;

//adding method
person.read = function () { }

//Creating object inside array
let priceRange = [
    { label: '$', tooltip: 'Inexpensive', minPricePerPerson: 0, maxPricePerPerson: 10 },
    { label: '$', tooltip: 'Moderate', minPricePerPerson: 11, maxPricePerPerson: 20 },
    { label: '$', tooltip: 'Expensive', minPricePerPerson: 21, maxPricePerPerson: 50 },
];

