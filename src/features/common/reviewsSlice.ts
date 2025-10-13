import { createSlice } from '@reduxjs/toolkit';

import { fetchReviews } from './reviewsThunk';

export interface Review {
	id: string;
	content: string;
}

interface ReviewsState {
	items: Review[];
	loading: boolean;
	error: string | null;
}

const initialState: ReviewsState = {
	items: [],
	loading: true,
	error: null
};

export const reviewsSlice = createSlice({
	name: 'reviews',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchReviews.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchReviews.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchReviews.rejected, (state, action) => {
				state.loading = false;
				state.error =
					(action.payload as string) ||
					action.error.message ||
					'Failed to fetch';
			});
	}
});

export const reviewsReducer = reviewsSlice.reducer;
