import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

import dictionary from '../data/google-10000-english-no-swears.json';

type WordType = {
  char: string|null,
  isGuess?: boolean,
};

const StyledWord = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

function letterStateStyle({ $isGuess = false, $isAnswered = false }) {
  if ($isGuess) {
    return css`
      background: #ffd;
      border-color: #664;
      color: #442;
      box-shadow: -1px -0.3rem 1px inset #bb9;
    `;
  }
  if ($isAnswered) {
    return css`
      background: #aaccff;
      border-color: #248;
      color: #125;
      box-shadow: -1px -0.3rem 1px inset #57b;
    `;
  }
  return css`
    margin-top: 0.1rem;
    height: 2.9rem;
    background: transparent;
  `;
}

const StyledLetter = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 4px;
  border: 2px solid #aaa;
  text-align: center;
  line-height: 2.9rem;
  font-size: 2rem;
  font-family: sans-serif;
  border-radius: 6px;
  ${letterStateStyle}
`;

const StyledForm = styled.div`
  padding-top: 2rem;
  border-top: 1px solid #ddd;
  margin-top: 3rem;
`;

const StyledHiddenInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`;

function getRandomLetter() {
  // 97-122
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function filterWords(words, { length = null, startLetter = null, filterOnlyConsonants = false }) {
  return words
    .filter((word) => {
      if (!length) {
        return true;
      }
      return word.length === length;
    })
    .filter((word) => {
      if (!startLetter) {
        return true;
      }
      return word.toLowerCase()[0] === startLetter.toLowerCase();
    })
    .filter((word) => {
      if (!filterOnlyConsonants) {
        return true;
      }
      return word.split('').some((letter) => ['a', 'e', 'i', 'o', 'u'].indexOf(letter) > -1);
    });
}

function getRandomWord(words: string[]) {
  return words[Math.floor(Math.random() * words.length)];
}

function matchChars(a: WordType, b: WordType) {
  return a && b && a.char === b.char;
}

function convertToObject(word: string) {
  return word.split('').map((char) => ({ char }));
}

function convertToString(word: WordType[]) {
  return word.map(({ char }) => char).join('');
}

function Letter({ char, isGuess }: WordType) {
  return <StyledLetter $isGuess={isGuess} $isAnswered={char !== null}>{char?.toUpperCase()}</StyledLetter>;
}

function Form({ word, onSubmit }) {
  const [input, setInput] = useState('');
  const canSubmit = word.length === input.length;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSubmit) {
          onSubmit(convertToObject(input));
          setInput('');
        }
      }}
    >
      <StyledHiddenInput
        autoFocus
        type="text"
        value={input}
        onKeyDown={(event) => {
          if (!event.key.match(/[a-z]/gim)) {
            return event.preventDefault();
          }
        }}
        onChange={(event) => {
          const value = event?.target?.value;
          if (value.length > word.length) {
            return event.preventDefault();
          }
          setInput(value);
        }}
      />
      <StyledWord>
        {[
          ...convertToObject(input),
          ...Array(word.length - input.length).fill({ char: null }),
        ].map(({ char }) => (
          <Letter char={char} />
        ))}
      </StyledWord>
      {canSubmit && <button type='submit'>Submit</button>}
    </form>
  );
}

function Game({ word = null }) {
  const [guesses, setGuesses] = useState([
    [
      word[0],
      ...Array(word.length - 1).fill({ char: null }),
    ],
  ]);
  const prevGuess = guesses[guesses.length - 1];
  const hasWon = guesses.length > 1 && convertToString(prevGuess) === convertToString(word);
  return (
    <>
      {guesses?.map((guess) => (
        <StyledWord>
          {guess.map(({ char, isGuess }) => <Letter isGuess={isGuess} char={char} />)}
        </StyledWord>
      ))}
      <StyledForm>
        {hasWon ? (
          <div>You have won! Well done bruh</div>
        ) : (
          <Form
            word={word}
            onSubmit={(guess) => {
              let accepted = Array(word.length).fill({ char: null });
              for (let i = 0; i < word.length; i++) {
                if (matchChars(word[i], guess[i])) {
                  accepted[i] = word[i];
                }
                else if (matchChars(word[i], prevGuess[i])) {
                  accepted[i] = prevGuess[i];
                }
                else {
                  for (let j = 0; j < guess.length; j++) {
                    if (i !== j && (!prevGuess[j].char || prevGuess[j].isGuess) && matchChars(guess[j], word[i])) {
                      accepted[j] = {
                        ...guess[j],
                        isGuess: true,
                      };
                    }
                  }
                }
              }
              setGuesses((prevGuesses) => [...prevGuesses, accepted]);
            }}
          />
        )}
      </StyledForm>
    </>
  );
}

function App() {
  const words = filterWords(dictionary, { length: 5, filterOnlyConsonants: true });
  const chosenWord = getRandomWord(words);
  console.log(chosenWord);
  return (
    <div>
      <Game word={convertToObject(chosenWord)} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
