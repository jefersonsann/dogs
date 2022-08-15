import React from 'react';
import styled, { keyframes } from 'styled-components';

const skeleton = keyframes`
  from {
    background-position: 0px;
  }to {
    background-position: -200%;
  }

`;

const Wrapper = styled.div`
  display: grid;
`;
const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: ${skeleton} 1.5s infinite linear;
`;
const Img = styled.img`
  display: block;
  max-width: 100%;
  grid-area: 1/1;
  opacity: 0;
  transition: 0.2s;
`;

const Image = ({ ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <Wrapper>
      {skeleton && <Skeleton></Skeleton>}
      <Img onLoad={handleLoad} {...props} />
    </Wrapper>
  );
};

export default Image;
