import { TvfrontPage } from './app.po';

describe('tvfront App', () => {
  let page: TvfrontPage;

  beforeEach(() => {
    page = new TvfrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
