import React from 'react';
import styled from 'styled-components';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import UserHeader from './UserHeader';
import { Routes, Route } from 'react-router-dom';

const Container = styled.section`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

const User = () => {
  return (
    <Container>
      <UserHeader />
      <Routes>
        <Route path="/account" element={<Feed />} />
        <Route path="account/post" element={<UserPhotoPost />} />
        <Route path="account/stats" element={<UserStats />} />
      </Routes>
    </Container>
  );
};

export default User;
