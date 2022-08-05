import React from 'react';
import styled from 'styled-components';
import MouseHover from '../Components/MouseHover';

const Container = styled.footer`
  color: #764701;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 1rem 0;
  text-align: center;
  text-transform: uppercase;
  background-color: #fb1;
`;

const Footer = () => {
  return (
    <Container>
      Footer
      <MouseHover />
    </Container>
  );
};

export default Footer;
