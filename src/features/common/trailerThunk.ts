import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { Trailer } from './trailerSlice';

export const fetchTrailer = createAsyncThunk<
	Trailer[],
	number,
	{ rejectValue: string }
>('common/fetchTrailer', async (id: number, { rejectWithValue }) => {
	try {
		const trailersResponse: { results: Trailer[] } = await fetchTMDB(
			`/movie/${id}/videos?language=ja-JP`
		);

		return trailersResponse.results;
	} catch (err) {
		if (err instanceof Error) return rejectWithValue(err.message);

		return rejectWithValue('Network error');
	}
});
