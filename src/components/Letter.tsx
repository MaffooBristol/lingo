import React from 'react';
import PropTypes from 'prop-types';

import LetterType from '../types/LetterType';

import StyledLetter from './__styled__/StyledLetter';

// function getRandomLetter() {
//   // 97-122
//   return String.fromCharCode(97 + Math.floor(Math.random() * 26));
// }
function Letter({ char, isInput, isNear, isFocused }: LetterType) {
  return (
    <StyledLetter
      $isNear={isNear}
      $isAnswered={char !== null}
      $isFocused={isFocused}
      // $isInput={isInput}
      className={isNear ? 'is-near' : 'not-near'}
    >
      {char?.toLowerCase()}
    </StyledLetter>
  );
}

Letter.propTypes = {
  char: PropTypes.string.isRequired,
  isInput: PropTypes.bool,
  isNear: PropTypes.bool,
  isFocused: PropTypes.bool,
};

Letter.defaultProps = {
  isInput: false,
  isNear: false,
  isFocused: false,
};

export default Letter;
