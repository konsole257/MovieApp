import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { Credits } from './creditsSlice';

export const fetchCredits = createAsyncThunk<
	Credits,
	{ type: string; id: string },
	{ rejectValue: string }
>(
	'common/fetchCreadits',
	async ({ type, id }: { type: string; id: string }, { rejectWithValue }) => {
		try {
			const creditRespons: Credits = await fetchTMDB(
				`/${type}/${id}/credits?language=ja-JP`
			);

			return creditRespons;
		} catch (err) {
			if (err instanceof Error) return rejectWithValue(err.message);

			return rejectWithValue('Network error');
		}
	}
);
