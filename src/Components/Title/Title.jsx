import React from 'react';
import styled from 'styled-components';

const Container = styled.h1`
  font-family: Georgia, 'Times New Roman', Times, serif;
  line-height: 1;
  font-size: 2.4rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;
  color: var(--colorText);

  @media (min-width: 40rem) {
    font-size: 3rem;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    left: -5px;
    bottom: 0px;
    border-radius: 0.2rem;
    background: var(--colorPrimary);
    z-index: -1;

    @media (min-width: 40rem) {
      bottom: 5px;
    }
  }
`;

const Title = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Title;
