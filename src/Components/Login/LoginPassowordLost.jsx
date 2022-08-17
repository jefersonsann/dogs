import React from 'react';
import styled from 'styled-components';
import useForm from '../../Hooks/useForm';
import Button from '../Button/Button';
import Input from '../Form/Input';
import useFetch from '../../Hooks/useFetch';
import TitleForm from './TitleForm';
import { PASSWORD_LOST } from '../../api';
import Error from '../Helper/Error';
import { Head } from '../Helper/Head';

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

const LoginPassowordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('lost', 'resetar'),
      });
      await request(url, options);
    }
  }
  return (
    <Section>
      <Head title="Perdeu a senha?" />
      <TitleForm titleName="Perdeu a senha?" />
      <p>Digite seu email ou usuario abaixo para configurar uma nova senha.</p>
      {data ? (
        <p style={{ color: 'var(--colorSuccess)' }}>{data}</p>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Input
            label="Email / Usuario"
            type="text"
            name="email"
            {...login}
            required
          />
          {loading ? (
            <Button disabled>enviando...</Button>
          ) : (
            <Button primary>
              <strong>enviar</strong>
            </Button>
          )}
        </Form>
      )}
      <Error error={error} />
    </Section>
  );
};

export default LoginPassowordLost;
