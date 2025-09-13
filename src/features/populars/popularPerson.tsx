import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchPopularPersons } from './popularPersonSlice';

const PopularPersons = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: popularPersons, loading, error } = useSelector(
    (state: RootState) => state.popularPersons
  );
  
  useEffect(() => {
    dispatch(fetchPopularPersons());
  }, [dispatch]);

  if(loading) return <p>Loading movies...</p>;
  if(error) return <p>Error: {error}</p>;

  return (
  <>
    {popularPersons.map((popularPerson) => (
      <li className="person-item" key={popularPerson.id}>
        <NavLink className="person-link" to="/Popular/Detail">
          <figure className="person-fig"><img className="person-img" loading="lazy" src={`https://image.tmdb.org/t/p/w200${popularPerson.profile_path}`} alt={popularPerson.name} /></figure>
          <div className="person-name">{popularPerson.name}</div>
        </NavLink>
      </li>
    ))}
  </>
  );
};

export default PopularPersons;