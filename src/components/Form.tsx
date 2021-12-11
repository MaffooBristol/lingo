import React, { useState } from 'react';

import WordType from '../types/WordType';

import convertToObject from '../functions/convertToObject';

import Letter from './Letter';

import StyledHiddenInput from './__styled__/StyledHiddenInput';
import StyledWord from './__styled__/StyledWord';

function Form({ word, onSubmit }: { word: WordType; onSubmit: (word: WordType) => void; }) {
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
        id="form-input"
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
        onBlur={(event) => event.target.focus()}
      />
      <StyledWord>
        {[
          ...convertToObject(input),
          ...(Array(word.length - input.length).fill({ char: null }) as WordType),
        ].map(({ char }) => (
          <Letter char={char} />
        ))}
      </StyledWord>
      {canSubmit && <button type="submit">Submit</button>}
    </form>
  );
}

export default Form;
