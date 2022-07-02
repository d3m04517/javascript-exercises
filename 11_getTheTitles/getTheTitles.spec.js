const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Book','Book2']);
  });

  test('get the titles test 2', () => {
    expect(getTheTitles(books)).toEqual(['Book', 'Book2']);
  });
});
