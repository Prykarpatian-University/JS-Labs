class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this._alpha = alpha;
        this._beta = beta;
    }

    static help() {
        console.log("A rhombus is a quadrilateral with all sides of equal length and opposite angles equal to each other");
    }

    length() {
        console.log("The sum of the lengths of all four sides: " + (4 * this.a));
    }

    square() {
        console.log("Rhombus area: " + (Math.pow(this.a, 2) * Math.sin(this._alpha * Math.PI / 180)));
    }

    info() {
        console.log("Rhombus characteristic:");
        console.log("Rhombus length: " + this.a);
        console.log("Obtuse angle: " + this._alpha + " градусів");
        console.log("Acute angle: " + this._beta + " градусів");
        console.log("Sum of side length: " + (4 * this.a));
        console.log("Area: " + (Math.pow(this.a, 2) * Math.sin(this._alpha * Math.PI / 180)));
    }

    get a() {
        return this._a;
    }

    get alpha() {
        return this._alpha;
    }

    get beta() {
        return this._beta;
    }

    set a(value) {
        this._a = value;
    }

    set alpha(value) {
        this._alpha = value;
    }

    set beta(value) {
        this._beta = value;
    }
}

const rhombus = new Rhombus(5, 120, 60);
Rhombus.help();
rhombus.length();
rhombus.square();
rhombus.info();
rhombus.a = 1;
rhombus.alpha = 100;
rhombus.beta = 50;
console.log(rhombus.a);
console.log(rhombus.alpha);
console.log(rhombus.beta);
