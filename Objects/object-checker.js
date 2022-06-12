// Constructor function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};

// Function to check if two objects have same key values
function areEqual(address1, address2) {
    for (let key in address1, address2) {
        if (address1[key] !== address2[key]) {
            return false;
        }
    }
    return true;
}

// Function to check if two objects are pointing to the same object.
function areSame(address1, address2) {
    return address1 === address2
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

