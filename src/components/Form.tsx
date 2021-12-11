/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import WordType from '../types/WordType';

import convertToObject from '../functions/convertToObject';

import Letter from './Letter';

import StyledHiddenInput from './__styled__/StyledHiddenInput';
import StyledWord from './__styled__/StyledWord';
import StyledButton from './__styled__/StyledButton';

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
        autoComplete="off"
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
        ].map(({ char }, index) => (
          <Letter key={`form-${char || 'null'}${index}`} isInput char={char} isFocused={index === input.length} />
        ))}
      </StyledWord>
      <StyledButton disabled={!canSubmit} type="submit">Submit</StyledButton>
    </form>
  );
}

export default Form;
