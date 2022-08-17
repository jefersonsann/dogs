import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  color: var(--colorSecondary);
  font-size: 0.875rem;
  font-weight: 600;
  height: 3rem;
  padding: 1rem 0;
  text-align: center;
  text-transform: uppercase;
  background-color: var(--colorPrimary);
`;

const Footer = () => {
  return <Container>Footer</Container>;
};

export default Footer;
