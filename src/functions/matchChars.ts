import LetterType from '../types/LetterType';

function matchChars(a: LetterType, b: LetterType) {
  return a && b && a.char === b.char;
}

export default matchChars;
