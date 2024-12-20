// Calling super in a constructor bound to a different prototype

class Polygon {
  constructor() {
    this.name = "Polygon"
  }
}

class Rectangle {
  constructor() {
    this.name = "Rectangle"
  }
}

class Square extends Polygon {
  constructor() {
    super()
  }
}

// Make Square extend Rectangle (which is a base class) instead of Polygon
Object.setPrototypeOf(Square, Rectangle)

const newInstance = new Square()

// newInstance is still an instance of Polygon, because we didn't
// change the prototype of Square.prototype, so the prototype chain
// of newInstance is still
//   newInstance --> Square.prototype --> Polygon.prototype
console.log(newInstance instanceof Polygon) // true
console.log(newInstance instanceof Rectangle) // false

// However, because super() calls Rectangle as constructor, the name property
// of newInstance is initialized with the logic in Rectangle
console.log(newInstance.name) // Rectangle


