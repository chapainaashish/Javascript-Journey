// Defining Class in JS
// NOTE: unlike functions CLASS aren't hoisted 
// We can define Class in two ways
// 1.   Class declaration(RECOMMENDED)
class Student {
    constructor(fname) {
        this.fname = fname;
        // define in instance properties
        this.write = function () {
            console.log(this.fname + " writing...");
        }
    }
    read() {
        // define in object prototype
        console.log(this.fname + " reading...");
    }
}

const aashish = new Student("AASHISH");
aashish.read();
aashish.write()

// 2.   Class Expression NOT RECOMMENDED
const People = class { };
