import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchPopularTVs } from './popularTVSlice';

const PopularTVs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: popularTVs, loading, error } = useSelector(
    (state: RootState) => state.popularTVs
  );
  
  useEffect(() => {
    dispatch(fetchPopularTVs());
  }, [dispatch]);

  if(loading) return <p>Loading movies...</p>;
  if(error) return <p>Error: {error}</p>;

  return (
  <>
    {popularTVs.map((popularTV) => (
      <li className="movie-item" key={popularTV.id}>
        <NavLink className="movie-link" to="/Popular/Detail">
          <img className="movie-img" loading="lazy" src={`https://image.tmdb.org/t/p/w200${popularTV.poster_path}`} alt={popularTV.title} />
        </NavLink>
      </li>
    ))}
  </>
  );
};

export default PopularTVs;