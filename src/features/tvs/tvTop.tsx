import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchTVTops } from './tvTopSlice';

const TVTops = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: tvTops, loading, error } = useSelector(
    (state: RootState) => state.tvTops
  );
  
  useEffect(() => {
    dispatch(fetchTVTops());
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    {tvTops.map((tvTop) => (
      <li className="movie-item" key={tvTop.id}>
        <NavLink className="movie-link" to="/Detail">
          <img className="movie-img" loading="lazy" src={`https://image.tmdb.org/t/p/w200${tvTop.poster_path}`} alt={tvTop.title} />
        </NavLink>
      </li>
    ))}
  </>
  );
};

export default TVTops;