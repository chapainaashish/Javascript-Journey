/*
Object are used to group highly related variable/function upon the single name
value of the key in javascript can be anything: variable, constant, function
every object has a constructor property and that references a function 
that was used to create that object in javascript, even function are object,
javascript use garbage collector, so we don't have to worry about allocating 
and deallocating memory
*/
const person = {
    firstName: "Aashish",
    address: {
        permanent: "Parbat",
        temporary: "Pokhara"
    },
    phNumber: 983333333,
    mark: [58, 45, 90, 23],
    isPassionate: true,
    eat: function () {
        console.log("eat");
    }
};

// calling eat method
person.eat();

// object in javascript are dynamic that means once we define object in javascript
// we can add, delete method and attributes to that object
person.lastName = "chapain";
delete person.firstName;

//adding method
person.read = function () { }