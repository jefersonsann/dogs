import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TOKEN_POST, USER_GET } from '../../api';
import useForm from '../../Hooks/useForm';
import Button from '../Form/Button';
import Input from '../Form/Input';
import TitleForm from './TitleForm';

const Section = styled.section``;
const Form = styled.form``;

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser();
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const res = await fetch(url, options);
    const json = await res.json();
    console.log(json);
  }

  async function handleLogin(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const res = await fetch(url, options);
      const json = await res.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  }
  return (
    <Section>
      <TitleForm titleName="Login" />
      <Form action="" onSubmit={handleLogin}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </Form>
      <Link to="/login/criar">Cadastro</Link>
    </Section>
  );
};

export default LoginForm;
