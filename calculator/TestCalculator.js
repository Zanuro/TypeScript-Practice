"use strict";
exports.__esModule = true;
var Calculator_1 = require("./Calculator");
var c = new Calculator_1.Calculator();
Calculator_1.test(c, "3/1.5*4+2-1=");
c.clear_results();
Calculator_1.test(c, "4/2.855-1+2.6-3.4=");
