import { createSlice } from '@reduxjs/toolkit';

import { fetchHomeFeeds } from './homeFeedThunk';

export interface HomeFeedTrailer {
  id: number;
  key?: string;
  name?: string;
}
export interface HomeFeedReleaseDate {
  release_date: string;
  type: number;
}

export interface HomeFeedRelease {
  iso_3166_1: string;
  release_dates: HomeFeedReleaseDate[];
}

export interface HomeFeedReleaseResponse {
  id: number;
  results: HomeFeedRelease[];
}

export interface HomeFeed {
  id: number;
  title: string;
  backdrop_path: string;
  release_date: string;
  release_date_current: string;
  trailers: HomeFeedTrailer[];
};

interface HomeFeedsState {
  items: HomeFeed[];
  loading: boolean;
  error: string | null;
};

const initialState: HomeFeedsState = {
  items: Array.from({length: 11}, (_, i) => ({
      id: i,
      title: '',
      backdrop_path: '',
      release_date: '',
      release_date_current: '',
      trailers: []
    })),
  loading: true,
  error: null,
};

export const homeFeedsSlice = createSlice({
  name: 'homeFeeds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeFeeds.pending, (state) => {
        state.items = Array.from({length: 11}, (_, i) => ({
          id: i,
          title: '',
          backdrop_path: '',
          release_date: '',
          release_date_current: '',
          trailers: []
        }));
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeFeeds.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchHomeFeeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch';
      });
  },
});

export const homeFeedsReducer = homeFeedsSlice.reducer;