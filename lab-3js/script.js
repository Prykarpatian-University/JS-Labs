const PiMultiplier = (num) => {
    const π = Math.PI;
    return function() {
        return π * num;
    };
};

const multiplyByTwo = PiMultiplier(2);
const multiplyByThree = PiMultiplier(3);
const divideByTwo = PiMultiplier(0.5);

console.log(multiplyByTwo());
console.log(multiplyByThree());
console.log(divideByTwo());

const first_pi = PiMultiplier(2);
const second_pi = PiMultiplier(2/3);
const third_pi = PiMultiplier(0.5);

console.log(first_pi());
console.log(second_pi());
console.log(third_pi());

function Painter(color) { 
    return function paint(obj) { 
        if (obj === undefined) {
            console.log('No \'type\' property occurred!');
        } else {
            console.log(`${color} - ${obj.type || obj.maxSpeed}`);  
        }
      };
}

const PaintBlue = Painter('Blue'); 
const PaintRed = Painter('Red');
const PaintYellow = Painter('Yellow');
console.log('Painter');
PaintBlue({ maxSpeed: 280, type: 'Sportcar', color: 'magenta' }); 
PaintRed({ type: 'Truck', avgSpeed: 90, loadCapacity: 2400 }); 
PaintYellow({ maxSpeed: 180, color: 'purple', isCar: true });
PaintYellow(); 

