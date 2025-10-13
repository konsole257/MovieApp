import { createSlice } from '@reduxjs/toolkit';

import { fetchDiscoverMovie } from './discoverMovieThunk';

export interface DiscoverMovie {
	id: number;
	title: string;
	backdrop_path: string;
}

interface DiscoverMoviesState {
	items: DiscoverMovie[];
	loading: boolean;
	error: string | null;
}

const initialState: DiscoverMoviesState = {
	items: [],
	loading: true,
	error: null
};

export const discoverMovieSlice = createSlice({
	name: 'discoverMovie',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchDiscoverMovie.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchDiscoverMovie.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchDiscoverMovie.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch';
			});
	}
});

export const discoverMovieReducer = discoverMovieSlice.reducer;
