function Painter(color) {
    return function(object) {
        if (object && object.hasOwnProperty('type')) {
            console.log(`Color: ${color}, Type: ${object.type}`);
        } else {
            console.log(`Color: ${color}, No 'type' property occurred!`);
        }
    };
}

const PaintBlue = Painter('Blue');
const PaintRed = Painter('Red');
const PaintYellow = Painter('Yellow');

const object1 = { maxSpeed: 280, type: 'Truck' };
const object2 = { maxSpeed: 180, type: 'Sportcar', avgSpeed: 90, color: 'purple' };
const object3 = { color: 'magenta', loadCapacity: 2400, isCar: true };

PaintBlue(object1);
PaintRed(object1);
PaintYellow(object1);

PaintBlue(object2);
PaintRed(object2);
PaintYellow(object2);

PaintBlue(object3);
PaintRed(object3);
PaintYellow(object3);
