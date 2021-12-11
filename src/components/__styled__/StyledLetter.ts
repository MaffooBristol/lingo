import styled, { css } from 'styled-components';

function letterStateStyle({ $isGuess = false, $isInput = false, $isAnswered = false, $isFocused = false }) {
  if ($isFocused) {
    return css`
      @keyframes slidein {
        0% {
          box-shadow: 0 0 3px #acf;
        }
        20% {
          box-shadow: 0 0 20px #acf;
        }
        50% {
          box-shadow: 0 0 20px #acf;
        }
        70% {
          box-shadow: 0 0 3px #acf;
        }
      }
      border-color: #89c;
      transition: none;
      animation: 20s slidein ease-in infinite;
      background: #eff9ff;
      box-shadow: 0 0 3px #acf, 0px 2px 2px inset rgba(255, 255, 255, 0.7);
    `;
  }
  if ($isGuess) {
    return css`
      background: #ffd;
      border-color: #664;
      color: #442;
      box-shadow: -1px -0.3rem 1px inset #bb9, 0px 2px 2px inset rgba(255, 255, 255, 0.7);
    `;
  }
  if ($isAnswered) {
    return css`
      background: #acf;
      border-color: #248;
      color: #125;
      box-shadow: -1px -0.3rem 1px inset #57b, 0px 2px 2px inset rgba(255, 255, 255, 0.7);
    `;
  }
  if ($isInput) {
    // ... Not sure yet
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
  transition: 0.1s ease-in-out all;
  text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  ${letterStateStyle}
`;

export default StyledLetter;
