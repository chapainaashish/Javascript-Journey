// Common JS is used to import/export (made) modules in node

// Importing Circle Class
// require(file-path)
const Circle = require('./circle');

const c = new Circle(10);
c.draw();