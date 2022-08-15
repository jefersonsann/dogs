import React from 'react';
import styled from 'styled-components';
import Visualizacao from '../../Assets/visualizacao.svg';
import Image from '../Helper/Image';

const LiContainer = styled.li`
  display: grid;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  @media (min-width: 40rem) {
    &:nth-child(2) {
      grid-column: 2/4;
      grid-row: span 2;
    }
  }
  & > div {
    grid-area: 1/1;
  }
`;

const TotalViews = styled.span`
  grid-area: 1/1;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;

  ${LiContainer}:hover & {
    display: flex;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(${Visualizacao}) no-repeat;
  }
`;

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };
  return (
    <LiContainer onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <TotalViews>{photo.acessos}</TotalViews>
    </LiContainer>
  );
};

export default FeedPhotosItem;
