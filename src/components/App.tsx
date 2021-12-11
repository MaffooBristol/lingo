import React from 'react';

import filterWords from '../functions/filterWords';
import getRandomWord from '../functions/getRandomWord';
import convertToObject from '../functions/convertToObject';

import Game from './Game';

function App({ dictionary }: { dictionary: string[] }) {
  let chosenWord;
  if (window?.location?.hash) {
    chosenWord = window.location.hash.replace('#', '');
  }
  else {
    const words: string[] = filterWords(dictionary, { length: 5, filterOnlyConsonants: true });
    chosenWord = getRandomWord(words);
  }
  return (
    <div>
      <Game word={convertToObject(chosenWord)} />
    </div>
  );
}

export default App;
