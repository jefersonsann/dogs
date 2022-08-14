import React from 'react';
import styled from 'styled-components';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import Error from '../Helper/Error';

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  /* gap: 1rem; */
`;
const Textarea = styled.textarea`
  display: block;
  width: 100%;
  border: none;
  font-size: 1rem;
  resize: none;
  padding: 0.725rem;
  /* border-radius: 0 0.2rem 0 0; */
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;

  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background-color: white;
  }
`;
const Button = styled.button`
  outline: none;
  border: none;
  border-color: none;
  border-top: 1px solid #ccc;
  opacity: 1;
  padding: 0 1rem;
  background: transparent;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:hover svg path,
  &:focus svg path {
    fill: #fea;
    stroke: #fb1;
  }
`;

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function submitComment(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <FormContainer onSubmit={submitComment}>
      <Textarea
        id="comment"
        name="comment"
        placeholder="Adicione um comentário..."
        rows={1}
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <Button>
        <Enviar />
      </Button>
      <Error error={error} />
    </FormContainer>
  );
};

export default PhotoCommentsForm;
