import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  font-size: 1rem;
  font-family: var(--fontPrimary);
  color: #764701;
  padding: 0.8rem 1.2rem;

  border: none;
  border-radius: 0.4rem;
  background-color: #fb1;
  transition: all 0.1s;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

const Button = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
