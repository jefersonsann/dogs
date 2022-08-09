import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styled from 'styled-components';
import useForm from '../../Hooks/useForm';
import Button from '../Button/Button';
import Input from '../Form/Input';
import TitleForm from './TitleForm';
import Error from '../Helper/Error';

const Section = styled.section`
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: white;
  text-align: center;

  & p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
`;
const Form = styled.form`
  margin-top: 3rem;
  margin-bottom: 3rem;

  & p {
    margin-top: 2px;
    text-align: left;
    margin-left: 10px;
  }
`;

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleLogin(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <Section>
      <TitleForm titleName="Login" />
      <p>
        Veja seus pedidos de forma fácil, compre mais rápido e tenha uma
        experiência personalizada :)
      </p>
      <Form onSubmit={handleLogin}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          required
          {...username}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          required
          {...password}
        />
        {loading ? (
          <Button disabled>carregando...</Button>
        ) : (
          <Button primary>
            <strong>continuar</strong>
          </Button>
        )}
        <Error error={error} />
      </Form>
      <p>
        <Link to="/login/reset">esqueceu?</Link>
      </p>
      <p>
        não tem cadastro? <Link to="/login/create">cadastre-se</Link>
      </p>
      <p>
        Ao continuar com o acesso, você concorda com a nossa{' '}
        <Link to="/privacy">política de privacidade</Link>
      </p>
    </Section>
  );
};

export default LoginForm;
