function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
const circle1 = new Circle(5);
console.log(circle1.getDiameter())

// console.log("sdfds")