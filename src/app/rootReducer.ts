import { combineReducers } from '@reduxjs/toolkit';

import { HomeFeedsReducer } from '@/features/home/homeFeedSlice';
import { PopularMoviesReducer } from '@/features/populars/popularMovieSlice';
import { PopularTVsReducer } from '@/features/populars/popularTVSlice';
import { PopularPersonsReducer } from '@/features/populars/popularPersonSlice';
import { MovieNowPlayingsReducer } from '@/features/movies/movieNowPlayingSlice';
import { MovieTopRatedsReducer } from '@/features/movies/movieTopRatedSlice';
import { MovieUpcomingsReducer } from '@/features/movies/movieUpcomingSlice';
import { TVAiringTodaysReducer } from '@/features/tvs/tvAiringTodaySlice';
import { TVOnTheAirsReducer } from '@/features/tvs/tvOnTheAirSlice';
import { TVTopRatedsReducer } from '@/features/tvs/tvTopRatedSlice';
import { DetailContentsReducer } from '@/features/detail/detailContentSlice';
import { TrailerContentsReducer } from '@/features/trailer/trailerContentSlice';

export const rootReducer = combineReducers({
  homeFeeds: HomeFeedsReducer,
  popularMovies: PopularMoviesReducer,
  popularTVs: PopularTVsReducer,
  popularPersons: PopularPersonsReducer,
  movieNowPlayings: MovieNowPlayingsReducer,
  movieTopRateds: MovieTopRatedsReducer,
  movieUpcomings: MovieUpcomingsReducer,
  tvAiringTodays: TVAiringTodaysReducer,
  tvOnTheAirs: TVOnTheAirsReducer,
  tvTopRateds: TVTopRatedsReducer,
  detailContent: DetailContentsReducer,
  trailerContent: TrailerContentsReducer,
});