import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { Detail } from './detailsSlice';

export const fetchDetails = createAsyncThunk<
	Detail,
	{ type: string; id: string },
	{ rejectValue: string }
>(
	'common/fetchDetails',
	async ({ type, id }: { type: string; id: string }, { rejectWithValue }) => {
		try {
			const detailsRespons: Detail = await fetchTMDB(
				`/${type}/${id}?language=ja-JP`
			);

			return detailsRespons;
		} catch (err) {
			if (err instanceof Error) return rejectWithValue(err.message);

			return rejectWithValue('Network error');
		}
	}
);
