function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

const defaultTriangle = Triangular();
const customTriangle1 = Triangular(6, 8, 10);
const customTriangle2 = Triangular(9, 12, 15);

console.log(defaultTriangle);
console.log(customTriangle1);
console.log(customTriangle2);

function PiMultiplier(number) {
    return function() {
        return Math.PI * number;
    };
}

const multiplyBy2 = PiMultiplier(2);
const multiplyBy1_5 = PiMultiplier(1.5);
const divideBy2 = PiMultiplier(0.5);

console.log(multiplyBy2());
console.log(multiplyBy1_5());
console.log(divideBy2());

function Painter(color) {
    return function(obj) {
        if (obj && obj.type) {
            console.log(`Painting ${obj.type} with ${color} color`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const object1 = { maxSpeed: 280, type: "Truck" };
const object2 = { maxSpeed: 180, type: "Sportcar", avgSpeed: 90, color: "purple" };
const object3 = { color: "magenta", loadCapacity: 2400, isCar: true };

PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);
