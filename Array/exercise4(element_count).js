// Return the total number of elements in array
function countOccurrencesMosh(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0
        return accumulator + occurrence;
    }, 0);
}
const numbers = [1, 2, 3, 4, 1, 1];

const count = countOccurrencesMosh(numbers, 1);
console.log(count);

/*ANOTHER METHOD
function countOccurrences(array, searchElement) {
    let counter = 0;
    array.forEach(element => {
        if (element === searchElement) counter += 1;
    });
    return counter;
}
*/