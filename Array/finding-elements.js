// Finding elements in array(Primitives)

const marks = [78, 23, 45, 78, 55, 90];

// Arguments; (search_element, starting index)
// Returns index if element exist, Return -1 if element doesn't exist
console.log(marks.indexOf(45, 0));


// Returns index of last given element ifs exist, Return -1 if element doesn't exist
console.log(marks.lastIndexOf(78, 0));

// Returns true if element exist, Return false if element doesn't exist
console.log(marks.includes(23));


/*--------------------------------FINDING ELEMENTS(OBJECTS)-----------------------------------
while searching objects on array we can't directly initialize our criteria
instead we should add a callback function to match our criteria
The find method executes the callback function once for each index of the array until the callback returns a truthy value.
If so, find immediately returns the value of that element. Otherwise, find returns undefined.*/

const persons = [
    {
        fname: 'a',
        salary: 900000
    },
    {
        fname: 'b',
        salary: 800000
    }
];

// -----------------------------------------OBJECT RETURN------------------------------
const person = persons.find(function (person) {
    return person.fname === 'a';
});
// Return object if exists, return undefined if object not exists
console.log(person)

// ----------------------------------------INDEX RETURN--------------------------------
// findIndex() 
// return the index if object exists, returns -1 if not exist.
const person1 = persons.findIndex(function (person1) {
    return person1.fname === 'a';
});

// Returns 0
console.log(person1) 