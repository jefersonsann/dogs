import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import UserHeaderNav from './UserHeaderNav';

const Container = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
const UserTitle = styled.h1``;

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/account/stats':
        setTitle('Estatísticas');
        break;
      case '/account/post':
        setTitle('Poste sua foto');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  return (
    <Container>
      <UserTitle>{title}</UserTitle>
      <UserHeaderNav />
    </Container>
  );
};

export default UserHeader;
