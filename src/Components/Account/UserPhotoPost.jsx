import React from 'react';
import styled from 'styled-components';
import Input from '../Form/Input';
import Button from '../Button/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import { Head } from '../Helper/Head';

const Container = styled.section`
  display: block;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 40rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const Preview = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;

  &::after {
    content: '';
    display: block;
    height: 0;
    padding-bottom: 100%;
  }
`;
const Form = styled.form``;

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/account');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <Container>
      <Head title="Poste sua foto" />
      {img.preview && (
        <Preview
          style={{ backgroundImage: `url('${img.preview}')` }}
          area-label="Prewiew da imagem"
        />
      )}
      <Form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" required {...nome} />
        <Input label="Peso" type="number" name="weight" required {...peso} />
        <Input label="Idade" type="number" name="age" required {...idade} />
        <input
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
          required
        />
        {loading ? (
          <Button primary style={{ margin: '1rem 0' }} disabled>
            postando...
          </Button>
        ) : (
          <Button primary style={{ margin: '1rem 0' }}>
            postar
          </Button>
        )}
        <Error error={error} />
      </Form>
    </Container>
  );
};

export default UserPhotoPost;
