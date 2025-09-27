import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/store';

import { fetchHomeFeeds } from './homeFeedThunk';

export const useHomeFeed = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.homeFeeds
  );

  useEffect(() => {
    dispatch(fetchHomeFeeds());
  }, [dispatch]);
  
  return { homeFeeds: items, loading, error };
};
