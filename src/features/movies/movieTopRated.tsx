import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import fetchMovieTopRateds from './movieTopRatedThunk';

import MediaItem from '../../components/MediaItem';

const MovieTopRateds = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: movieTopRateds, loading, error } = useSelector(
    (state: RootState) => state.movieTopRateds
  );
  
  useEffect(() => {
    dispatch(fetchMovieTopRateds());
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    <MediaItem type="movie" medias={movieTopRateds}/>
  </>
  );
};

export default MovieTopRateds;