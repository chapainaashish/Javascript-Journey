// Static method are methods which aren't callable through a class instance
// class is used to call this type of method
class Student {
    constructor(fname) {
        this.fname = fname;
    }
    // defining static function
    static read(value) {
        console.log("reading " + value);

    }

    // defining normal function
    write() {
        console.log("writing")
    }

    // static function which return new object
    static parse(str) {
        const fname = JSON.parse(str).fname;
        return new Student(fname);
    }
}

// calling static method
Student.read("book");

// calling static function 
const std = Student.parse('{"fname":"aashish"}');

// calling normal function
std.write();