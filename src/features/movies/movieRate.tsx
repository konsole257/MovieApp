import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchMovieRates } from './movieRateSlice';

import MediaItem from '../../components/MediaItem';

const MovieRates = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: movieRates, loading, error } = useSelector(
    (state: RootState) => state.movieRates
  );
  
  useEffect(() => {
    dispatch(fetchMovieRates());
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    <MediaItem type="movie" medias={movieRates}/>
  </>
  );
};

export default MovieRates;