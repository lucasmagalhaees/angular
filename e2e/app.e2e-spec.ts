import { AlgaUiPage } from './app.po';

describe('alga-ui App', () => {
  let page: AlgaUiPage;

  beforeEach(() => {
    page = new AlgaUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
