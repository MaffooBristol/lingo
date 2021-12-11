import React from 'react';
import PropTypes from 'prop-types';

import LetterType from '../types/LetterType';

import StyledLetter from './__styled__/StyledLetter';

// function getRandomLetter() {
//   // 97-122
//   return String.fromCharCode(97 + Math.floor(Math.random() * 26));
// }
function Letter({ char, isInput, isGuess, isFocused }: LetterType) {
  return (
    <StyledLetter
      $isGuess={isGuess}
      $isAnswered={char !== null}
      $isFocused={isFocused}
      // $isInput={isInput}
    >
      {char?.toUpperCase()}
    </StyledLetter>
  );
}

Letter.propTypes = {
  char: PropTypes.string.isRequired,
  isInput: PropTypes.bool,
  isGuess: PropTypes.bool,
  isFocused: PropTypes.bool,
};

Letter.defaultProps = {
  isInput: false,
  isGuess: false,
  isFocused: false,
};

export default Letter;
