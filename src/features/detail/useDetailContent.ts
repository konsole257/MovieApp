import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/store';

import { fetchDetailContents } from './detailContentThunk';

export const useDetailContent = () => {
	const { type = '', id = '' } = useParams<{ type: string; id: string }>();

	const dispatch = useDispatch<AppDispatch>();
	const { item, loading, error } = useSelector(
		(state: RootState) => state.detailContent
	);

	useEffect(() => {
		if (String(item?.details.id) !== id) {
			if (type && id) dispatch(fetchDetailContents({ type, id }));
		}
	}, [dispatch, item?.details.id, type, id]);

	return { detailContent: item, loading, error };
};
