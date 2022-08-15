import React from 'react';
import styled from 'styled-components';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

const Comments = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 1.5rem;

  & li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
`;

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <Comments ref={commentsSection}>
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
    </>
  );
};

export default PhotoComments;
