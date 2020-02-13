//Destructuring

let input = [1,2];

let [firstValue,secondValue] = input;

console.log(firstValue);
console.log(secondValue);

firstValue = input[0];
secondValue = input[1];

// change values
[firstValue,secondValue] = [5,8]

console.log(firstValue);
console.log(secondValue);

function aFunction([firstValue,secondValue]: [number,number]){
    console.log(firstValue);
    console.log(secondValue);

}

aFunction([3,6]);

let [fValue, ...restValues] = [1,10,20,30];

console.log(fValue);
console.log(restValues);

let tuple: [number,string,string] = [10,"Hello","Bye"];

let [onevalue,twovalue,thirdvalue] = tuple;

console.log(twovalue); //outputs the first string  in the tuple "Hello" 


// let [one,two,three,four] = tuple; // no element at index 3 error
let [one,...two] = tuple;

console.log(one);
console.log(two); // remaining elements


let obj = {
    a: "Hello",
    b: 10,
    c: "Bye"
};

let {a,b} = obj;

console.log(a);
console.log(b);
// c is omitted in this case

let fExample = obj.a;
let sExample = obj.b;

//let {x,y,z}: { x:string,y:number,z:string} = obj;

// Default values

function WholeObject(wholeObject: { a:string,b?:string} ){
    let {a,b = "Default"} = wholeObject;
}


type Def = { a:string,b?:string};

function fDef({a,b}:Def):string {
    return a+b;
}

// Spread

let firstEx = [10,20];
let secondEx = [30,40,50];

let thirdEx = [0,...firstEx,...secondEx,100];
console.log(thirdEx);

let def = {book:"1984",author:"Orwell",genre:""};
let wholeBook = {...def,published:"1992"};

class MyClass{
    val = 100;
    exampleMethod(){ console.log("Hello world!")}
}

let ex = new MyClass();
let copy = ex;

console.log(copy.val); // ouputs value 100
console.log(copy.exampleMethod()); // undefined




