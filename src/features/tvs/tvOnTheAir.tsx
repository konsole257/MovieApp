import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import fetchTVOnTheAirs from './tvOnTheAirThunk';

import MediaItem from '../../components/MediaItem';

const TVOnTheAirs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: tvOnTheAirs, loading, error } = useSelector(
    (state: RootState) => state.tvOnTheAirs
  );
  
  useEffect(() => {
    dispatch(fetchTVOnTheAirs());
  }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <>
    <MediaItem type="tv" medias={tvOnTheAirs}/>
  </>
  );
};

export default TVOnTheAirs;