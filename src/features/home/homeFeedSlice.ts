import { createSlice } from '@reduxjs/toolkit';

import { Trailer } from '@/features/common/trailerSlice';
import { DiscoverMovie } from '@/features/common/discoverMovieSlice';
import { fetchHomeFeeds } from './homeFeedThunk';

export interface HomeFeed {
	discover: DiscoverMovie;
	release_date_latest: string;
	trailers: Trailer[];
}

interface HomeFeedsState {
	items: HomeFeed[];
	loading: boolean;
	error: string | null;
}

const initialState: HomeFeedsState = {
	items: Array.from({ length: 11 }, (_, i) => ({
		discover: {
			id: i,
			title: '',
			backdrop_path: ''
		},
		release_date_latest: '',
		trailers: []
	})),
	loading: true,
	error: null
};

export const homeFeedsSlice = createSlice({
	name: 'homeFeeds',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchHomeFeeds.pending, state => {
				state.items = Array.from({ length: 11 }, (_, i) => ({
					discover: {
						id: i,
						title: '',
						backdrop_path: ''
					},
					release_date_latest: '',
					trailers: []
				}));
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchHomeFeeds.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchHomeFeeds.rejected, (state, action) => {
				state.loading = false;
				state.error =
					(action.payload as string) ||
					action.error.message ||
					'Failed to fetch';
			});
	}
});

export const homeFeedsReducer = homeFeedsSlice.reducer;
