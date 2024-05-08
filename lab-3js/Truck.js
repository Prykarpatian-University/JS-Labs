class Truck {
    constructor(color, weight, avgSpeed, brand, model) {
        this.color = color;
        this.weight = weight;
        this.avgSpeed = avgSpeed;
        this.brand = brand;
        this.model = model;
    }

    trip() {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            var message = "Driver " + this.driver.name;
            message += this.driver.nightDriving ? " drives at night" : " does not drive at night";
            message += " and has " + this.driver.experience + " years of experience";
            console.log(message);
        }
    }
}


Truck.prototype.constructor.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

var truck1 = new Truck("Black", 6000, 55, "Ford", "F150");
var truck2 = new Truck("Red", 7000, 60, "Man", "X105");

Truck.AssignDriver.call(truck1, "Po Po", true, 7);
Truck.AssignDriver.call(truck2, "Ho Ho", false, 5);

truck1.trip();
truck2.trip();