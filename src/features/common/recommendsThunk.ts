import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { Recommend } from './recommendsSlice';

export const fetchRecommends = createAsyncThunk<
	Recommend[],
	string,
	{ rejectValue: string }
>('common/fetchCreadits', async (id: string, { rejectWithValue }) => {
	try {
		const recommendsRespons: { results: Recommend[] } = await fetchTMDB(
			`/movie/${id}/recommendations?language=ja-JP&page=1`
		);

		return recommendsRespons.results;
	} catch (err) {
		if (err instanceof Error) return rejectWithValue(err.message);

		return rejectWithValue('Network error');
	}
});
