import {browser, by, element} from 'protractor';
import {expect} from '../expect';


export = function guestAttendingSteps() {

  this.Given(/^that the guest list page is open with (.*) in it$/, (name) => {
    return browser.get('#/guest-list');
  });

  this.When(/^he selects the user with the name (.*?)$/, (name) => {
    return element(by.id(name)).click();
  });

  this.Then(/^he is guest attending and (.*?) is listed on the attending list$/, (name: string) => {
    browser.isElementPresent(by.id('attending-' + name)).then((found) => {
      return expect(found).to.be.true;
    }, (reason) => {
      return expect(true).equals(false);
    });
  });
};
