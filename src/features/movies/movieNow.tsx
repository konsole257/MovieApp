import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchMovieNows } from './movieNowSlice';

const MovieNows = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: movieNows, loading, error } = useSelector(
    (state: RootState) => state.movieNows
  );
  
  useEffect(() => {
    dispatch(fetchMovieNows());
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    {movieNows.map((movieNow) => (
      <li className="movie-item" key={movieNow.id}>
        <NavLink className="movie-link" to="/Detail">
          <img className="movie-img" loading="lazy" src={`https://image.tmdb.org/t/p/w200${movieNow.poster_path}`} alt={movieNow.title} />
        </NavLink>
      </li>
    ))}
  </>
  );
};

export default MovieNows;