// Generics
// Components with their own type

// Idendity function

function Idendity(arg: any): any{
    return arg;
}

// Type variable

function identity<T>(arg: T):T{
    return arg;
}

// T captures the type the user provided

let out = identity<string>("Hello"); // pass a string outputting Hello

let outt = identity("Hello"); // type inference, compiler sets the T type to string


function method_identity<T>(arg: T): T{
//    console.log(arg.length); // method length does not exist on type T, example for a number there is no method length
    return arg;
}

function method_identit<T>(arg: T[]): T[]{
    console.log(arg.length);    // works because an array has that method
    return arg;
}

let myIdent: <T>(arg: T) => T = identity;
console.log(myIdent);

let myIdentt: {<T>(arg: T):T} = identity;

// Generic Classes

class GenericNumber<T>{
    value: T | undefined;
    add: ((x: T, y: T) => T) | undefined;

}

let number = new GenericNumber<string>();
number.value = "One";
number.add = function(x,y) { return x+y;};
console.log(number.add(number.value,"Two"));

// Generic constraints


function logIdentity<T extends string>(arg: T):T{
    console.log(arg.length); // T derives from string type so it has length method
    return arg;
}


logIdentity("Hello");

// Type Parameters type parameter that is constrained by another type parameter

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); 
getProperty(x, "b");
getProperty(x, "x"); // argument x does not exist.














