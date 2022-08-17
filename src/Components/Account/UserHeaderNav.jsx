import React from 'react';
import styled from 'styled-components';
import useMedia from '../../Hooks/useMedia';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as Postar } from '../../Assets/adicionar.svg';
import { ReactComponent as IconSair } from '../../Assets/sair.svg';

const MenuMobile = styled.button`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background-color: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: all 0.2s ease;
  }

  &:hover,
  &:focus,
  &.active {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: var(--colorPrimary);
    color: var(--colorPrimary);
  }

  &.active::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
`;

const ContainerMobile = styled.nav`
  display: block;
  position: absolute;
  top: 70px;
  right: 0;
  padding: 0 1rem;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  transform: translate(-10px);
  opacity: 1;
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &.visible {
    height: initial;
    overflow: visible;
    transform: initial;
    z-index: 10;
  }

  & svg {
    margin-right: 0.5rem;
  }

  & a,
  & button {
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 0.5rem 0;
    cursor: pointer;

    &:hover svg > * {
      fill: var(--colorPrimary);
    }
  }

  & button {
    border-bottom: none;
  }
`;

const ContainerDesk = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  & a,
  & button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    &.active {
      background: white;
      box-shadow: 0 0 0 3px #eee;
      border-color: var(--colorPrimary);

      & svg > * {
        fill: var(--colorPrimary);
      }
    }
  }

  & a:hover,
  & button:hover {
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: var(--colorPrimary);
    outline: none;
  }
`;

const Sair = styled.button``;

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation('');
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  let Container = mobile ? ContainerMobile : ContainerDesk;

  return (
    <>
      {mobile && (
        <MenuMobile
          aria-label="Menu"
          className={mobileMenu && 'active'}
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}

      <Container className={mobileMenu && 'visible'}>
        <NavLink to="/account" end>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>

        <NavLink to="stats">
          <Estatisticas />
          {mobile && 'Estatisticas'}
        </NavLink>

        <NavLink to="post">
          <Postar />
          {mobile && 'Adicionar Fotos'}
        </NavLink>
        <Sair onClick={userLogout}>
          <IconSair />
          {mobile && 'Sair'}
        </Sair>
      </Container>
    </>
  );
};

export default UserHeaderNav;
