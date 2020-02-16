"use strict";
exports.__esModule = true;
var Calculator_1 = require("./Calculator");
var c = new Calculator_1.Calculator();
var btn_1;
btn_1 = document.getElementById("button-1");
btn_1.addEventListener("input", function (e) { return Calculator_1.test(c, '1'); });
