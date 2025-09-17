import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchTMDB from '@/api/tmdb';
import { TVTopRated } from './tvTopRatedSlice';

const fetchTVTopRateds = createAsyncThunk('tvs/fetchTVTopRated',
  async (_, { rejectWithValue }) => {
    try {

      const data = await fetchTMDB('/tv/top_rated?language=ja-JP&page=1');

      return data.results as TVTopRated[];

    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);

export default fetchTVTopRateds;