// Date object in javascript

const now = new Date();
console.log(now);

const date1 = new Date('November 21 2002')
console.log(date1);

// Month is 0 based indexed
let date2 = new Date(2020, 0, 11, 9, 0);
console.log(date2)

// Date Object have several "get" and "set" methods.

// Get the day of the month.
console.log(now.getDate());

// to set to a different date.
console.log(now.setFullYear(2002));

// Converts date object to string.
console.log(now.toDateString());

// Return the time component of the date object.
console.log(now.toTimeString());

// Converts to a standard ISO format commonly used in web applications.
console.log(now.toISOString());