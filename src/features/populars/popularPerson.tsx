import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/store';

import { fetchPopularPersons } from './popularPersonThunk';
import { PersonItem } from '@/components/PersonItem';

export const PopularPerson = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: popularPersons, loading, error } = useSelector(
    (state: RootState) => state.popularPersons
  );
  
  useEffect(() => {
    dispatch(fetchPopularPersons());
  }, [dispatch]);

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    <PersonItem loading={loading} persons={popularPersons} />
  </>
  )
};