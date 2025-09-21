import { createSlice } from '@reduxjs/toolkit';

import fetchMovieNowPlayings from './movieNowPlayingThunk';

export interface MovieNowPlaying {
  id: number;
  title: string;
  poster_path: string;
};

interface MovieNowPlayingsState {
  items: MovieNowPlaying[];
  loading: boolean;
  error: string | null;
};

const initialState: MovieNowPlayingsState = {
  items: Array.from({length: 11}, (_, i) => ({
      id: i,
      title: '',
      poster_path: ''
    })),
  loading: true,
  error: null,
};

const MovieNowPlayingsSlice = createSlice({
  name: 'moviePlayings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieNowPlayings.pending, (state) => {
        state.items = Array.from({length: 11}, (_, i) => ({
          id: i,
          title: '',
          poster_path: ''
        }));
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieNowPlayings.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMovieNowPlayings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch movies';
      });
  },
});

export default MovieNowPlayingsSlice.reducer;