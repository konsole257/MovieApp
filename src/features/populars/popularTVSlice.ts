import { createSlice } from '@reduxjs/toolkit';

import fetchPopularTVs from './popularTVThunk';

export interface PopularTV {
  id: number;
  name: string;
  poster_path: string;
};

interface PopularTVsState {
  items: PopularTV[];
  loading: boolean;
  error: string | null;
};

const initialState: PopularTVsState = {
  items: Array.from({length: 11}, (_, i) => ({
      id: i,
      name: '',
      poster_path: ''
    })),
  loading: true,
  error: null,
};

const PopularTVsSlice = createSlice({
  name: 'popularTVs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularTVs.pending, (state) => {
        state.items = Array.from({length: 11}, (_, i) => ({
          id: i,
          name: '',
          poster_path: ''
        }));
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularTVs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPopularTVs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch';
      });
  },
});

export default PopularTVsSlice.reducer;