import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { MovieNowPlaying } from './movieNowPlayingSlice';

export const fetchMovieNowPlayings = createAsyncThunk('movies/fetchMovieNowPlaying',
  async (_, { rejectWithValue }) => {
    try {

      const data:{results: MovieNowPlaying[]} = await fetchTMDB('/movie/now_playing?language=ja-JP&page=1');

      return data.results;

    } catch (err: unknown) {

      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);