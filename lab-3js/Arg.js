function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

const triangle1 = Triangular();
const triangle2 = Triangular(6, 8, 10);
const triangle3 = Triangular(9, 12, 15);
console.log(triangle1);
console.log(triangle2);
console.log(triangle3);

function PiMultiplier(number) {
    return function() {
        return Math.PI * number;
    };
}

const multiplyBy2Pi = PiMultiplier(2);
const multiplyBy3HalfPi = PiMultiplier(1.5);
const divideBy2Pi = PiMultiplier(0.5);
console.log(multiplyBy2Pi());
console.log(multiplyBy3HalfPi());
console.log(divideBy2Pi());