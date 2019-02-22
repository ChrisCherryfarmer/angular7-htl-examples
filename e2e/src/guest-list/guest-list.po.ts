import { browser, by, element } from 'protractor';

export class GuestListPage {
  navigateTo() {
    return browser.get('http://localhost:4200/#/guest-list') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('h1')).getText() as Promise<string>;
  }

  clickGuest(name) {
    return element(by.id(name)).click();
  }

  isGuestAttending(name) {
    return browser.isElementPresent(by.id('attending-' + name))
  }


}
