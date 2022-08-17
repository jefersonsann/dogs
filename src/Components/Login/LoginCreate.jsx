import React from 'react';
import styled from 'styled-components';
import { USER_POST } from '../../api';
import useForm from '../../Hooks/useForm';
import Input from '../Form/Input';
import Button from '../Button/Button';
import TitleForm from './TitleForm';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { Head } from '../Helper/Head';

const Container = styled.section`
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

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { res } = await request(url, options);
    if (res.ok) userLogin(username.value, password.value);
  }

  return (
    <Container>
      <Head title="Crie sua conta" />
      <TitleForm titleName="Cadastre-se" />
      <Form onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          required
          {...username}
        />

        <Input label="Email" type="email" name="email" required {...email} />

        <Input
          label="Senha"
          type="password"
          name="password"
          required
          {...password}
        />

        {loading ? (
          <Button disabled>cadastrando...</Button>
        ) : (
          <Button primary>
            <strong>cadastrar</strong>
          </Button>
        )}

        <Error error={error} />
      </Form>
    </Container>
  );
};

export default LoginCreate;
