export class Calculator {

    private current_number = 0;
    private memory_number = 0;
    private float_digit:boolean = false;
    private number_of_float_digits = 10;
    private operator!: string;

    protected processDigit(digit: string, currentValue: number) {
        if (digit >= "0" && digit <= "9" && this.float_digit == false) {
            return currentValue * 10 + (digit.charCodeAt(0) - "0".charCodeAt(0));
        }
        else if( digit >= "0" && digit <= "9" && this.float_digit == true){
            return (digit.charCodeAt(0) - "0".charCodeAt(0));
        }
    }

    protected processOperator(operator: string) {
        if (["+", "-", "*", "/"].indexOf(operator) >= 0) {
            return operator;
        }
    }

    protected processPoint(operator: string){
        if(operator === "."){
            return operator;
        }
    }

    protected evaluateOperator(operator: string, left: number, right: number):number {
        switch (this.operator) {
            case "+": return left + right;
            case "-": return left - right;
            case "*": return left * right;
            case "/": return left / right;
        }
        return 0;
    }

    public clear_results(){
        this.current_number = 0;
        this.memory_number = 0;
        this.float_digit = false;
        this.operator = "";
    }
    private evaluate() {
        if (this.operator) {
            this.memory_number = this.evaluateOperator(this.operator, this.memory_number, this.current_number);
        }
        else {
            this.memory_number = this.current_number;
        }
        this.current_number = 0;
    }

    public handleChar(processed_char: string) {
        console.log(this.current_number);
        console.log(this.memory_number);
        console.log(this.operator);
        console.log(this.float_digit);
        if (processed_char === "=") {
            this.evaluate();
            return;
        }
        else if(processed_char === "."){
            this.float_digit = true;
            return;
        }
        else {
            let value = this.processDigit(processed_char, this.current_number);
            console.log("Value is " + value);
            if (value !== undefined && this.float_digit === false) {
                this.current_number = value;
                return;
            }
            else if(value !== undefined && this.float_digit === true){
                console.log("Number is " + this.current_number + " " + value);
                this.current_number = this.current_number + (value/this.number_of_float_digits);
                this.number_of_float_digits *= 10;
                return;
            }
            else {
                let value = this.processOperator(processed_char);
                if (value !== undefined) {
                    this.evaluate();
                    this.operator = value;
                    this.float_digit = false;
                    this.number_of_float_digits = 10;
                    return;
                }
            }
        }
        throw new Error(`Unsupported input: '${processed_char}'`);
    }

    public getResult() {
        return this.memory_number;
    }
}

export function test(c: Calculator, input: string) {
    for (let i = 0; i < input.length; i++) {
        c.handleChar(input[i]);
    }

    console.log(`The result of '${input}' is '${c.getResult()}'`);
}