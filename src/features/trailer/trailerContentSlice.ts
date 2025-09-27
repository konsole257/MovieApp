import { createSlice } from '@reduxjs/toolkit';

import { fetchTrailerContents } from './trailerContentThunk';

export interface BackdropPath {
  backdrop_path?: string;
}

export interface TrailerContent {
  id: number;
  key: string;
  name: string;
  backdrop_path?: string;
}

interface TrailerContentsState {
  items: TrailerContent[];
  loading: boolean;
  error: string | null;
};

const initialState: TrailerContentsState = {
  items: [{
    id: 0,
    key: '',
    name: '',
    backdrop_path: '',
  }],
  loading: true,
  error: null,
};

export const TrailerContentsSlice = createSlice({
  name: 'trailerContents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrailerContents.pending, (state) => {
        state.items = [{
          id: 0,
          key: '',
          name: '',
          backdrop_path: '',
        }]
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrailerContents.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTrailerContents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch';
      });
  },
});

export const TrailerContentsReducer = TrailerContentsSlice.reducer;