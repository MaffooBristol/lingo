import React from 'react';
import PropTypes from 'prop-types';

import LetterType from '../types/LetterType';

import StyledLetter from './__styled__/StyledLetter';

// function getRandomLetter() {
//   // 97-122
//   return String.fromCharCode(97 + Math.floor(Math.random() * 26));
// }
function Letter({ char, isGuess }: LetterType) {
  return <StyledLetter $isGuess={isGuess} $isAnswered={char !== null}>{char?.toUpperCase()}</StyledLetter>;
}

Letter.propTypes = {
  char: PropTypes.string.isRequired,
  isGuess: PropTypes.bool,
};

Letter.defaultProps = {
  isGuess: false,
};

export default Letter;
