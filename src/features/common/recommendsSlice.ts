import { createSlice } from '@reduxjs/toolkit';

import { fetchRecommends } from './recommendsThunk';

export interface Recommend {
	id: number;
	title: string;
	poster_path: string;
}

interface RecommendsState {
	items: Recommend[];
	loading: boolean;
	error: string | null;
}

const initialState: RecommendsState = {
	items: [],
	loading: true,
	error: null
};

export const recommendsSlice = createSlice({
	name: 'recommends',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchRecommends.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchRecommends.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchRecommends.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch';
			});
	}
});

export const recommendsReducer = recommendsSlice.reducer;
