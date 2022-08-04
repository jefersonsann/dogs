import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import Usuario from '../Assets/usuario.svg';

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
const Login = styled.div`
  & a {
    color: #333;
    display: flex;
    align-items: center;

    &::after {
      content: '';
      display: inline-block;
      width: 14px;
      height: 17px;
      background: url('${Usuario}') no-repeat center center;
      position: relative;
      top: -2px;
      margin-left: 10px;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <Nav className="container">
        <Logo>
          <Link to="/" aria-label="Dogs - Home">
            <Dogs />
          </Link>
        </Logo>
        <Login>
          <Link to="/login">Login / Criar</Link>
        </Login>
      </Nav>
    </Container>
  );
};

export default Header;
