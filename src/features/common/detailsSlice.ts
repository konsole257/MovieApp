import { createSlice } from '@reduxjs/toolkit';

import { fetchDetails } from './detailsThunk';

interface Gennre {
	id: number;
	name: string;
}

export interface Detail {
	id: number;
	title?: string;
	name?: string;
	backdrop_path: string;
	overview?: string;
	runtime: number;
	popularity: number;
	vote_average: number;
	genres: Gennre[];
}

interface DetailsState {
	item: Detail | null;
	loading: boolean;
	error: string | null;
}

const initialState: DetailsState = {
	item: null,
	loading: true,
	error: null
};

export const detailsSlice = createSlice({
	name: 'details',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchDetails.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchDetails.fulfilled, (state, action) => {
				state.loading = false;
				state.item = action.payload;
			})
			.addCase(fetchDetails.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch';
			});
	}
});

export const detailsReducer = detailsSlice.reducer;
