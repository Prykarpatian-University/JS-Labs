class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Прямокутник - це чотирикутник з протилежними сторонами рівними і всі кути прямі (по 90 градусів кожен).");
    }

    length() {
        console.log("Сума довжин усіх чотирьох сторін: " + (2 * this.a + 2 * this.b));
    }

    square() {
        console.log("Площа прямокутника: " + (this.a * this.b));
    }

    info() {
        console.log("Характеристики прямокутника:");
        console.log("Довжина сторін: a = " + this.a + ", b = " + this.b);
        console.log("Сума довжин сторін: " + (2 * this.a + 2 * this.b));
        console.log("Площа: " + (this.a * this.b));
    }
}

const rectangle = new Rectangle(5, 7);
Rectangle.help();
rectangle.length();
rectangle.square();
rectangle.info();
