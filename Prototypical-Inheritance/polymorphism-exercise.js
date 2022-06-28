function HtmlElement() {
    this.click = function () {
        console.log("clicked");
    }
}

HtmlElement.prototype.focus = function () {
    console.log("focused");
}
DeriveHTML.prototype = new HtmlElement()
DeriveHTML.prototype.constructor = DeriveHTML;

function DeriveHTML(items = []) {
    this.items = items;

    this.addItem = function (element) {
        this.items.push(element);
    }
    this.removeItem = function (element) {
        this.items.pop(element);
    }
    this.render = function () {
        return `<select>\n
                ${this.items.map(n => `<option>${n}</option>`).join('')}
                </select>`

        /* ALTERNATE METHOD
        const listItem = this.items.map(function (n) {
            return "<option>" + n + "</option>"
        });
        const itemList = "<select>\n" + listItem.join('\n') + "\n</select>";
        return itemList;
        */



    }
}

ImageLoader.prototype = new HtmlElement();
ImageLoader.prototype.constructor = ImageLoader;

function ImageLoader(src = undefined) {
    this.src = src;
    this.render = function () {
        return `<img src="${this.src} />`
    }

}

const elements = [new DeriveHTML([1, 2, 3]), new ImageLoader('https://goggle.com')];
for (let element of elements) {
    element.render()
    console.log(element.render())
}