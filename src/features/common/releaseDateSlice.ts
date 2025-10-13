import { createSlice } from '@reduxjs/toolkit';

import { fetchReleaseDate } from './releaseDateThunk';

interface ReleaseDate {
	release_date: string;
	type: number;
}

export interface ReleaseDates {
	iso_3166_1: string;
	release_dates: ReleaseDate[];
}

interface ReleaseDatesState {
	item: string;
	loading: boolean;
	error: string | null;
}

const initialState: ReleaseDatesState = {
	item: '',
	loading: true,
	error: null
};

export const releaseDataSlice = createSlice({
	name: 'releaseData',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchReleaseDate.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchReleaseDate.fulfilled, (state, action) => {
				state.loading = false;
				state.item = action.payload;
			})
			.addCase(fetchReleaseDate.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch';
			});
	}
});

export const releaseDataReducer = releaseDataSlice.reducer;
