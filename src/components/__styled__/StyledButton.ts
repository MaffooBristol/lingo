import styled, { css } from 'styled-components';

function isDisabledStyle({ disabled = false }) {
  if (disabled) {
    return css`
      opacity: 0.3;
      pointer-events: none;
    `;
  }
  return css`
    box-shadow: -1px -0.3rem 1px inset #a32, 0px 2px 2px inset rgba(255, 255, 255, 0.7);
  `;
}

export default styled.button`
  appearance: none;
  padding: 0.5rem 2rem;
  /* height: 4rem; */
  border: 2px solid #821;
  background: #d53;
  color: white;
  text-align: center;
  line-height: 2.5rem;
  font-size: 1.4rem;
  font-family: sans-serif;
  border-radius: 12px;
  transition: 0.3s ease-in-out all;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  &:hover, &:focus {
    background: #e64;
  }
  ${isDisabledStyle}
`;
