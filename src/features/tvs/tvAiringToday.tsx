import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchTVAiringTodays } from './tvAiringTodaySlice';

const TVAiringTodays = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: tvAiringTodays, loading, error } = useSelector(
    (state: RootState) => state.tvAiringTodays
  );
  
  useEffect(() => {
    dispatch(fetchTVAiringTodays());
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    {tvAiringTodays.map((tvAiringToday) => (
      <li className="movie-item" key={tvAiringToday.id}>
        <NavLink className="movie-link" to="/Detail">
          <img className="movie-img" loading="lazy" src={`https://image.tmdb.org/t/p/w200${tvAiringToday.poster_path}`} alt={tvAiringToday.title} />
        </NavLink>
      </li>
    ))}
  </>
  );
};

export default TVAiringTodays;