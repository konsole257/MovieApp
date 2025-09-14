import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchMovieUps } from './movieUpSlice';

const MovieUps = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: movieUps, loading, error } = useSelector(
    (state: RootState) => state.movieUps
  );
  
  useEffect(() => {
    dispatch(fetchMovieUps());
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    {movieUps.map((movieUp) => (
      <li className="movie-item" key={movieUp.id}>
        <NavLink className="movie-link" to="/Detail">
          <img className="movie-img" loading="lazy" src={`https://image.tmdb.org/t/p/w200${movieUp.poster_path}`} alt={movieUp.title} />
        </NavLink>
      </li>
    ))}
  </>
  );
};

export default MovieUps;