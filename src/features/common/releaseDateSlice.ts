import { createSlice } from '@reduxjs/toolkit';

import { fetchReleaseDate } from './releaseDateThunk';

export interface ReleaseDateResponse {
	iso_3166_1: string;
	release_dates: [
		{
			release_date: string;
			type: number;
		}
	];
}

export interface ReleaseDate {
	first: string;
	latest: string;
}

interface ReleaseDatesState {
	item: ReleaseDate;
	loading: boolean;
	error: string | null;
}

const initialState: ReleaseDatesState = {
	item: {
		first: '',
		latest: ''
	},
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
