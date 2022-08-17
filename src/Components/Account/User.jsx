import React from 'react';
import styled from 'styled-components';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';
import { Head } from '../Helper/Head';

const Container = styled.section`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <Container>
      <Head title="Minha conta" />

      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default User;
