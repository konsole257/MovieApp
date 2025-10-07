import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/store';

import { fetchTrailerContents } from './trailerContentThunk';

export const useTrailerContent = () => {
	const { id = '' } = useParams<{ id: string }>();
	const dispatch = useDispatch<AppDispatch>();
	const { item, loading, error } = useSelector(
		(state: RootState) => state.trailerContent
	);

	useEffect(() => {
		if (String(item?.id) !== String(id)) dispatch(fetchTrailerContents(id));
	}, [dispatch, id]);

	return { trailerContent: item, loading, error };
};
