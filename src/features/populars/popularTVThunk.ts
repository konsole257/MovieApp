import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchTMDB from '@/api/tmdb';
import { PopularTV } from './popularTVSlice';

const fetchPopularTVs = createAsyncThunk('populars/fetchPopularTV',
  async (_, { rejectWithValue }) => {
    try {

      const data = await fetchTMDB('/tv/popular?language=ja-JP&page=1');

      return data.results as PopularTV[];

    } catch (err: unknown) {

      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);

export default fetchPopularTVs;