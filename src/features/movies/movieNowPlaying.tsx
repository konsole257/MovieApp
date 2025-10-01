import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/store';

import { fetchMovieNowPlayings } from './movieNowPlayingThunk';
import { MediaItem } from '@/components/MediaItem';

export const MovieNowPlaying = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: movieNowPlayings, loading, error } = useSelector(
    (state: RootState) => state.movieNowPlayings
  );
  
  useEffect(() => {
    dispatch(fetchMovieNowPlayings());
  }, [dispatch]);

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    <MediaItem type="movie" loading={loading} medias={movieNowPlayings}/>
  </>
  )
};