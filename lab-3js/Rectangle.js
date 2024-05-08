class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("A rectangle is a quadrilateral with opposite sides equal and all angles right angles (each of 90 degrees).");
    }

    length() {
        console.log("Sum of all sides: " + (2 * this.a + 2 * this.b));
    }

    square() {
        console.log("Rectangle area: " + (this.a * this.b));
    }

    info() {
        console.log("Rectangle characteristic:");
        console.log("Side length: a = " + this.a + ", b = " + this.b);
        console.log("Sum of side length: " + (2 * this.a + 2 * this.b));
        console.log("Area: " + (this.a * this.b));
    }
}

const rectangle = new Rectangle(5, 7);
Rectangle.help();
rectangle.length();
rectangle.square();
rectangle.info();