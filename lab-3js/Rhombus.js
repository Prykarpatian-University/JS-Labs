class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this._alpha = alpha;
        this._beta = beta;
    }

    static help() {
        console.log("Ромб - це чотирикутник з усіма сторонами однакової довжини та протилежні кути рівні між собою.");
    }

    length() {
        console.log("Сума довжин усіх чотирьох сторін: " + (4 * this.a));
    }

    square() {
        console.log("Площа ромба: " + (Math.pow(this.a, 2) * Math.sin(this._alpha * Math.PI / 180)));
    }

    info() {
        console.log("Характеристики ромба:");
        console.log("Довжина сторони: " + this.a);
        console.log("Тупий кут: " + this._alpha + " градусів");
        console.log("Гострий кут: " + this._beta + " градусів");
        console.log("Сума довжин сторін: " + (4 * this.a));
        console.log("Площа: " + (Math.pow(this.a, 2) * Math.sin(this._alpha * Math.PI / 180)));
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
