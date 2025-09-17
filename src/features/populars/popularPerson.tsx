import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import fetchPopularPersons from './popularPersonThunk';

import PersonItem from '../../components/PersonItem';

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
    <PersonItem persons={popularPersons} />
  </>
  );
};

export default PopularPersons;