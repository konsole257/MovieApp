import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { TrailerContent, BackdropPath } from './trailerContentSlice';

export const fetchTrailerContents = createAsyncThunk('trailer/fetchTrailerContents',
  async (id: string, { rejectWithValue }) => {
    try {
      const data:{results: TrailerContent[]} = await fetchTMDB(`/movie/${id}/videos?language=ja-JP`);

      const trailerData: TrailerContent[] = await Promise.all(
        data.results.map(async (trailer) => {
          try{
            const backdropPathRes: BackdropPath = await fetchTMDB(`/movie/${id}?language=ja-JP`);

            return {...trailer, backdrop_path: backdropPathRes.backdrop_path || ''};
          } catch(e) {
            return {...trailer, backdrop_path: trailer.backdrop_path || ''};
          }
        })
      );

      return trailerData;

    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);