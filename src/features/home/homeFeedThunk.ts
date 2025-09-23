import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { HomeFeed, HomeFeedTrailer } from './homeFeedSlice';

export const fetchHomeFeeds = createAsyncThunk('home/fetchHomeFeeds',
  async (_, { rejectWithValue }) => {
    try {
      
      const today = new Date();
      const startDate = new Date(today);
      const endDate = new Date(today);
      startDate.setDate(today.getDate());
      endDate.setMonth(today.getMonth() + 1);

      const sort = [
        "certification_country=JP",
        "region=JP",
        `release_date.gte=${startDate}`,
        `release_date.lte=${endDate}`,
        "show_me=everything",
        "sort_by=primary_release_date.asc",
        "vote_average.gte=0",
        "vote_average.lte=10",
        "vote_count.gte=0",
        "watch_region=JP",
        "with_release_type=3",
        "with_runtime.gte=0",
        "with_runtime.lte=400",
      ].join("&");

      const data:{results: HomeFeed[]} = await fetchTMDB(`discover/movie?language=ja-JP&page=1&${sort}`);

      const trailerData: HomeFeed[] = await Promise.all(
        data.results.map(async (movie) => {
          try{
            const trailerRes:{results: HomeFeedTrailer[]} = await fetchTMDB(`/movie/${movie.id}/videos?language=ja-JP`);

            return {...movie, trailers: trailerRes.results || []};
          } catch(e) {
            return {...movie, trailers: []};
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