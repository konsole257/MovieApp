import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchPopularMovies } from './popularMovieSlice';

import MediaItem from '../../components/MediaItem';

const PopularMovies = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: popularMovies, loading, error } = useSelector(
    (state: RootState) => state.popularMovies
  );
  
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    <MediaItem type="movie" medias={popularMovies}/>
  </>
  );
};

export default PopularMovies;