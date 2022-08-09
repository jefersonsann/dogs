import React from 'react';
import styled from 'styled-components';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const FeedContainer = styled.section`
  max-width: 50rem;
  margin: 0 auto;
`;

const Feed = () => {
  return (
    <FeedContainer>
      <FeedModal />
      <FeedPhotos />
    </FeedContainer>
  );
};

export default Feed;
