import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/store';

import { MediaItem } from '@/components/MediaItem';

import { fetchPopularTVs } from './popularTVThunk';

export const PopularTV = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: popularTVs, loading, error } = useSelector(
    (state: RootState) => state.popularTVs
  );
  
  useEffect(() => {
    dispatch(fetchPopularTVs());
  }, [dispatch]);

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    <MediaItem type="tv" loading={loading} medias={popularTVs}/>
  </>
  )
};