import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchMovieTops } from './movieTopSlice';

const MovieTops = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: movieTops, loading, error } = useSelector(
    (state: RootState) => state.movieTops
  );
  
  useEffect(() => {
    dispatch(fetchMovieTops());
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    {movieTops.map((movieTop) => (
      <li className="movie-item" key={movieTop.id}>
        <NavLink className="movie-link" to="/Detail">
          <img className="movie-img" loading="lazy" src={`https://image.tmdb.org/t/p/w200${movieTop.poster_path}`} alt={movieTop.title} />
        </NavLink>
      </li>
    ))}
  </>
  );
};

export default MovieTops;