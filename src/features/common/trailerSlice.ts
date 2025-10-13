import { createSlice } from '@reduxjs/toolkit';

import { fetchTrailer } from './trailerThunk';

export interface Trailer {
	id: string;
	key: string;
	name: string;
}

interface TrailersState {
	items: Trailer[];
	loading: boolean;
	error: string | null;
}

const initialState: TrailersState = {
	items: [],
	loading: true,
	error: null
};

export const trailerSlice = createSlice({
	name: 'trailer',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchTrailer.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchTrailer.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchTrailer.rejected, (state, action) => {
				state.loading = false;
				state.error =
					(action.payload as string) ||
					action.error.message ||
					'Failed to fetch';
			});
	}
});

export const trailerReducer = trailerSlice.reducer;
