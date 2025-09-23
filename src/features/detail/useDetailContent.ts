import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/store';

import { fetchDetailContents } from './detailContentThunk';

export const useDetailContent = () => {
  const location = useLocation();
  const type = location.state?.type;
  const { id='' } = useParams<{ id: string }>();

  const dispatch = useDispatch<AppDispatch>();
  const { item, loading, error } = useSelector(
    (state: RootState) => state.detailContent
  );
  
  useEffect(() => {
    if(type&&id) dispatch(fetchDetailContents({type, id}));
  }, [dispatch]);

  return { detailContent: item, loading, error }
};