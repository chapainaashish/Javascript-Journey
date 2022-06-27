function HtmlElement() {
    this.click = function () {
        console.log("clicked");
    }
}

HtmlElement.prototype.focus = function () {
    console.log("focused");
}

function DeriveHTML(...elements) {
    this.items = [];

    this.addItem = function (element) {
        this.items.push(element);
    }
    this.removeItem = function (element) {
        this.items.pop(element);
    }
}

const j = new DeriveHTML([1, 2, 3]);
j.addItem(9);
console.log(j)