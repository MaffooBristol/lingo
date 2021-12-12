/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import WordType from '../types/WordType';

import convertToString from '../functions/convertToString';
import getAcceptedGuess from '../functions/getAcceptedGuess';

import Form from './Form';
import Letter from './Letter';

import StyledWord from './__styled__/StyledWord';
import StyledForm from './__styled__/StyledForm';

function Game({ word }: { word: WordType; }) {
  const [guesses, setGuesses] = useState([
    [
      word[0],
      ...(Array(word.length - 1).fill({ char: null }) as WordType),
    ],
  ]);
  const prevGuess = guesses[guesses.length - 1];
  const hasWon = guesses.length > 1 && convertToString(prevGuess) === convertToString(word);
  return (
    <>
      {guesses?.map((guess, guessIndex) => (
        <StyledWord key={guessIndex} className={guessIndex === guesses.length - 1 ? 'latest-guess' : 'prev-guess'}>
          {guess.map(({ char, isGuess }, index) => <Letter key={`form-${guessIndex}${char || 'null'}${index}`} isGuess={isGuess} char={char} />)}
        </StyledWord>
      ))}
      <StyledForm>
        {hasWon ? (
          <div>You have won!</div>
        ) : (
          <Form
            word={word}
            onSubmit={(guess: WordType) => {
              const accepted = getAcceptedGuess(word, prevGuess, guess);
              setGuesses((prevGuesses) => [...prevGuesses, accepted]);
            }}
          />
        )}
      </StyledForm>
    </>
  );
}

export default Game;
