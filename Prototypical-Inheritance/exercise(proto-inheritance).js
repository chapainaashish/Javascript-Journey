function HtmlElement() {
    this.click = function () {
        console.log("clicked");
    }
}

HtmlElement.prototype.focus = function () {
    console.log("focused");
}

function DeriveHTML(items = []) {
    this.items = items;

    this.addItem = function (element) {
        this.items.push(element);
    }
    this.removeItem = function (element) {
        this.items.pop(element);
    }
}

DeriveHTML.prototype = new HtmlElement()
DeriveHTML.prototype.constructor = DeriveHTML;

const j = new DeriveHTML();
console.log(j)