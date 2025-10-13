import { createSlice } from '@reduxjs/toolkit';

import { Detail } from '@/features/common/detailsSlice';
import { Credits } from '@/features/common/creditsSlice';
import { fetchDetailContents } from './detailContentThunk';

export interface Details {
	details: Detail;
	credits: Credits;
	release_date_latest: string;
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
		release_date_latest: ''
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
					release_date_latest: ''
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
