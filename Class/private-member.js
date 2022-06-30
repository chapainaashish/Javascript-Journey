// Making private class member in JS && GETTER AND SETTER
// Don't use just '_' or '__' to pretend method as private, that's just bullshit
// Using Symbol() method
// we can still somehow access the private member made using Symbol() but that's not convenient
const _fname = Symbol();
const _read = Symbol();

class Student {
    constructor(fname) {
        // private property
        this[_fname] = fname;
    }

    // private function
    [_read]() {
        console.log("Reading");
    }
}

const c = new Student("aashish");

// this is how we can somehow access so called  private member
const privateProperty = Object.getOwnPropertySymbols(c)[0];
console.log(c[privateProperty]);

// ----------------------ANOTHER WAY------------------------
// WeakMaps give us better protection than symbols. There is no way 
// to access private members implemented using WeakMaps from the 
// outside of an object. 
// using WeakMaps to implement private properties and methods
const _width = new WeakMap();

class Rectangle {
    constructor(width) {
        _width.set(this, width);
    }

    draw() {
        console.log('Rectangle with width' + _width.get(this));
    }

    //getter
    get width() {
        return _width.get(this);
    }

    //setter
    set width(newvalue) {
        _width.set(this, newvalue)
    }

}

const r = new Rectangle(3);
// retrieving private property using getter
r.width;
// setting private property using setter
r.width = 8;
console.log(r.width);
