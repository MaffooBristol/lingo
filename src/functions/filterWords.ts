type FilterWordsArgsType = {
  length?: number | null,
  startLetter?: string | null,
  filterOnlyConsonants?: boolean,
};

const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

function filterWords(words: string[], args: FilterWordsArgsType) {
  const { length = null, startLetter = null, filterOnlyConsonants = false } = args;
  return words
    .filter((word: string) => {
      if (!length) {
        return true;
      }
      return word.length === length;
    })
    .filter((word: string) => {
      if (!startLetter) {
        return true;
      }
      return word.toLowerCase()[0] === startLetter.toLowerCase();
    })
    .filter((word: string) => {
      if (!filterOnlyConsonants) {
        return true;
      }
      return word.split('').some((letter) => vowels.indexOf(letter) > -1);
    });
}

export default filterWords;
