// Defining circle area object
const circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area)

circle.radius = 3;
console.log(circle.area);

