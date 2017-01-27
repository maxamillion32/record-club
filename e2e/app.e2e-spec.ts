import { RecordClubPage } from './app.po';

describe('record-club App', function() {
  let page: RecordClubPage;

  beforeEach(() => {
    page = new RecordClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
