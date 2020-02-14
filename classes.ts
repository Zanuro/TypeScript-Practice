//Classes


class Animal{
    type: string;
    name: string;
    age:number;
    constructor(animal_type:string,animal_name:string,animal_age:number){
        this.type = animal_type;
        this.name=animal_name;
        this.age=animal_age;
    }
    animal_details():string{
        return "The animal is of type: " + this.type + ",it has " + this.age + 
        " and is called: " + this.name;
    }
}

let firstAnimal = new Animal("bear","Jimmy",10);
let secondAnimal = new Animal("cat","Kitty",5);

firstAnimal.animal_details();
secondAnimal.age = 7;
secondAnimal.name = "Kitten";


class Dog extends Animal{

    eats(){
        if(this.age > 5 && this.age < 10){
            console.log(`${this.name} eats ${Math.floor(Math.random() * (5 - 1 + 1) + 1)} kg a week`);
        } 
    }
    barks(){
        console.log(`${this.name} barks a lot!`);
    }
} 

class Cat extends Animal{
    eats(){
        if(this.age > 5 && this.age < 10){
            console.log(`${this.name} eats ${Math.floor(Math.random() * (2 - 1 + 1) + 1)} kg a week`);
        } 
    }
    meows(){
        console.log(`${this.name} meows a lot!`);
    }
}

let thirdAnimal = new Animal("snake","Rudolf",2);
let dog = new Dog("dog","Benjy",4);
let cat = new Cat("cat","Kitty",4);
dog.barks();
//cat.barks(); // not a valid method
dog.eats();
//thirdAnimal.eats(); // not a valid method

// Public, private, and protected modifiers

class Carr{
    public type:string;
    private engine:string;
    public horse_power:number;
    public constructor(car_type:string,car_engine:string,number_of_horsepw:number){
        this.type = car_type;
        this.engine = car_engine;
        this.horse_power = number_of_horsepw;
    }
    public car_details():string{
        return "The car of type " + this.type + " has a " + this.engine + " engine with " + this.horse_power + " horse power";
    }
    private car_fabrication():string{
        if(this.type == "Audi" && this.engine == "1.4DA"){
            return "1977";
        }
        else
            return "-";
    }

}

let firstCar = new Carr("Audi","1.4TD",105);
///firstCar.engine // cannot access private member
firstCar.car_details();
//firstCar.car_fabrication(); // cannot access private method

//Accessors
const max_name_length = 10;


class Employee {
    private _fullName: any;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > max_name_length) {
            throw new Error("fullName has a max length of " + max_name_length);
        }
        
        this._fullName = newName;
    }
}

let employee = new Employee();
employee.fullName = "John Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

// Abstract classes


abstract class Vehicle {

    constructor(public type:string,public year:number,public hp:number){}

    printDetails():void{
        console.log("This is a " + this.type + " from the " + this.year + " with " + this.hp + " horse power");
    }
    abstract printWheelParts(): void;
}
class Wheel extends Vehicle{

    private wheel_size:number;
    private wheel_type:string;
    constructor(wheel_s:number,wheel_t:string){
        super("sedan",2004,108);
        this.wheel_size = wheel_s;
        this.wheel_type = wheel_t;
    }

    printWheelParts():void{
        console.log("This car has wheels of type " + this.wheel_type + " on " + this.wheel_size);
    }

    calculate_exprenses():number{

        let sum = (this.type == "sedan")? 2*this.hp+this.year : (this.type=="hatchback")? 3*this.hp*this.year:
        this.hp+this.year;
        return sum;
    }
}

let vehicleOne:Vehicle;
// let vehicleTwo = new Vehicle(); // error cannot create an instance of an abstract class
let wheelOne = new Wheel(10,"steel");

wheelOne.calculate_exprenses();
wheelOne.printWheelParts();
wheelOne.printDetails();





