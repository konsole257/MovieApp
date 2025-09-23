import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { DetailContent } from './detailContentSlice';

export const fetchDetailContents = createAsyncThunk('detail/fetchDetailContent',
  async ({type, id}: {type: string, id: string}, { rejectWithValue }) => {
    try {

      const data: DetailContent = await fetchTMDB(`/${type}/${id}?language=ja-JP`);

      return data;

    } catch (err: unknown) {

      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);