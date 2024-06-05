class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Квадрат - це чотирикутник з чотирма рівними сторонами та чотирма рівними кутами (по 90 градусів кожен).");
    }

    length() {
        console.log("Сума довжин усіх чотирьох сторін: " + 4 * this.a);
    }

    square() {
        console.log("Площа квадрата: " + Math.pow(this.a, 2));
    }

    info() {
        console.log("Характеристики квадрата:");
        console.log("Довжина сторони: " + this.a);
        console.log("Сума довжин сторін: " + 4 * this.a);
        console.log("Площа: " + Math.pow(this.a, 2));
    }
}

const square = new Square(5);
Square.help();
square.length();
square.square();
square.info();
