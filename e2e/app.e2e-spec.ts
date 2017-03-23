import { KingstonChurchNg4Page } from './app.po';

describe('kingston-church-ng4 App', () => {
  let page: KingstonChurchNg4Page;

  beforeEach(() => {
    page = new KingstonChurchNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
