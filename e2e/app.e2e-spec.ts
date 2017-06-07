import { LearnEnglishPage } from './app.po';

describe('learn-english App', () => {
  let page: LearnEnglishPage;

  beforeEach(() => {
    page = new LearnEnglishPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
