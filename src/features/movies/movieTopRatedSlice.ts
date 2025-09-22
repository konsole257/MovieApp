import { createSlice } from '@reduxjs/toolkit';

import fetchMovieTopRateds from './movieTopRatedThunk';

export interface MovieTopRated {
  id: number;
  title: string;
  poster_path: string;
};

interface MovieTopRatedsState {
  items: MovieTopRated[];
  loading: boolean;
  error: string | null;
};

const initialState: MovieTopRatedsState = {
  items: Array.from({length: 11}, (_, i) => ({
      id: i,
      title: '',
      poster_path: ''
    })),
  loading: true,
  error: null,
};

const MovieTopRatedsSlice = createSlice({
  name: 'movieRates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieTopRateds.pending, (state) => {
        state.items = Array.from({length: 11}, (_, i) => ({
          id: i,
          title: '',
          poster_path: ''
        }));
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieTopRateds.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMovieTopRateds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch';
      });
  },
});

export default MovieTopRatedsSlice.reducer;