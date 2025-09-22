import { createSlice } from '@reduxjs/toolkit';

import fetchTVOnTheAirs from './tvOnTheAirThunk';

export interface TVOnTheAir {
  id: number;
  name: string;
  poster_path: string;
};

interface TVOnTheAirsState {
  items: TVOnTheAir[];
  loading: boolean;
  error: string | null;
};

const initialState: TVOnTheAirsState = {
  items: Array.from({length: 11}, (_, i) => ({
      id: i,
      name: '',
      poster_path: ''
    })),
  loading: true,
  error: null,
};

const TVOnTheAirsSlice = createSlice({
  name: 'tvOnTheAirs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTVOnTheAirs.pending, (state) => {
        state.items = Array.from({length: 11}, (_, i) => ({
          id: i,
          name: '',
          poster_path: ''
        }));
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTVOnTheAirs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTVOnTheAirs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch';
      });
  },
});

export default TVOnTheAirsSlice.reducer;