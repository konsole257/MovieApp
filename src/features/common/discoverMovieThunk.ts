import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { DiscoverMovie } from './discoverMovieSlice';

export const fetchDiscoverMovie = createAsyncThunk<
	DiscoverMovie[],
	string,
	{ rejectValue: string }
>('common/fetchdiscoverMovie', async (params: string, { rejectWithValue }) => {
	try {
		const discoverMoviesResponse: { results: DiscoverMovie[] } =
			await fetchTMDB(`discover/movie?${params}`);

		return discoverMoviesResponse.results;
	} catch (err) {
		if (err instanceof Error) return rejectWithValue(err.message);

		return rejectWithValue('Network error');
	}
});
