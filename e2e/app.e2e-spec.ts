import { SlotCasinoPage } from './app.po';

describe('slot-casino App', () => {
  let page: SlotCasinoPage;

  beforeEach(() => {
    page = new SlotCasinoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
