// Sorting an array
// Affect the original array
// FOR NUMBER AND STRING ONLY[NOT OBJECTS]
const marks = [5, 3, 9, 2, 1];
marks.sort();
console.log(marks);

// Reversing sorted array
// FOR NUMBER AND STRING ONLY[NOT OBJECTS]
marks.reverse();
console.log(marks);

// SORTING OBJECTS
const person = [
    { roll: 1, fname: "saroj" },
    { roll: 2, fname: "aashish" }
];

person.sort(
    function (a, b) {
        const upperA = a.fname.toLowerCase();
        const upperB = b.fname.toLowerCase();

        if (upperA < upperB) return -1;
        if (upperA > upperB) return 1;
        return 0;
    }
)
console.log(person);