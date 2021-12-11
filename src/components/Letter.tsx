import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import LetterType from '../types/LetterType';

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
