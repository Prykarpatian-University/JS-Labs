class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("This is a square with all four sides equal.");
    }

    length() {
        return 4 * this.a;
    }

    square() {
        return this.a ** 2;
    }

    info() {
        console.log("Square info:");
        console.log("Side length:", this.a);
        console.log("Perimeter:", this.length());
        console.log("Area:", this.square());
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("This is a rectangle with opposite sides equal and all angles at 90 degrees.");
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b;
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("This is a rhombus with all sides equal, and opposite angles equal.");
    }

    length() {
        return 4 * this.a;
    }

    square() {
        return this.a ** 2 * Math.sin(this.alpha * Math.PI / 180);
    }
}

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("This is a parallelogram with opposite sides equal and opposite angles equal.");
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b * Math.sin(this.alpha * Math.PI / 180);
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const squareObj = new Square(5);
const rectangleObj = new Rectangle(4, 6);
const rhombusObj = new Rhombus(7, 60, 120);
const parallelogramObj = new Parallelogram(8, 6, 60, 120);

squareObj.info();
rectangleObj.info();
rhombusObj.info();
parallelogramObj.info();
