
// Logical Operator with non-boolean value
// with this technique we can provide default value 
console.log(false || "aashish");
// return "aashish" (true)

// Falsy (false) Value
// undefined
// null
// false
// ""   (empty string)
// NAN (Not a number)

//Truthy: Anything that is not Falsy is TRUTHY

//example
let userName = "aashish";
let defaultName = "user123";

let resultName = userName || defaultName;
console.log(resultName);
//return aashish


//example
let usersName = undefined;
let defaultsName = "user123";

let resultsName = usersName || defaultsName;
console.log(resultsName);
//return user123


// Bitwise Operator AND: Do AND operation on two binary digit &
// Bitwise Operator OR: Do OR operation on two binary digit |
console.log(1 | 2);
console.log(1 & 2);