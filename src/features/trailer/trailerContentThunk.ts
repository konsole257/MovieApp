import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { DetailContent, Trailer } from './trailerContentSlice';

export const fetchTrailerContents = createAsyncThunk('trailer/fetchTrailerContents',
  async (id: string, { rejectWithValue }) => {
    try {
      const detailResponse: DetailContent = await fetchTMDB(`/movie/${id}?language=ja-JP`);

      let trailerContent: DetailContent;

      try {
        const trailerResponse:{results: Trailer[]} = await fetchTMDB(`/movie/${id}/videos?language=ja-JP`);

        trailerContent = {...detailResponse, trailers: trailerResponse.results || []};
      } catch (err: unknown) {
        return rejectWithValue(err);
      }

      return trailerContent;

    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);