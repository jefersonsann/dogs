import React from 'react';
import styled from 'styled-components';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Error';
import { PHOTO_GET } from '../../api';
import PhotoContent from '../Photo/PhotoContent';

const ContainerModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 1000;
  padding: 2rem 1rem 2rem 1rem;

  @media (min-width: 40rem) {
    padding: 2rem calc(4rem + 15px) 2rem 4rem;
  }
`;

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  const outsideClick = (event) => {
    if (event.target === event.currentTarget) setModalPhoto(null);
  };

  return (
    <ContainerModal onClick={outsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </ContainerModal>
  );
};

export default FeedModal;
