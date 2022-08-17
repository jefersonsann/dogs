import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Title from '../Title/Title';
import PhotoComments from './PhotoComments';
import Visualizacao from '../../Assets/visualizacao-black.svg';
import { UserContext } from '../../UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

const animeEnter = keyframes`
  to {
    opacity: initial;
    transform: initial;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin: auto;
  height: calc(100vh - 112px);
  border-radius: 0.5rem;
  background-color: white;
  overflow-y: auto;
  opacity: 0;
  transform: scale(0.8);
  animation: ${animeEnter} 0.3s ease-in-out forwards;

  @media (min-width: 45rem) {
    grid-template-columns: 1fr 20rem;
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  & > img {
    grid-row: 1;
    max-width: 100%;
    max-height: 100%;
    @media (min-width: 45rem) {
      grid-row: 1/4;
    }
  }
`;

const Infos = styled.div`
  @media (min-width: 45rem) {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100%;
    overflow: hidden;
  }
`;

const Details = styled.div`
  padding: 2rem 1.5rem 0 1.5rem;
`;

const NameViews = styled.div`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Author = styled.div`
  & a {
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Acessos = styled.span`
  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(${Visualizacao}) no-repeat;
  }
`;
const TitlePhoto = styled.h1``;
const Attributes = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;

  & li {
    margin-right: 2rem;

    &::before {
      content: '';
      position: relative;
      display: inline-block;
      margin-top: 5px;
      margin-right: 0.5rem;
      top: 3px;
      width: 2px;
      height: 20px;
      background-color: var(--colorPrimary);
    }
  }
`;

const PhotoContent = ({ data }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;
  return (
    <Container>
      <Image src={photo.src} alt={photo.title} />
      <Infos>
        <Details>
          <div>
            <NameViews>
              <Author>
                {user.data && user.data.username === photo.author ? (
                  <PhotoDelete id={photo.id} />
                ) : (
                  <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
                )}
              </Author>
              <Acessos>{photo.acessos}</Acessos>
            </NameViews>
            <TitlePhoto>
              <Link to={`/photo/${photo.id}`}>
                <Title>{photo.title}</Title>
              </Link>
            </TitlePhoto>
            <Attributes>
              <li>{photo.peso} kg</li>
              <li>
                {photo.idade}
                {photo.idade === 1 ? ' ano' : ' anos'}
              </li>
            </Attributes>
          </div>
        </Details>
        <PhotoComments id={photo.id} comments={comments} />
      </Infos>
    </Container>
  );
};

export default PhotoContent;
