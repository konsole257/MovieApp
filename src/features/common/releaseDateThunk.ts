import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { ReleaseDates } from './releaseDateSlice';

export const fetchReleaseDate = createAsyncThunk<
	string,
	number | string,
	{ rejectValue: string }
>('common/fetchRelease', async (id: number | string, { rejectWithValue }) => {
	try {
		const releaseDatesResponse: { results: ReleaseDates[] } = await fetchTMDB(
			`/movie/${id}/release_dates`
		);

		const releaseDatesJp = releaseDatesResponse.results.find(
			item => item.iso_3166_1 === 'JP'
		) ?? { iso_3166_1: 'JP', release_dates: [] };

		const releaseDatesTheater = releaseDatesJp.release_dates
			.filter(item => item.type === 3)
			.pop() ?? { release_date: '', type: 3 };

		const releaseDateLatest = releaseDatesTheater.release_date.split('T')[0];

		return releaseDateLatest;
	} catch (err) {
		if (err instanceof Error) return rejectWithValue(err.message);

		return rejectWithValue('Network error');
	}
});
