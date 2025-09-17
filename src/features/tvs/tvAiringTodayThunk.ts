import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchTMDB from '@/api/tmdb';
import { TVAiringToday } from './tvAiringTodaySlice';

const fetchTVAiringTodays = createAsyncThunk('tvs/fetchTVAiringToday',
  async (_, { rejectWithValue }) => {
    try {

      const data = await fetchTMDB('/tv/airing_today?language=ja-JP&page=1');

      return data.results as TVAiringToday[];

    } catch (err: unknown) {
      
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);

export default fetchTVAiringTodays;