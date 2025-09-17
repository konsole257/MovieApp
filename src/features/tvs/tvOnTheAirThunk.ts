import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchTMDB from '@/api/tmdb';
import { TVOnTheAir } from './tvOnTheAirSlice';

const fetchTVOnTheAirs = createAsyncThunk('tvs/fetchTVOnTheAir',
  async (_, { rejectWithValue }) => {
    try {

      const data = await fetchTMDB('/tv/on_the_air?language=ja-JP&page=1');
      
      return data.results as TVOnTheAir[];

    } catch (err: unknown) {

      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);

export default fetchTVOnTheAirs;