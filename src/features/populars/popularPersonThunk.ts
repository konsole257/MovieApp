import { createAsyncThunk } from '@reduxjs/toolkit';

import fetchTMDB from '@/api/tmdb';
import { PopularPerson } from './popularPersonSlice';

const fetchPopularPersons = createAsyncThunk('populars/fetchPopularPerson',
  async (_, { rejectWithValue }) => {
    try {

      const data:{results: PopularPerson[]} = await fetchTMDB('/person/popular?language=ja-JP&page=1');

      return data.results;

    } catch (err: unknown) {

      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);

export default fetchPopularPersons;