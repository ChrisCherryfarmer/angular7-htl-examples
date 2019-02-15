import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {


    calculate(value1: number, value2: number, operator: string) {
        let resultValue;
        if (operator === '+') {
            resultValue = value1 + value2;
        } else if (operator === '-') {
            resultValue = value1 - value2;
        } else if (operator === '*') {
            resultValue = value1 * value2;
        } else if (operator === '/') {
            resultValue = value1 / value2;
        } else {
            resultValue = null;
        }

        return resultValue;
    }
}
