import { browser, by, element } from 'protractor';

export class CalculatorPage {
  navigateTo() {
    return browser.get('http://localhost:4200/#/calculator') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('h1')).getText() as Promise<string>;
  }

  getResultValue() {
    return element(by.id('end-result')).getAttribute('value') as Promise<string>;
  }

  sendProperty1Value(value1: string) {
    return element(by.id('value1')).sendKeys(value1);
  }

  sendProperty2Value(value2: string) {
    return element(by.id('value2')).sendKeys(value2);
  }

  sendOperator(operator: string) {
    return element(by.id('operator')).sendKeys(operator);
  }

  clickCalculate() {
    return element(by.id('submit')).click();
  }


}
