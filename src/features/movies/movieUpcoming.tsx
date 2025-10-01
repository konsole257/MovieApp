import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/store';

import { fetchMovieUpcomings } from './movieUpcomingThunk';
import { MediaItem } from '@/components/MediaItem';

export const MovieUpcoming = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: movieUpcomings, loading, error } = useSelector(
    (state: RootState) => state.movieUpcomings
  );
  
  useEffect(() => {
    dispatch(fetchMovieUpcomings());
  }, [dispatch]);

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    <MediaItem type="movie" loading={loading} medias={movieUpcomings}/>
  </>
  )
};