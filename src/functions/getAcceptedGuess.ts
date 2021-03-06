import WordType from '../types/WordType';

import matchChars from './matchChars';

function getAcceptedGuess(word: WordType, prevGuess: WordType, guess: WordType) {
  const accepted = Array(word.length).fill({ char: null }) as WordType;
  for (let i = 0; i < word.length; i++) {
    if (matchChars(word[i], guess[i])) {
      if (matchChars(word[i], prevGuess[i]) && !prevGuess[i].isNear) {
        accepted[i] = prevGuess[i];
      }
      else {
        accepted[i] = word[i];
      }
    }
    else {
      for (let j = 0; j < guess.length; j++) {
        if (i !== j && (!prevGuess[j].char || prevGuess[j].isNear) && matchChars(guess[j], word[i])) {
          accepted[j] = {
            ...guess[j],
            isNear: !accepted[j].char,
          };
        }
      }
    }
  }
  return accepted;
}

export default getAcceptedGuess;
