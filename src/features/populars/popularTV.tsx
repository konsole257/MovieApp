import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchPopularTVs } from './popularTVSlice';

import MediaItem from '../../components/MediaItem';

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
    <MediaItem type="tv" medias={popularTVs}/>
  </>
  );
};

export default PopularTVs;