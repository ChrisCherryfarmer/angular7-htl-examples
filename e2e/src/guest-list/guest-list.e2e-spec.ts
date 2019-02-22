import { GuestListPage } from './guest-list.po';

describe('Guest-List', () => {
  let page: GuestListPage;

  beforeEach(() => {
    page = new GuestListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Gästeliste');
  });

  it('should invite John Wayne', () => {
    page.clickGuest('John-Wayne');

    page.isGuestAttending('John-Wayne').then(found => {
      expect(found).toEqual(true);
    });
  });

  it('should not have invited Dwight-Eisenhauer yet', () => {

    page.isGuestAttending('Dwight-Eisenhauer').then(found => {
      expect(found).toEqual(false);
    });
  });

});
