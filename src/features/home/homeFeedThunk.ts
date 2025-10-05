import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { HomeFeed, HomeFeedTrailer, ReleaseResponse } from './homeFeedSlice';

export const fetchHomeFeeds = createAsyncThunk('home/fetchHomeFeeds',
  async (_, { rejectWithValue }) => {
    try {
      
      const today = new Date();
      const startDate = new Date(today);
      const endDate = new Date(today);
      startDate.setDate(today.getDate());
      endDate.setMonth(today.getMonth() + 1);

      const params = [
        'language=ja-JP',
        'page=1',
        'certification_country=JP',
        'region=JP',
        `release_date.gte=${startDate}`,
        `release_date.lte=${endDate}`,
        'show_me=everything',
        // 'sort_by=primary_release_date.asc',
        'vote_average.gte=0',
        'vote_average.lte=10',
        'vote_count.gte=0',
        'watch_region=JP',
        'with_release_type=3',
        'with_runtime.gte=0',
        'with_runtime.lte=400',
      ].join('&');

      const moviesResponse:{results: HomeFeed[]} = await fetchTMDB(`discover/movie?${params}`);

      const feeds: HomeFeed[] = await Promise.all(
        moviesResponse.results.map(async (movie) => {
          try{
            const trailersResponse:{results: HomeFeedTrailer[]} = await fetchTMDB(`/movie/${movie.id}/videos?language=ja-JP`);
            const releaseResponse: ReleaseResponse = await fetchTMDB(`/movie/${movie.id}/release_dates?`);
            const releaseJpResponse = releaseResponse.results.find(item => item.iso_3166_1 === 'JP');
            const releaseTypeResponse = releaseJpResponse?.release_dates.filter(item => item.type === 3).pop();
            const releaseCurrent = releaseTypeResponse?.release_date.split('T')[0];
            
            return {...movie, trailers: trailersResponse.results || [], release_date_current: releaseCurrent || ''};
          } catch(e) {
            return {...movie, trailers: []};
          }
        })
      );

      return feeds;

    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);