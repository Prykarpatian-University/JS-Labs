let car1 = new Object();
car1.color = "black";
car1.maxSpeed = 188;
car1.driver = new Object();
car1.driver.name = "Bo Bo";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";
car1.tuning = true;
car1["number of accidents"] = 0;

var car2 = {
    color: "white",
    maxSpeed: 180,

    driver: {
        name: "Lo lo",
        category: "B",
        "personal limitations": null
    },

    tuning: false,
    "number of accidents": 2
};



car1.drive = function() {
    console.log("I am not driving at night");
};

car2.drive = function () {
    console.log("I can drive anytime");
}

car1.drive();
car2.drive();
