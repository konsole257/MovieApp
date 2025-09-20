import { createSlice } from '@reduxjs/toolkit';
import fetchPopularMovies from './popularMovieThunk';

export interface PopularMovie {
  id: number;
  title: string;
  poster_path: string;
};

interface PopularMoviesState {
  items: PopularMovie[];
  loading: boolean;
  error: string | null;
};

const initialState: PopularMoviesState = {
  items: [],
  loading: false,
  error: null,
};

const PopularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.items = Array.from({length: 4}, (_, i) => ({
          id: i,
          title: '',
          poster_path: ''
        }));
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch Data';
      });
  },
});

export default PopularMoviesSlice.reducer;