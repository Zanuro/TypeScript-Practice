//Classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(animal_type, animal_name, animal_age) {
        this.type = animal_type;
        this.name = animal_name;
        this.age = animal_age;
    }
    Animal.prototype.animal_details = function () {
        return "The animal is of type: " + this.type + ",it has " + this.age +
            " and is called: " + this.name;
    };
    return Animal;
}());
var firstAnimal = new Animal("bear", "Jimmy", 10);
var secondAnimal = new Animal("cat", "Kitty", 5);
firstAnimal.animal_details();
secondAnimal.age = 7;
secondAnimal.name = "Kitten";
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eats = function () {
        if (this.age > 5 && this.age < 10) {
            console.log(this.name + " eats " + Math.floor(Math.random() * (5 - 1 + 1) + 1) + " kg a week");
        }
    };
    Dog.prototype.barks = function () {
        console.log(this.name + " barks a lot!");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.eats = function () {
        if (this.age > 5 && this.age < 10) {
            console.log(this.name + " eats " + Math.floor(Math.random() * (2 - 1 + 1) + 1) + " kg a week");
        }
    };
    Cat.prototype.meows = function () {
        console.log(this.name + " meows a lot!");
    };
    return Cat;
}(Animal));
var thirdAnimal = new Animal("snake", "Rudolf", 2);
var dog = new Dog("dog", "Benjy", 4);
var cat = new Cat("cat", "Kitty", 4);
dog.barks();
//cat.barks(); // not a valid method
dog.eats();
//thirdAnimal.eats(); // not a valid method
// Public, private, and protected modifiers
var Carr = /** @class */ (function () {
    function Carr(car_type, car_engine, number_of_horsepw) {
        this.type = car_type;
        this.engine = car_engine;
        this.horse_power = number_of_horsepw;
    }
    Carr.prototype.car_details = function () {
        return "The car of type " + this.type + " has a " + this.engine + " engine with " + this.horse_power + " horse power";
    };
    Carr.prototype.car_fabrication = function () {
        if (this.type == "Audi" && this.engine == "1.4DA") {
            return "1977";
        }
        else
            return "-";
    };
    return Carr;
}());
var firstCar = new Carr("Audi", "1.4TD", 105);
///firstCar.engine // cannot access private member
firstCar.car_details();
//firstCar.car_fabrication(); // cannot access private method
//Accessors
var max_name_length = 10;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (newName && newName.length > max_name_length) {
                throw new Error("fullName has a max length of " + max_name_length);
            }
            this._fullName = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "John Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
// Abstract classes
var Vehicle = /** @class */ (function () {
    function Vehicle(type, year, hp) {
        this.type = type;
        this.year = year;
        this.hp = hp;
    }
    Vehicle.prototype.printDetails = function () {
        console.log("This is a " + this.type + " from the " + this.year + " with " + this.hp + " horse power");
    };
    return Vehicle;
}());
var Wheel = /** @class */ (function (_super) {
    __extends(Wheel, _super);
    function Wheel(wheel_s, wheel_t) {
        var _this = _super.call(this, "sedan", 2004, 108) || this;
        _this.wheel_size = wheel_s;
        _this.wheel_type = wheel_t;
        return _this;
    }
    Wheel.prototype.printWheelParts = function () {
        console.log("This car has wheels of type " + this.wheel_type + " on " + this.wheel_size);
    };
    Wheel.prototype.calculate_exprenses = function () {
        var sum = (this.type == "sedan") ? 2 * this.hp + this.year : (this.type == "hatchback") ? 3 * this.hp * this.year :
            this.hp + this.year;
        return sum;
    };
    return Wheel;
}(Vehicle));
var vehicleOne;
// let vehicleTwo = new Vehicle(); // error cannot create an instance of an abstract class
var wheelOne = new Wheel(10, "steel");
wheelOne.calculate_exprenses();
wheelOne.printWheelParts();
wheelOne.printDetails();
