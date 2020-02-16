export class Calculator {

    private current_number = 0;
    private memory_number = 0;
    private operator!: string;

    protected processDigit(digit: string, currentValue: number) {
        if (digit >= "0" && digit <= "9") {
            return currentValue * 10 + (digit.charCodeAt(0) - "0".charCodeAt(0));
        }
    }

    protected processOperator(operator: string) {
        if (["+", "-", "*", "/"].indexOf(operator) >= 0) {
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
        if (processed_char === "=") {
            this.evaluate();
            return;
        }
        else {
            let value = this.processDigit(processed_char, this.current_number);
            if (value !== undefined) {
                this.current_number = value;
                return;
            }
            else {
                let value = this.processOperator(processed_char);
                if (value !== undefined) {
                    this.evaluate();
                    this.operator = value;
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