import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchTVOnTheAirs } from './tvOnTheAirSlice';

const TVOnTheAirs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: tvOnTheAirs, loading, error } = useSelector(
    (state: RootState) => state.tvOnTheAirs
  );
  
  useEffect(() => {
    dispatch(fetchTVOnTheAirs());
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    {tvOnTheAirs.map((tvOnTheAir) => (
      <li className="movie-item" key={tvOnTheAir.id}>
        <NavLink className="movie-link" to="/Detail">
          <img className="movie-img" loading="lazy" src={`https://image.tmdb.org/t/p/w200${tvOnTheAir.poster_path}`} alt={tvOnTheAir.title} />
        </NavLink>
      </li>
    ))}
  </>
  );
};

export default TVOnTheAirs;