import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchTVTopRateds } from './tvTopRatedSlice';

import MediaItem from '../../components/MediaItem';

const TVTopRateds = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: tvTopRateds, loading, error } = useSelector(
    (state: RootState) => state.tvTopRateds
  );
  
  useEffect(() => {
    dispatch(fetchTVTopRateds());
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    <MediaItem medias={tvTopRateds}/>
  </>
  );
};

export default TVTopRateds;