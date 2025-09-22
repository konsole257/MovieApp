import { createSlice } from '@reduxjs/toolkit';

import fetchHomeHeros from './homeHeroThunk';

export interface HomeHeroVideo {
  id: number;
  key?: string;
  name?: string;
}

export interface HomeHero {
  id: number;
  title: string;
  backdrop_path: string;
  release_date: string;
  videos: HomeHeroVideo[];
};

interface MovieUpcomingsState {
  items: HomeHero[];
  loading: boolean;
  error: string | null;
};

const initialState: MovieUpcomingsState = {
  items: Array.from({length: 11}, (_, i) => ({
      id: i,
      title: '',
      backdrop_path: '',
      release_date: '',
      videos: []
    })),
  loading: true,
  error: null,
};

const MovieUpcomingsSlice = createSlice({
  name: 'homeHeros',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeHeros.pending, (state) => {
        state.items = Array.from({length: 11}, (_, i) => ({
          id: i,
          title: '',
          backdrop_path: '',
          release_date: '',
          videos: []
        }));
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeHeros.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchHomeHeros.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch';
      });
  },
});

export default MovieUpcomingsSlice.reducer;