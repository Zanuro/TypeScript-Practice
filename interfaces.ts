//Interfaces(duck typing)

function printLab(labObj: { lab:string}): string {
    return labObj.lab;
}
let myObj = {num: 100, lab:"Hello there stranger!"};

let z = printLab(myObj);
let anotherObj = {num: 100};

// printLab(anotherObj); // error

interface LabVal{
    lab: string
}

function printLabb(labObj:LabVal):string{
    return labObj.lab;
}
let y = printLab(myObj);
// let x = printLab(anotherObj); // error num type


interface Car{
    windows?: number,
    wheels?:number,
    owner?:string
}

function createCar(configuration:Car): {type:string,maximum_capacity:number}{

    let type_of_car = {type:"jeep",maximum_capacity:5};

    if(configuration.windows == 4){
        type_of_car.type = "jeep" || "sedan";
    }
    else if(configuration.windows == 5){
        type_of_car.type = "hatchback";
    }
    else if(configuration.windows == 2){
        type_of_car.type = "coupe";
    }
    
    if(configuration.wheels == 2){
        type_of_car.type = "bicycle" || "scooter";
        type_of_car.maximum_capacity = 2;
    }
    else{
        type_of_car.maximum_capacity = 5;
    }
    return type_of_car;
}

let carOne = createCar({windows:5,wheels:4,owner:"James"});



interface Point{
    readonly x:number,
    readonly y:number
}

let pointOne:Point = { x:0,y:0};
let pointTwo:Point = { x:5,y:3};
console.log(pointOne.x); // read
// pointOne.x = 10; // error as is only readonly

// Readonly for arrays

let arrayOne: number[] = [10,20,30];
let rArray: ReadonlyArray<number> = arrayOne;
rArray.length;
rArray[0];
//rArray[1] = 50; // error can't modify the value as is read only
rArray.toString;

// Implementing an interface

interface Shape{
    sides: Number,
    color: String,
    type: String,
    calculatePerimeter(type:String,side:Number):Number;
}

class AShape implements Shape{
    sides:Number = new Number();
    color:String = new String();
    type:String = new String();
    calculatePerimeter(type:String,side:number):number{
        if(type == "circle"){
            this.sides = 1;
            this.color = "red";
            this.type = "circle";
            let perimeter:number = (2*3.14*side);
            return perimeter;
        }
        else if(type == "square"){
            this.sides = 4;
            this.color = "blue";
            this.type = "square";
            let perimeter:number = (2*side);
            return perimeter;
        }
        else{
            return side;
        }
    }
    constructor(class_type:string,family:string){}
}




