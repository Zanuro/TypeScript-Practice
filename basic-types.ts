let isBoolean: boolean = false; // boolean
let dec: number = 10; // decimal number
let hex: number = 0xF0BA; // hexadecimal
let str: string = "Hello"; // string

let fName: string = "Johnny Cash";
let age: number = 40;

let sentence: string = `I am ${fName} and I'm ${age} years old`;
let stn: string = "Hello,I am " + fName + "and I'm " + age + "years old";

//Arrays

let fArray: number[] = [3,4,5,100];
let sArray: Array<number> = [3,4,5,100];

//Tuples
let fTuple: [string,string,number];

fTuple = ["Hello","Goodbye",999];

// fTuple = ["Hello"] // error
console.log(fTuple[1].toUpperCase());
// console.log(fTuple[2].toUpperCase); // error no matching toUpperCase method on a number
console.log(fTuple[2].toString()); // valid number method

fTuple[0] = "HeLlo"; // modify the first tuple element
// fTuple[2] = "Can't do"; // cannot assign string to number

// Enum

enum Shapes {Triangle, Square, Circle};

let aShape: Shapes = Shapes.Circle;
console.log(aShape);

enum AnotherShape {Triangle = 3, Square = 4,Circle = 1};
let bShape: AnotherShape = AnotherShape.Triangle;
console.log(bShape);

enum OtherShape {Triangle = 5, Square, Circle = 10};

let cShape: string = OtherShape[6];
console.log(cShape); //output string at the 6th position

// Any

let aVariable: any = 10;

aVariable = "Changed to string";

aVariable = false;

aVariable = 3.5;


let bVariable: any = "This can be a string";

// bVariable.ifItExists();

bVariable.toUpperCase();

let cVariable: Object = "This can also be of a string type";

// cVariable.toUpperCase(); // property doesn't exist on object type

let mixed_array: any[] = ["Hello", 2, ["Another one", 3]];

mixed_array[0].toUpperCase();
mixed_array[0] = "Changing";

mixed_array[1] = 10;

mixed_array[2][0] = "Another";

// Void

function fNotReturn(): void {
    console.log("This function does not return anything");
}

let unusedVariable: void = undefined; // can only assign to undefined 

let undefVariable: undefined = undefined;

let nullVariable: null = null;

// Never
// The never type represents the type of values that never occur. For instance, 
// never is the return type for a function expression or an arrow function expression that 
// always throws an exception or one that never returns; Variables also acquire the type 
// never when narrowed by any type guards that can never be true.


// Function returning never must have unreachable end point
function throw_error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return Error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

// Object
// Every other type besides number,string,boolean,symbol, null, undefined.

declare function create(o: object | null): void;

create({ prop: 0 }); // OK // object
create(null); // OK  // null

//create(100); // Error
//create("hello"); // Error
//create(false); // Error
//create(undefined); // Error

// Type assertions 
//Similar to typecasting in other languages without performing any special checking
// TypeScript assumes that you know what are you doing while typecasting

let oneValue: any = "Hello,how are you?";
let twoVal: number = (<string>oneValue).length;

let threeVal: number = (oneValue as string).length; // define oneValue as string and get its length
console.log(threeVal);



