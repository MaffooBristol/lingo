import convertToObject from '../convertToObject';

describe('convertToObject', () => {
  it('should convert', () => {
    expect(convertToObject('testy')).toEqual([
      { char: 't' },
      { char: 'e' },
      { char: 's' },
      { char: 't' },
      { char: 'y' },
    ]);
  });
});
