import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { ReleaseDate, ReleaseDateResponse } from './releaseDateSlice';

export const fetchReleaseDate = createAsyncThunk<
	ReleaseDate,
	number | string,
	{ rejectValue: string }
>('common/fetchRelease', async (id: number | string, { rejectWithValue }) => {
	try {
		const releaseDatesResponse: { results: ReleaseDateResponse[] } =
			await fetchTMDB(`/movie/${id}/release_dates`);

		const releaseDatesJp = releaseDatesResponse.results.find(
			item => item.iso_3166_1 === 'JP'
		) ?? { iso_3166_1: 'JP', release_dates: [] };

		const releaseDatesTheater = releaseDatesJp.release_dates.filter(
			item => item.type === 3
		) ?? { release_date: '', type: 3 };

		const releaseDateLatest = releaseDatesTheater.pop() ?? {
			release_date: '',
			type: 3
		};

		const releaseDateFirst = releaseDatesTheater.shift() ?? {
			release_date: '',
			type: 3
		};

		return {
			first: releaseDateFirst.release_date.split('T')[0],
			latest: releaseDateLatest.release_date.split('T')[0]
		};
	} catch (err) {
		if (err instanceof Error) return rejectWithValue(err.message);

		return rejectWithValue('Network error');
	}
});
