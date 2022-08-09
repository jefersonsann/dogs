import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  width: 100%;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  border: 2px solid var(--colorPrimary);
  cursor: pointer;

  /* MUDAR COR E BG DO BOTÃO */
  color: ${(props) =>
    props.primary ? 'var(--colorSecondary)' : 'var(--colorPrimary)'};
  background-color: ${(props) =>
    props.primary ? 'var(--colorPrimary)' : 'white'};

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
