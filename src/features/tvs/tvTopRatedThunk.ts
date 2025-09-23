import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { TVTopRated } from './tvTopRatedSlice';

export const fetchTVTopRateds = createAsyncThunk('tvs/fetchTVTopRated',
  async (_, { rejectWithValue }) => {
    try {

      const data:{results: TVTopRated[]} = await fetchTMDB('/tv/top_rated?language=ja-JP&page=1');

      return data.results;

    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);