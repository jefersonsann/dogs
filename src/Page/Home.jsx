import React from 'react';
import styled from 'styled-components';
import Feed from '../Components/Feed/Feed';
import { Head } from '../Components/Helper/Head';
const Container = styled.section``;

const Home = () => {
  return (
    <Container>
      <Head />
      <Feed />
    </Container>
  );
};

export default Home;
