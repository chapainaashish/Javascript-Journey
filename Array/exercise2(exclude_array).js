// Take original array and the elements that should be removed from that array

// RECOMMENDED
// it doesn't modifies the original array
function elementExclude(originalArray, excludeArray) {
    const modifiedArray = []
    for (let element of originalArray) {
        if (!excludeArray.includes(element))
            modifiedArray.push(element);
    }
    return modifiedArray;
}
let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let array4 = [3, 6, 9];
let array5 = elementExclude(array3, array4);
console.log(array3);
console.log(array5);

// NOT RECOMMENDED 
// REASON: it modifies the original array
function excludeElement(originalArray, excludeArray) {
    for (let i = 0; i < excludeArray.length; i++) {
        if (originalArray.includes(excludeArray[i])) {
            let arrayIndex = originalArray.indexOf(excludeArray[i]);
            originalArray.splice(arrayIndex, 1);
        }
    }
    return originalArray;
}
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let array2 = [3, 6, 9];
let newArray = excludeElement(array1, array2);
console.log(array1);
console.log(newArray);