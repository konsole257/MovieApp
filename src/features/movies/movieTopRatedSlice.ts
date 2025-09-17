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
  items: [],
  loading: false,
  error: null,
};

const MovieTopRatedsSlice = createSlice({
  name: 'movieRates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieTopRateds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieTopRateds.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMovieTopRateds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch movies';
      });
  },
});

export default MovieTopRatedsSlice.reducer;