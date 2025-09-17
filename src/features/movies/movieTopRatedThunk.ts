import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchTMDB from '@/api/tmdb';
import { MovieTopRated } from './movieTopRatedSlice';

const fetchMovieTopRateds = createAsyncThunk('movies/fetchMovieTopRated',
  async (_, { rejectWithValue }) => {
    try {

      const data = await fetchTMDB('/movie/top_rated?language=ja-JP&page=1');

      return data.results as MovieTopRated[];

    } catch (err: unknown) {

      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);

export default fetchMovieTopRateds;