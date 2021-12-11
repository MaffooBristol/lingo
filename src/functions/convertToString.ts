import WordType from '../types/WordType';

function convertToString(word: WordType) {
  return word.map(({ char }) => char).join('');
}

export default convertToString;
