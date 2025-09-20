import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import fetchPopularTVs from './popularTVThunk';

import MediaItem from '../../components/MediaItem';

const PopularTVs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: popularTVs, loading, error } = useSelector(
    (state: RootState) => state.popularTVs
  );
  
  useEffect(() => {
    dispatch(fetchPopularTVs());
  }, [dispatch]);

  // if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error}</p>;

  return (
  <>
    <MediaItem type="tv" loading={loading} medias={popularTVs}/>
  </>
  );
};

export default PopularTVs;