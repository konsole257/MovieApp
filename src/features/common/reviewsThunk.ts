import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { Review } from './reviewsSlice';

export const fetchReviews = createAsyncThunk<
	Review[],
	number | string,
	{ rejectValue: string }
>('common/fetchReviews', async (id: number | string, { rejectWithValue }) => {
	try {
		const reviewsResponse: { results: Review[] } = await fetchTMDB(
			`/movie/${id}/reviews?language=en-US&page=1`
		);

		return reviewsResponse.results;
	} catch (err) {
		if (err instanceof Error) return rejectWithValue(err.message);

		return rejectWithValue('Network error');
	}
});
