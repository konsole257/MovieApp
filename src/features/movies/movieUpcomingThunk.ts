import { createAsyncThunk } from '@reduxjs/toolkit';

import fetchTMDB from '@/api/tmdb';
import { MovieUpcoming } from './movieUpcomingSlice';

const fetchMovieUpcomings = createAsyncThunk('movies/fetchMovieUpcoming',
  async (_, { rejectWithValue }) => {
    try {

      const data:{results: MovieUpcoming[]} = await fetchTMDB('/movie/upcoming?language=ja-JP&page=1');

      return data.results;

    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);

export default fetchMovieUpcomings;