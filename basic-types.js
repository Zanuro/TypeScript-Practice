var isBoolean = false; // boolean
var dec = 10; // decimal number
var hex = 0xF0BA; // hexadecimal
var str = "Hello"; // string
var fName = "Johnny Cash";
var age = 40;
var sentence = "I am " + fName + " and I'm " + age + " years old";
var stn = "Hello,I am " + fName + "and I'm " + age + "years old";
//Arrays
var fArray = [3, 4, 5, 100];
var sArray = [3, 4, 5, 100];
//Tuples
var fTuple;
fTuple = ["Hello", "Goodbye", 999];
// fTuple = ["Hello"] // error
console.log(fTuple[1].toUpperCase());
// console.log(fTuple[2].toUpperCase); // error no matching toUpperCase method on a number
console.log(fTuple[2].toString()); // valid number method
fTuple[0] = "HeLlo"; // modify the first tuple element
// fTuple[2] = "Can't do"; // cannot assign string to number
// Enum
var Shapes;
(function (Shapes) {
    Shapes[Shapes["Triangle"] = 0] = "Triangle";
    Shapes[Shapes["Square"] = 1] = "Square";
    Shapes[Shapes["Circle"] = 2] = "Circle";
})(Shapes || (Shapes = {}));
;
var aShape = Shapes.Circle;
console.log(aShape);
var AnotherShape;
(function (AnotherShape) {
    AnotherShape[AnotherShape["Triangle"] = 3] = "Triangle";
    AnotherShape[AnotherShape["Square"] = 4] = "Square";
    AnotherShape[AnotherShape["Circle"] = 1] = "Circle";
})(AnotherShape || (AnotherShape = {}));
;
var bShape = AnotherShape.Triangle;
console.log(bShape);
var OtherShape;
(function (OtherShape) {
    OtherShape[OtherShape["Triangle"] = 5] = "Triangle";
    OtherShape[OtherShape["Square"] = 6] = "Square";
    OtherShape[OtherShape["Circle"] = 10] = "Circle";
})(OtherShape || (OtherShape = {}));
;
var cShape = OtherShape[6];
console.log(cShape); //output string at the 6th position
// Any
var aVariable = 10;
aVariable = "Changed to string";
aVariable = false;
aVariable = 3.5;
var bVariable = "This can be a string";
// bVariable.ifItExists();
bVariable.toUpperCase();
var cVariable = "This can also be of a string type";
// cVariable.toUpperCase(); // property doesn't exist on object type
var mixed_array = ["Hello", 2, ["Another one", 3]];
mixed_array[0].toUpperCase();
mixed_array[0] = "Changing";
mixed_array[1] = 10;
mixed_array[2][0] = "Another";
