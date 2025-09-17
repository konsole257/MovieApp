import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchTMDB from '@/api/tmdb';
import { PopularMovie } from './popularMovieSlice';

const fetchPopularMovies = createAsyncThunk('populars/fetchPopularMovie',
  async (_, { rejectWithValue }) => {
    try {

      const data = await fetchTMDB('/movie/popular?language=ja-JP&page=1');
      
      return data.results as PopularMovie[];

    } catch (err: unknown) {

      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);

export default fetchPopularMovies;