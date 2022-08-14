import React from 'react';
import styled from 'styled-components';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Comments = styled.ul`
  /* overflow-y: auto; */
  /* word-break: break-word; */
  padding: 0 1.5rem;

  & li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
`;

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);
  return (
    <Container>
      <Comments>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}: </strong>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </Comments>
      {login === true ? (
        <PhotoCommentsForm id={props.id} setComments={setComments} />
      ) : (
        'Faça login para poder comentar'
      )}
    </Container>
  );
};

export default PhotoComments;
