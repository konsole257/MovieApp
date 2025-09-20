import { createSlice } from '@reduxjs/toolkit';
import fetchMovieUpcomings from './movieUpcomingThunk';

export interface MovieUpcoming {
  id: number;
  title: string;
  poster_path: string;
};

interface MovieUpcomingsState {
  items: MovieUpcoming[];
  loading: boolean;
  error: string | null;
};

const initialState: MovieUpcomingsState = {
  items: [],
  loading: true,
  error: null,
};

const MovieUpcomingsSlice = createSlice({
  name: 'movieCommings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieUpcomings.pending, (state) => {
        state.items = Array.from({length: 11}, (_, i) => ({
          id: i,
          title: '',
          poster_path: ''
        }));
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieUpcomings.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMovieUpcomings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch movies';
      });
  },
});

export default MovieUpcomingsSlice.reducer;