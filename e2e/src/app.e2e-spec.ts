import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  test('should display welcome message', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Tab 1');
  });
});
