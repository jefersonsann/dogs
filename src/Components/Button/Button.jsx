import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  padding: 0.6rem 1.2rem;
  color: ${(props) =>
    props.primary ? 'var(--colorSecondary)' : 'var(--colorPrimary)'};
  border-radius: 0.5rem;
  border: 2px solid var(--colorPrimary);
  background-color: ${(props) =>
    props.primary ? 'var(--colorPrimary)' : 'white'};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ ...props }) => {
  return <ButtonContainer {...props}>{props.placeholder}</ButtonContainer>;
};

export default Button;
