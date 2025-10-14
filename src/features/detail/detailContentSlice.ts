import { createSlice } from '@reduxjs/toolkit';

import { Detail } from '@/features/common/detailsSlice';
import { Credits } from '@/features/common/creditsSlice';
import { Review } from '@/features/common/reviewsSlice';
import { ReleaseDate } from '@/features/common/releaseDateSlice';
import { Recommend } from '@/features/common/recommendsSlice';
import { fetchDetailContents } from './detailContentThunk';

export interface Details {
	details: Detail;
	credits: Credits;
	release_date_current: ReleaseDate;
	reviews: Review[];
	recommends: Recommend[];
}

interface DetailsState {
	item: Details | null;
	loading: boolean;
	error: string | null;
}

const initialState: DetailsState = {
	item: {
		details: {
			id: 0,
			title: '',
			name: '',
			backdrop_path: '',
			overview: '',
			runtime: 0,
			popularity: 0,
			vote_average: 0,
			genres: [
				{
					id: 0,
					name: ''
				}
			]
		},
		credits: {
			cast: Array.from({ length: 8 }, (_, i) => ({
				id: i,
				name: '',
				profile_path: ''
			}))
		},
		release_date_current: {
			first: '',
			latest: ''
		},
		reviews: [],
		recommends: []
	},
	loading: true,
	error: null
};

export const detailContentsSlice = createSlice({
	name: 'detailContents',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchDetailContents.pending, state => {
				state.item = {
					details: {
						id: 0,
						title: '',
						name: '',
						backdrop_path: '',
						overview: '',
						runtime: 0,
						popularity: 0,
						vote_average: 0,
						genres: [
							{
								id: 0,
								name: ''
							}
						]
					},
					credits: {
						cast: Array.from({ length: 8 }, (_, i) => ({
							id: i,
							name: '',
							profile_path: ''
						}))
					},
					release_date_current: {
						first: '',
						latest: ''
					},
					reviews: [],
					recommends: []
				};
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchDetailContents.fulfilled, (state, action) => {
				state.loading = false;
				state.item = action.payload;
			})
			.addCase(fetchDetailContents.rejected, (state, action) => {
				state.loading = false;
				state.error =
					(action.payload as string) ||
					action.error.message ||
					'Failed to fetch';
			});
	}
});

export const detailContentsReducer = detailContentsSlice.reducer;
