class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Паралелограм - це чотирикутник, у якого протилежні сторони паралельні та рівні між собою.");
    }

    length() {
        console.log("Периметр паралелограма: " + (2 * (this.a + this.b)));
    }

    square() {
        console.log("Площа паралелограма: " + (this.a * this.b * Math.sin(this.alpha * Math.PI / 180)));
    }

    info() {
        console.log("Характеристики паралелограма:");
        console.log("Довжина сторін: a = " + this.a + ", b = " + this.b);
        console.log("Тупий кут: " + this.alpha + " градусів");
        console.log("Гострий кут: " + this.beta + " градусів");
        console.log("Периметр: " + (2 * (this.a + this.b)));
        console.log("Площа: " + (this.a * this.b * Math.sin(this.alpha * Math.PI / 180)));
    }
}

const parallelogram = new Parallelogram(5, 7, 120, 60);
Parallelogram.help();
parallelogram.length();
parallelogram.square();
parallelogram.info();
