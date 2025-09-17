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
  items: [],
  loading: false,
  error: null,
};

const PopularTVsSlice = createSlice({
  name: 'popularTVs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularTVs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularTVs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPopularTVs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch movies';
      });
  },
});

export default PopularTVsSlice.reducer;