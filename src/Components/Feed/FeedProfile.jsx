import React from 'react';
import styled from 'styled-components';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types';

const FeedContainer = styled.section`
  max-width: 50rem;
  margin: 0 auto;
`;

const FeedProfile = ({ user }) => {
  return (
    <FeedContainer>
      <FeedPhotos user={user} />
    </FeedContainer>
  );
};

FeedProfile.defaultProps = {
  user: 0,
};

FeedProfile.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default FeedProfile;
