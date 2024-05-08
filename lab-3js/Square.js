class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("A square is a quadrilateral with four equal sides and four equal angles (each of 90 degrees");
    }

    length() {
        console.log("The sum of the lengths of all four sides " + 4 * this.a);
    }

    square() {
        console.log("The area of the square: " + Math.pow(this.a, 2));
    }

    info() {
        console.log("Characteristic of square:");
        console.log("The length of the side: " + this.a);
        console.log("sum of side length: " + 4 * this.a);
        console.log("Area: " + Math.pow(this.a, 2));
    }
}

const square = new Square(5);
Square.help();
square.length();
square.square();
square.info();
