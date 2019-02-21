import { CalculatorPage } from './calculator.po';
import { browser, logging } from 'protractor';

describe('Calculator', () => {
  let page: CalculatorPage;

  beforeEach(() => {
    page = new CalculatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Taschenrechner');
  });

  it('should handle additional calculations', () => {
    page.sendProperty1Value('4');
    page.sendOperator('+');
    page.sendProperty2Value('5');

    page.clickCalculate();
    expect(page.getResultValue()).toEqual('9');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
