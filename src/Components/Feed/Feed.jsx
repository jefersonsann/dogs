import React from 'react';
import styled from 'styled-components';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const FeedContainer = styled.section`
  max-width: 50rem;
  margin: 0 auto;
`;

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <FeedContainer>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </FeedContainer>
  );
};

export default Feed;
