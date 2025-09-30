import { createSlice } from '@reduxjs/toolkit';

import { fetchTrailerContents } from './trailerContentThunk';

export interface Trailer {
  id: number;
  key: string;
  name: string;
}

export interface DetailContent {
  id: number,
  title: string;
  release_date: string;
  backdrop_path: string;
  trailers: Trailer[];
}

interface DetailContentState {
  item: DetailContent | null;
  loading: boolean;
  error: string | null;
}

const initialState: DetailContentState = {
  item: {
    id: 0,
    title: '',
    release_date: '',
    backdrop_path: '',
    trailers: [{
      id: 0,
      key: '',
      name: ''
    }]
  },
  loading: true,
  error: null,
};

export const trailerContentsSlice = createSlice({
  name: 'trailerContents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrailerContents.pending, (state) => {
        state.item = {
          id: 0,
          title: '',
          release_date: '',
          backdrop_path: '',
          trailers: [{
            id: 0,
            key: '',
            name: ''
          }]
        },
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrailerContents.fulfilled, (state, action) => {
        state.item = action.payload;
        state.loading = false;
      })
      .addCase(fetchTrailerContents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch';
      });
  },
});

export const trailerContentsReducer = trailerContentsSlice.reducer;