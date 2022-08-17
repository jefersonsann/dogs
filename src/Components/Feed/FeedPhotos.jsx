import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import { PHOTOS_GET } from '../../api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import useFetch from '../../Hooks/useFetch';
import styled from 'styled-components';

const FeedContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media (min-width: 40rem) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 9;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <FeedContainer>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </FeedContainer>
    );
  else return null;
};

export default FeedPhotos;
