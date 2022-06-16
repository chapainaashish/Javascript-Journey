// Shifting the array elements to given index

function shiftElements(array, index, offset) {
    if (offset > (array.length - index - 1) || (offset < -index)) {
        return "Invalid index as arguments"
    }
    else {
        result = [...array];
        if (offset > 0) {
            while (offset > 0) {
                let temp = result[index + 1];
                result[index + 1] = result[index];
                result[index] = temp;
                index++;
                offset--;
            }
            return result;
        }
        if (offset < 0) {
            while (offset < 0) {
                let temp = result[index - 1];
                result[index - 1] = result[index];
                result[index] = temp;
                index--;
                offset++;
            }
            return result;
        }
    }
}


let numbers = [1, 2, 3, 4, 5, 6, 7];
let results = shiftElements(numbers, 2, -2);
console.log(results);