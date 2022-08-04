import React from 'react';
import styled from 'styled-components';

const Title = styled.h1``;

const TitleForm = ({ titleName }) => {
  return <Title>{titleName}</Title>;
};

export default TitleForm;
