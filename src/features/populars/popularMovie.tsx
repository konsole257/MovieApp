import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchPopularMovies } from './popularMovieSlice';

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
    {popularMovies.map((popularMovie) => (
      <li className="movie-item" key={popularMovie.id}>
        <NavLink className="movie-link" to="/Popular/Detail">
          <img className="movie-img" loading="lazy" src={`https://image.tmdb.org/t/p/w200${popularMovie.poster_path}`} alt={popularMovie.title} />
        </NavLink>
      </li>
    ))}
  </>
  );
};

export default PopularMovies;