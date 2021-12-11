import matchChars from '../matchChars';

describe('matchChars', () => {
  it('should match chars', () => {
    expect(matchChars({ char: 'a' }, { char: 'a' })).toBeTruthy();
  });
  it('should not match different chars', () => {
    expect(matchChars({ char: 'a' }, { char: 'z' })).not.toBeTruthy();
  });
});
