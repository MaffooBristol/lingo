import React from 'react';

import filterWords from '../functions/filterWords';
import getRandomWord from '../functions/getRandomWord';
import convertToObject from '../functions/convertToObject';

import Game from './Game';
import StyledLayout from './__styled__/StyledLayout';

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
    <StyledLayout>
      <h1>Lingo!</h1>
      <Game word={convertToObject(chosenWord)} />
    </StyledLayout>
  );
}

export default App;
