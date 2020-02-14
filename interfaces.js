//Interfaces(duck typing)
function printLab(labObj) {
    return labObj.lab;
}
var myObj = { num: 100, lab: "Hello there stranger!" };
var z = printLab(myObj);
var anotherObj = { num: 100 };
function printLabb(labObj) {
    return labObj.lab;
}
var y = printLab(myObj);
function createCar(configuration) {
    var type_of_car = { type: "jeep", maximum_capacity: 5 };
    if (configuration.windows == 4) {
        type_of_car.type = "jeep" || "sedan";
    }
    else if (configuration.windows == 5) {
        type_of_car.type = "hatchback";
    }
    else if (configuration.windows == 2) {
        type_of_car.type = "coupe";
    }
    if (configuration.wheels == 2) {
        type_of_car.type = "bicycle" || "scooter";
        type_of_car.maximum_capacity = 2;
    }
    else {
        type_of_car.maximum_capacity = 5;
    }
    return type_of_car;
}
var carOne = createCar({ windows: 5, wheels: 4, owner: "James" });
var pointOne = { x: 0, y: 0 };
var pointTwo = { x: 5, y: 3 };
console.log(pointOne.x); // read
// pointOne.x = 10; // error as is only readonly
// Readonly for arrays
var arrayOne = [10, 20, 30];
var rArray = arrayOne;
rArray.length;
rArray[0];
//rArray[1] = 50; // error can't modify the value as is read only
rArray.toString;
var AShape = /** @class */ (function () {
    function AShape(class_type, family) {
        this.sides = new Number();
        this.color = new String();
        this.type = new String();
    }
    AShape.prototype.calculatePerimeter = function (type, side) {
        if (type == "circle") {
            this.sides = 1;
            this.color = "red";
            this.type = "circle";
            var perimeter = (2 * 3.14 * side);
            return perimeter;
        }
        else if (type == "square") {
            this.sides = 4;
            this.color = "blue";
            this.type = "square";
            var perimeter = (2 * side);
            return perimeter;
        }
        else {
            return side;
        }
    };
    return AShape;
}());
