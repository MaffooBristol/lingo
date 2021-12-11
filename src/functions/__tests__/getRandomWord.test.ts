import getRandomWord from '../getRandomWord';

const words = [
  'testy',
  'bongo',
  'lamps',
  'toast',
  'coffee',
  'sausages',
  'dvds',
];

describe('getRandomWord', () => {
  it('should get random word', () => {
    expect(words).toContain(getRandomWord(words));
  });
});
