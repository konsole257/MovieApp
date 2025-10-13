import { createSlice } from '@reduxjs/toolkit';

import { fetchCredits } from './creditsThunk';

interface Cast {
	id: number;
	name: string;
	profile_path: string;
}

export interface Credits {
	cast: Cast[];
}

interface CreditsState {
	item: Credits;
	loading: boolean;
	error: string | null;
}

const initialState: CreditsState = {
	item: {
		cast: []
	},
	loading: true,
	error: null
};

export const creditsSlice = createSlice({
	name: 'credits',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchCredits.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCredits.fulfilled, (state, action) => {
				state.loading = false;
				state.item = action.payload;
			})
			.addCase(fetchCredits.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch';
			});
	}
});

export const creditsReducer = creditsSlice.reducer;
