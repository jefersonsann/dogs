import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import Usuario from '../Assets/usuario.svg';
import { UserContext } from '../UserContext';
import Modal from '../Components/Modal/Modal';
import ModalLogin from '../Components/Modal/ModalLogin';

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  background: white;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0.5rem 1rem;
`;

const Logo = styled.div`
  padding: 0.5rem 0;
`;

const User = styled.div`
  color: #333;
  display: flex;
  align-items: center;
`;

const Logout = styled.button``;

const Login = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & a {
    color: #333;
    display: flex;
    align-items: center;
  }
  &::before {
    content: '';
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #333;
    background: url('${Usuario}') no-repeat center center;
  }
`;

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <Container>
      <Nav className="container">
        <Logo>
          <Link to="/" aria-label="Dogs - Home">
            <Dogs />
          </Link>
        </Logo>
        {data ? (
          <User>
            <Link to="/perfil">Olá, {data.nome}</Link>
            <Logout onClick={userLogout}>Sair</Logout>
          </User>
        ) : (
          <Login>
            <Modal
              name="Olá, faça seu login"
              outer="ou cadastre-se"
              title="Login"
            >
              <ModalLogin />
            </Modal>
          </Login>
        )}
      </Nav>
    </Container>
  );
};

export default Header;
