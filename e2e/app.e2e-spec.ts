import { TflalertPage } from './app.po';

describe('tflalert App', () => {
  let page: TflalertPage;

  beforeEach(() => {
    page = new TflalertPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
