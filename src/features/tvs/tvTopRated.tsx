import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import fetchTVTopRateds from './tvTopRatedThunk';

import MediaItem from '../../components/MediaItem';

const TVTopRateds = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: tvTopRateds, loading, error } = useSelector(
    (state: RootState) => state.tvTopRateds
  );
  
  useEffect(() => {
    dispatch(fetchTVTopRateds());
  }, [dispatch]);

  // if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error}</p>;

  return (
  <>
    <MediaItem type="tv" loading={loading} medias={tvTopRateds}/>
  </>
  );
};

export default TVTopRateds;