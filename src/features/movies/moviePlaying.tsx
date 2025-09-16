import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchMoviePlayings } from './moviePlayingSlice';

import MediaItem from '../../components/MediaItem';

const MoviePlayings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: moviePlayings, loading, error } = useSelector(
    (state: RootState) => state.moviePlayings
  );
  
  useEffect(() => {
    dispatch(fetchMoviePlayings());
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    <MediaItem type="movie" medias={moviePlayings}/>
  </>
  );
};

export default MoviePlayings;