const car1 = new Object();
car1.color = "Red"; 
car1.maxSpeed = 220; 
car1.driver = {
    name: "Oleksandr Shostak", 
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

const car2 = {
    color: "Blue", 
    maxSpeed: 180, 
    driver: {
        name: "Teodor Poshyvak",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2
};

car1.drive = function() {
    console.log("I am not driving at night");
};

car2.drive = function() {
    console.log("I can drive anytime");
};

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = { name, nightDriving, experience };
};

Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        let message = `Driver ${this.driver.name}`;
        message += this.driver.nightDriving ? " drives at night" : " does not drive at night";
        message += ` and has ${this.driver.experience} years of experience`;
        console.log(message);
    }
};

const truck1 = new Truck("Red", 6000, 55, "Ford", "F-150");
const truck2 = new Truck("Blue", 7000, 60, "Chevrolet", "Silverado");

truck1.AssignDriver("John Doe", true, 10);
truck2.AssignDriver("Jane Smith", false, 5);
truck1.trip(); 
truck2.trip(); 

