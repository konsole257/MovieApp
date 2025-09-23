import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { TVAiringToday } from './tvAiringTodaySlice';

export const fetchTVAiringTodays = createAsyncThunk('tvs/fetchTVAiringToday',
  async (_, { rejectWithValue }) => {
    try {

      const data:{results: TVAiringToday[]} = await fetchTMDB('/tv/airing_today?language=ja-JP&page=1');

      return data.results;

    } catch (err: unknown) {
      
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);