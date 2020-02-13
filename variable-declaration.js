//Destructuring
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
var input = [1, 2];
var firstValue = input[0], secondValue = input[1];
console.log(firstValue);
console.log(secondValue);
firstValue = input[0];
secondValue = input[1];
// change values
_a = [5, 8], firstValue = _a[0], secondValue = _a[1];
console.log(firstValue);
console.log(secondValue);
function aFunction(_a) {
    var firstValue = _a[0], secondValue = _a[1];
    console.log(firstValue);
    console.log(secondValue);
}
aFunction([3, 6]);
var _b = [1, 10, 20, 30], fValue = _b[0], restValues = _b.slice(1);
console.log(fValue);
console.log(restValues);
var tuple = [10, "Hello", "Bye"];
var onevalue = tuple[0], twovalue = tuple[1], thirdvalue = tuple[2];
console.log(twovalue); //outputs the first string  in the tuple "Hello" 
// let [one,two,three,four] = tuple; // no element at index 3 error
var one = tuple[0], two = tuple.slice(1);
console.log(one);
console.log(two); // remaining elements
var obj = {
    a: "Hello",
    b: 10,
    c: "Bye"
};
var a = obj.a, b = obj.b;
console.log(a);
console.log(b);
// c is omitted in this case
var fExample = obj.a;
var sExample = obj.b;
//let {x,y,z}: { x:string,y:number,z:string} = obj;
// Default values
function WholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? "Default" : _a;
}
function fDef(_a) {
    var a = _a.a, b = _a.b;
    return a + b;
}
// Spread
var firstEx = [10, 20];
var secondEx = [30, 40, 50];
var thirdEx = __spreadArrays([0], firstEx, secondEx, [100]);
console.log(thirdEx);
var def = { book: "1984", author: "Orwell", genre: "" };
var wholeBook = __assign(__assign({}, def), { published: "1992" });
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.val = 100;
    }
    MyClass.prototype.exampleMethod = function () { console.log("Hello world!"); };
    return MyClass;
}());
var ex = new MyClass();
var copy = ex;
console.log(copy.val);
console.log(copy.exampleMethod());
