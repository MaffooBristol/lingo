import convertToString from '../convertToString';

describe('convertToString', () => {
  it('should convert', () => {
    expect(convertToString([
      { char: 't' },
      { char: 'e' },
      { char: 's' },
      { char: 't' },
      { char: 'y' },
    ])).toEqual('testy');
  });
});
