//Enumerating object in javascript
const person = {
    fname: "aashish",
    eat() {
        console.log("Eating Pizza");
    }
}

//Enumerating object using for in loop
for (let key in person) {
    console.log(key, person[key]);
}

//Since, Object in javascript aren't iterable we can't use (FOR OF) loop directly
//NOTE: FOR OF loop is used to iterate over iterable like: array, map

//Object.keys returns object keys as string array which is iterable with FOR OF LOOP
for (let keys of Object.keys(person)) {
    console.log(keys);
}

//Object.keys returns object keys value pair as an array which is iterable with FOR OF LOOP
for (let entry of Object.entries(person)) {
    console.log(entry);
}

//Using in operator we can check that the given property exist in given object
if ('fname' in person)
    console.log("Yes")