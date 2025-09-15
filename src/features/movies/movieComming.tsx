import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchMovieCommings } from './movieCommingSlice';

import MediaItem from '../../components/MediaItem';

const MovieCommings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: movieCommings, loading, error } = useSelector(
    (state: RootState) => state.movieCommings
  );
  
  useEffect(() => {
    dispatch(fetchMovieCommings());
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    <MediaItem medias={movieCommings}/>
  </>
  );
};

export default MovieCommings;