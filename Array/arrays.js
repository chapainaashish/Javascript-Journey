//Referenced data type of Javascript{Array}
// In JavaScript, arrays use numbered indexes.  

// In JavaScript, objects use named indexes.

// Arrays are a special kind of objects, with numbered indexes.

let firstName = ["aashish", "ashbin", 11, 45];

console.log(firstName);

//appending item in array
firstName[4] = "chapain";
console.log(firstName);

// changing array item
firstName[1] = "saroj";
console.log(firstName);

//printing len of the array
console.log(firstName.length);

//Iterating an array
for (let item of firstName) {
    console.log(item);
}

// Using for each method
firstName.forEach(function (value) {
    console.log(value);
});

// Using for each method using arrow function
firstName.forEach(value => console.log(value)
);

// Retrieving index also
firstName.forEach((values, index) => console.log(index, value));
