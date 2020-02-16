/// reference another file
import * as URL from "url";
import fileContent from "./xyz.txt!text";
import data from "json!http://example.com/data.json";

let myUrl = URL.parse("https://www.google.com");
console.log(data, fileContent);

// import within modules
import { isPrime } from "./math-lib";
isPrime(5);
//mathLib.isPrime(7); // mathLib' refers to a UMD global, but the current file is a module
// can use mathLib.isPrime(7); if import mathLib from "math-lib";


import {printHello} from "./modules";
console.log(printHello());

