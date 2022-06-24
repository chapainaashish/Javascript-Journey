/* 
Iterable are the objects that can be iterated using for..of loop
iterable use Symbol.iterator property to get the iterator
An object becomes an iterator when it implements a next() method.

The next() method must return an object with two properties
    value (the next value)
    done (true or false)
*/

// Create an Object
myNumbers = {};

// Making it Iterable
myNumbers[Symbol.iterator] = function () {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) { done = true }
            return { value: n, done: done };
        }
    };
}

// using for..of loop to iterate over iterable object
for (const num of myNumbers) {
    console.log(num);
}