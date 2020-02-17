//Understanding JavaScript Function Invocation and "this"
// The Core Primitive
/* Call method;
1 Make an argument list (argList) out of parameters 1 through the end
2 The first parameter is thisValue
3 Invoke the function with this set to thisValue and the argList as its argument list
*/
function greeting(person) {
    console.log(this + " greets " + person);
}
greeting.call("John", "Mary");
// This is the core primitive of JavaScript function invocation. 
// Obviously, invoking functions with call all the time would be pretty annoying. JavaScript allows us to invoke functions directly using the parens syntax function("");
function greet(person) {
    console.log("Hello " + person);
}
greet("Mary");
// greet.call(window,"Mary"); The above function descomposes in this primitive core function
// In ES5
// The function invocation is the same as fn.call(window [ES5-strict: undefined], ...args);
// Member functions
// The next very common way to invoke a method is as a member of an object 
var person = {
    name: "Jimmy Riddle Hoffa",
    says: function (thing) {
        console.log(this.name + " says " + thing);
    }
};
person.says("SOLIDARITY!");
// descomposes to this:
person.says.call(person, "SOLIDARITY!");
/* Because it can sometimes be convenient to have a reference to a function with a persistent this value, people have historically used a simple closure trick to convert a function into one with an unchanging this
*/
var people = {
    name: "John Smith",
    welcome: function (thing) {
        console.log(this.name + " says welcome " + thing);
    }
};
var linkDyn = function (thing) { return people.welcome.call(people, thing); };
linkDyn("Jimmy");
// Even though our linkDyn call still desugars to linkDyn.call(window, "world"), we turn right around and use our primitive call method to change the this value back to what we want it to be.
var bind = function (func, thisValue) {
    return function () {
        return func.apply(thisValue, arguments);
    };
};
var boundHello = bind(people.welcome, people);
boundHello();
