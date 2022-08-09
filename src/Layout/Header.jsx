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
  background: var(--colorPrimary);
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
  color: var(--colorSecondary);
  display: flex;
  align-items: center;
`;

const Logout = styled.button``;

const Login = styled.div`
  & a {
    color: var(--colorSecondary);
    display: flex;
    align-items: center;
  }
  & span::before {
    content: '';
    position: absolute;
    top: 10px;
    left: -38px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid var(--colorSecondary);
    background: url('${Usuario}') no-repeat center center;
  }

  & span::after {
    content: '';
    position: absolute;
    bottom: 12px;
    right: 18px;
    width: 6px;
    height: 6px;
    border-top: 1px solid var(--colorSecondary);
    border-right: 1px solid var(--colorSecondary);
    background-color: transparent;
    transform: rotate(45deg);
    transition: all 0.3s ease;
  }

  & span:hover::after {
    transform: rotate(135deg);
  }
`;

const Header = () => {
  const { data } = React.useContext(UserContext);

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
            <Link to="/account">Olá, {data.nome}</Link>
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
