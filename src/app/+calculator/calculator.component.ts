import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
    selector: 'htl-calculator',
    styleUrls: ['./calculator.component.css'],
    templateUrl: './calculator.component.html',
    providers: [CalculatorService]
})
export class CalculatorComponent {

    value1: number;
    value2: number;
    operator: string;
    resultValue: number;

  name: string;

    constructor(private _calculatorService: CalculatorService) {

    }

    clear() {
        this.value1 = null;
        this.value2 = null;
        this.operator = null;
    }

    result() {
        this.resultValue = this._calculatorService.calculate(this.value1, this.value2, this.operator);
    }

}
