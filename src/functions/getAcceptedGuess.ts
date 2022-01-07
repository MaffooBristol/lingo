import WordType from '../types/WordType';

import matchChars from './matchChars';

function getAcceptedGuess(word: WordType, prevGuess: WordType, guess: WordType) {
  const accepted = Array(word.length).fill({ char: null }) as WordType;
  for (let i = 0; i < word.length; i++) {
    if (matchChars(word[i], guess[i])) {
      if (matchChars(word[i], prevGuess[i]) && !prevGuess[i].isGuess) {
        console.log(`Previous guessed ${word[i].char || ''} to ${prevGuess[i].char || ''}`);
        accepted[i] = prevGuess[i];
      }
      else {
        console.log(`Matched ${word[i].char || ''} to ${guess[i].char || ''}`);
        accepted[i] = word[i];
      }
    }
    else {
      for (let j = 0; j < guess.length; j++) {
        if (i !== j && (!prevGuess[j].char || prevGuess[j].isGuess) && matchChars(guess[j], word[i])) {
          accepted[j] = {
            ...guess[j],
            isGuess: !accepted[j].char,
          };
        }
      }
    }
  }
  return accepted;
}

export default getAcceptedGuess;
