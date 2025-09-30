import { combineReducers } from '@reduxjs/toolkit';

import { locationReducer } from '@/features/location/locationSlice';
import { homeFeedsReducer } from '@/features/home/homeFeedSlice';
import { detailContentsReducer } from '@/features/detail/detailContentSlice';
import { trailerContentsReducer } from '@/features/trailer/trailerContentSlice';

import { PopularMoviesReducer } from '@/features/populars/popularMovieSlice';
import { PopularTVsReducer } from '@/features/populars/popularTVSlice';
import { PopularPersonsReducer } from '@/features/populars/popularPersonSlice';
import { MovieNowPlayingsReducer } from '@/features/movies/movieNowPlayingSlice';
import { MovieTopRatedsReducer } from '@/features/movies/movieTopRatedSlice';
import { MovieUpcomingsReducer } from '@/features/movies/movieUpcomingSlice';
import { TVAiringTodaysReducer } from '@/features/tvs/tvAiringTodaySlice';
import { TVOnTheAirsReducer } from '@/features/tvs/tvOnTheAirSlice';
import { TVTopRatedsReducer } from '@/features/tvs/tvTopRatedSlice';

export const rootReducer = combineReducers({
  location: locationReducer,
  homeFeeds: homeFeedsReducer,
  detailContent: detailContentsReducer,
  trailerContent: trailerContentsReducer,
  
  popularMovies: PopularMoviesReducer,
  popularTVs: PopularTVsReducer,
  popularPersons: PopularPersonsReducer,
  movieNowPlayings: MovieNowPlayingsReducer,
  movieTopRateds: MovieTopRatedsReducer,
  movieUpcomings: MovieUpcomingsReducer,
  tvAiringTodays: TVAiringTodaysReducer,
  tvOnTheAirs: TVOnTheAirsReducer,
  tvTopRateds: TVTopRatedsReducer,
});