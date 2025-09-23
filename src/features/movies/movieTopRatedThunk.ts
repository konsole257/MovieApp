import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { MovieTopRated } from './movieTopRatedSlice';

export const fetchMovieTopRateds = createAsyncThunk('movies/fetchMovieTopRated',
  async (_, { rejectWithValue }) => {
    try {

      const data:{results: MovieTopRated[]} = await fetchTMDB('/movie/top_rated?language=ja-JP&page=1');

      return data.results;

    } catch (err: unknown) {

      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);