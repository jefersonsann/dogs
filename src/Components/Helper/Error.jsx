import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.p`
  color: var(--colorError);
  margin: 1rem 0;
`;

const Error = ({ error }) => {
  if (!error) return null;
  return <ErrorContainer>{error}</ErrorContainer>;
};

export default Error;
