import getAcceptedGuess from '../getAcceptedGuess';
import convertToObject from '../convertToObject';

describe('getAcceptedGuess', () => {
  it('should match exactly', () => {
    expect(getAcceptedGuess(convertToObject('testy'), convertToObject('t____'), convertToObject('testy'))).toEqual(convertToObject('testy'));
  });
  it('should match after one mistake', () => {
    expect(getAcceptedGuess(convertToObject('testy'), convertToObject('toast'), convertToObject('testy'))).toEqual(convertToObject('testy'));
  });
  it('should match after close guess', () => {
    expect(getAcceptedGuess(convertToObject('testy'), convertToObject('tests'), convertToObject('testy'))).toEqual(convertToObject('testy'));
  });
  it('should be close', () => {
    const accepted = getAcceptedGuess(convertToObject('testy'), convertToObject('t____'), convertToObject('tests'));
    expect(accepted).toEqual(convertToObject('test_'));
    expect(accepted[4]).toEqual({ char: null });
  });
  it('should be close with prev guess', () => {
    const accepted = getAcceptedGuess(convertToObject('testy'), convertToObject('tents'), convertToObject('tilts'));
    expect(accepted).toEqual(convertToObject('t__t_'));
  });
  it('should be close with prev guess swapsies', () => {
    const accepted = getAcceptedGuess(convertToObject('speed'), convertToObject('s____'), convertToObject('super'));
    expect(accepted[2]).toEqual({ char: 'p', isNear: true });
  });
});
