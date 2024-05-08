class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("A parallelogram is a quadrilateral in which opposite sides are parallel and equal to each other.");
    }

    length() {
        console.log("Perimeter of parallelogram: " + (2 * (this.a + this.b)));
    }

    square() {
        console.log("Parallelogram area: " + (this.a * this.b * Math.sin(this.alpha * Math.PI / 180)));
    }

    info() {
        console.log("Parallelogram characteristic:");
        console.log("Side length: a = " + this.a + ", b = " + this.b);
        console.log("Obtuse angle: " + this.alpha + " градусів");
        console.log("Acute angle: " + this.beta + " градусів");
        console.log("Периметр: " + (2 * (this.a + this.b)));
        console.log("Площа: " + (this.a * this.b * Math.sin(this.alpha * Math.PI / 180)));
    }
}

const parallelogram = new Parallelogram(5, 7, 120, 60);
Parallelogram.help();
parallelogram.length();
parallelogram.square();
parallelogram.info();