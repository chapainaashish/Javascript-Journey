// Cloning/Duplicating Object in JavaScript
const student = {
    fname: "leonardo",
    study() {
        console.log("10-4");
    }
};

const anotherStudent = {};

//OLD WAY{Not recommended}
for (let key in student) {
    anotherStudent[key] = student[key];
    //creating property     assigning that property value to student property value
}

//This method is used to combine different object and made a single object from them
//  {}: Target object, student: Source object 
// As a target we can pass an empty object, and then one or more source objects.s
const student2 = Object.assign({}, student);

//Adding address property to student3 object along with student properties
const student3 = Object.assign({ address: "Pokhara" }, student)

// MORE ELEGANT AND NEW WAY: to copy all the methods and properties of the source object
// Using the Spread Operator, '...': spread operator
const student4 = { ...student }

