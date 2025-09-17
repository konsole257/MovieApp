import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import fetchTVAiringTodays from './tvAiringTodayThunk';

import MediaItem from '../../components/MediaItem';

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
    <MediaItem type="tv" medias={tvAiringTodays}/>
  </>
  );
};

export default TVAiringTodays;