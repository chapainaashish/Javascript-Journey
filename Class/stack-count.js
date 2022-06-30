// Count, Pop, Push the elements in stack
const _width = new WeakMap();
const _stack = new WeakMap();
class Stack {
    constructor() {
        _stack.set(this, []);
    }

    push(element) {
        _stack.get(this).push(element);

    }

    pop() {
        if (_stack.get(this).length === 0)
            throw new Error("Stack is Empty");
        return _stack.get(this).pop();
    }

    get peek() {
        if (_stack.get(this).length === 0)
            throw new Error("Stack is Empty");
        return _stack.get(this).length;
    }
}

