// LOOPS IN JAVASCRIPT
// loop in JAVASCRIPT is same as C
// for 
// while
// do.. while

// for..in loop is used to iterate over the properties of an object
// for..in 

// for..of loop is used to iterate over the  elements in array
// for..of

// we can also use break and continue statement in javascript as in other language

//for loop
for (let j = 0; j < 5; j++) {
    console.log("Welcome to Javascript World");
}

//while loop
let i = 5;
while (i >= 0) {
    if (i % 2 === 0) console.log("Number is even", i);
    i--;
}

//do..while loop
let j = 5;
do {
    if (j % 2 === 0) console.log("Number is also even", j);
    j--;
} while (j >= 0)

//for..in loop
//for..in loop is used to iterate over the properties of an object
const details = {
    firstName: "Aashish",
    age: 19
};

for (let key in details) {
    console.log(key, details[key]);
}

// for..of loop
//for..of loop is used to iterate over the  elements in array

const names = ["aashish", "milan", "jack"];
for (let name of names) {
    console.log(name);
}