"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.current_number = 0;
        this.memory_number = 0;
    }
    Calculator.prototype.processDigit = function (digit, currentValue) {
        if (digit >= "0" && digit <= "9") {
            return currentValue * 10 + (digit.charCodeAt(0) - "0".charCodeAt(0));
        }
    };
    Calculator.prototype.processOperator = function (operator) {
        if (["+", "-", "*", "/"].indexOf(operator) >= 0) {
            return operator;
        }
    };
    Calculator.prototype.evaluateOperator = function (operator, left, right) {
        switch (this.operator) {
            case "+": return left + right;
            case "-": return left - right;
            case "*": return left * right;
            case "/": return left / right;
        }
        return 0;
    };
    Calculator.prototype.evaluate = function () {
        if (this.operator) {
            this.memory_number = this.evaluateOperator(this.operator, this.memory_number, this.current_number);
        }
        else {
            this.memory_number = this.current_number;
        }
        this.current_number = 0;
    };
    Calculator.prototype.handleChar = function (processed_char) {
        if (processed_char === "=") {
            this.evaluate();
            return;
        }
        else {
            var value = this.processDigit(processed_char, this.current_number);
            if (value !== undefined) {
                this.current_number = value;
                return;
            }
            else {
                var value_1 = this.processOperator(processed_char);
                if (value_1 !== undefined) {
                    this.evaluate();
                    this.operator = value_1;
                    return;
                }
            }
        }
        throw new Error("Unsupported input: '" + processed_char + "'");
    };
    Calculator.prototype.getResult = function () {
        return this.memory_number;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
function test(c, input) {
    for (var i = 0; i < input.length; i++) {
        c.handleChar(input[i]);
    }
    console.log("The result of '" + input + "' is '" + c.getResult() + "'");
}
exports.test = test;
