class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  area() {
    return this.radius * this.radius * Math.PI;
  }

  paint() {
    console.log("print the color", this.color);
  }
}

class Rectangle extends Circle {
  constructor(radius, length) {
    super(radius);
    this.length = length;
  }
}

const c1 = new Circle(5, "grey");
console.log(c1.area());
c1.paint();

const r1 = new Rectangle(20, 80);
const rect = r1.area();
console.log(rect);
