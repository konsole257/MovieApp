import { createSlice } from '@reduxjs/toolkit';
import fetchTVAiringTodays from './tvAiringTodayThunk';

export interface TVAiringToday {
  id: number;
  title: string;
  poster_path: string;
};

interface TVAiringTodaysState {
  items: TVAiringToday[];
  loading: boolean;
  error: string | null;
};

const initialState: TVAiringTodaysState = {
  items: [],
  loading: true,
  error: null,
};

const TVAiringTodaysSlice = createSlice({
  name: 'tvAiringTodays',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTVAiringTodays.pending, (state) => {
        state.items = Array.from({length: 11}, (_, i) => ({
          id: i,
          title: '',
          poster_path: ''
        }));
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTVAiringTodays.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTVAiringTodays.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch movies';
      });
  },
});

export default TVAiringTodaysSlice.reducer;