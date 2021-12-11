import filterWords from '../filterWords';

const words = [
  'testy',
  'bongo',
  'lamps',
  'toast',
  'coffee',
  'sausages',
  'dvds',
];

describe('filterWords', () => {
  it('should filter', () => {
    // Returns the entire list.
    expect(filterWords(words, {})).toHaveLength(7);
    // Ignores "dvds" since it is only consonants.
    expect(filterWords(words, { filterOnlyConsonants: true })).toHaveLength(6);
    // Returns only 5 letter long words.
    expect(filterWords(words, { length: 5 })).toHaveLength(4);
    expect(filterWords(words, { length: 5, filterOnlyConsonants: true })).toHaveLength(4);
    // Returns 5 letter long t-words (case insensitive).
    expect(filterWords(words, { length: 5, startLetter: 't' })).toHaveLength(2);
    expect(filterWords(words, { length: 5, startLetter: 'T' })).toHaveLength(2);
  });
});
