// fizz-buzz exercise 
function fizzBuzz(number) {
    if (typeof number !== 'number')
        return NaN;
    if ((number % 5 === 0) && (number % 3 === 0))
        return "FizzBuzz";
    if (number % 3 === 0)
        return "Fizz";
    if (number % 5 === 0)
        return "Buzz";
    else
        return number;
}

console.log(fizzBuzz(15))