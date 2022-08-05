import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/Button';

const ModalContent = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 0.7rem;

  & .never {
    font-size: 0.8rem;
  }
  & p {
    font-size: 0.7rem;
  }
`;

const ModalLogin = () => {
  return (
    <ModalContent>
      <div className="never">
        pra ver seus pedidos e ter uma experiência personalizada, acesse sua
        conta
      </div>
      <Link style={{ width: '100%' }} to="/login">
        <Button style={{ width: '100%' }} placeholder="Entrar" primary />
      </Link>
      <Link style={{ width: '100%' }} to="/criar">
        <Button
          style={{ width: '100%' }}
          width="100%"
          placeholder="Cadastrar"
          secondary
        />
      </Link>
      <p>
        comprou na loja física ou no app da Ame?{' '}
        <Link style={{ display: 'inline-block' }} to="/login">
          <strong>Acompanhar o pedido</strong>
        </Link>
      </p>
    </ModalContent>
  );
};

export default ModalLogin;
