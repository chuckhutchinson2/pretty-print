import { PrettyPrintUiPage } from './app.po';

describe('pretty-print-ui App', () => {
  let page: PrettyPrintUiPage;

  beforeEach(() => {
    page = new PrettyPrintUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
