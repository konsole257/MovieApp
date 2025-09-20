import { createSlice } from '@reduxjs/toolkit';
import fetchTVTopRateds from './tvTopRatedThunk';

export interface TVTopRated {
  id: number;
  title: string;
  poster_path: string;
};

interface TVTopRatedsState {
  items: TVTopRated[];
  loading: boolean;
  error: string | null;
};

const initialState: TVTopRatedsState = {
  items: [],
  loading: true,
  error: null,
};

const TVTopRatedsSlice = createSlice({
  name: 'tvTopRateds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTVTopRateds.pending, (state) => {
        state.items = Array.from({length: 11}, (_, i) => ({
          id: i,
          title: '',
          poster_path: ''
        }));
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTVTopRateds.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTVTopRateds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch movies';
      });
  },
});

export default TVTopRatedsSlice.reducer;