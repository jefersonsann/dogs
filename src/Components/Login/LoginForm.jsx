import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useForm from '../../Hooks/useForm';
import Button from '../Form/Button';
import Input from '../Form/Input';
import TitleForm from './TitleForm';
import { UserContext } from '../../UserContext';

const Section = styled.section``;
const Form = styled.form``;

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
      <Form action="" onSubmit={handleLogin}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </Form>
      <Link to="/login/criar">Cadastro</Link>
    </Section>
  );
};

export default LoginForm;
