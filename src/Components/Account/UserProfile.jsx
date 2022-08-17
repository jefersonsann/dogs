import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Feed from '../Feed/Feed';
import { Head } from '../Helper/Head';
import Title from '../Title/Title';

const Container = styled.section``;

const UserProfile = () => {
  const { user } = useParams();

  return (
    <Container>
      <Head title={user} />
      <Title>{user}</Title>
      <Feed user={user} />
    </Container>
  );
};

export default UserProfile;
