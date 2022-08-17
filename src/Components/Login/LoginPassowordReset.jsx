import React from 'react';
import useForm from '../../Hooks/useForm';
import Button from '../Button/Button';
import Input from '../Form/Input';
import useFetch from '../../Hooks/useFetch';
import TitleForm from './TitleForm';
import styled from 'styled-components';
import { PASSWORD_RESET } from '../../api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import { Head } from '../Helper/Head';

const Form = styled.form``;

const LoginPassowordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <div>
      <Head title="Resete a senha" />
      <TitleForm titleName="Resete a senha" />
      <Form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          required
          {...password}
        />
        {loading ? (
          <Button disabled>resetando...</Button>
        ) : (
          <Button primary>
            <strong>resetar</strong>
          </Button>
        )}
      </Form>
      <Error error={error} />
    </div>
  );
};

export default LoginPassowordReset;
