export class Calculator {

    private current_number = 0;
    private memory_number = 0;
    private float_digit:boolean = false;
    private number_of_float_digits = 10;
    private operator!: string;
    private fact_precision = 7;
    private p_coeff:number[] = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];

    protected processDigit(digit: string, currentValue: number) {
        if (digit >= "0" && digit <= "9" && this.float_digit == false) {
            return currentValue * 10 + (digit.charCodeAt(0) - "0".charCodeAt(0));
        }
        else if( digit >= "0" && digit <= "9" && this.float_digit == true){
            return (digit.charCodeAt(0) - "0".charCodeAt(0));
        }
    }

    protected processOperator(operator: string) {
        if (["+", "-", "*", "/", "%"].indexOf(operator) >= 0) {
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
            case "%": return left % right;
        }
        return 0;
    }

    protected gamma(z:number):number {

        if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * this.gamma(1 - z));
        else {
            z -= 1;

            let x:number = this.p_coeff[0];
            for (let i = 1; i < this.fact_precision + 2; i++)
            x += this.p_coeff[i] / (z + i);

            var t = z + this.fact_precision + 0.5;
            return Math.sqrt(2 * Math.PI) * Math.pow(t, (z + 0.5)) * Math.exp(-t) * x;
        }
    }

    protected factorial_int(x: number):number{
        
        return (x != 1)? x * this.factorial_int(x - 1) : 1;
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
        else if(processed_char === "!"){
            this.evaluate();
            //this.current_number = this.gamma(this.memory_number);
            if(this.memory_number % 1 >= 0.5)
                this.memory_number = Math.ceil(this.memory_number);
            else
                this.memory_number = Math.floor(this.memory_number);
                
            this.current_number = this.factorial_int(this.memory_number);
            this.operator = "";
            this.float_digit = false;
            this.number_of_float_digits = 10;
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