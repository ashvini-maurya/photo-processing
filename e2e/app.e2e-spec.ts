import { PhotoProcessingPage } from './app.po';

describe('photo-processing App', () => {
  let page: PhotoProcessingPage;

  beforeEach(() => {
    page = new PhotoProcessingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
