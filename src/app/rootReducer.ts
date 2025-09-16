import { combineReducers } from '@reduxjs/toolkit';

import PopularMoviesReducer from '../features/populars/popularMovieSlice';
import PopularTVsReducer from '../features/populars/popularTVSlice';
import PopularPersonsReducer from '../features/populars/popularPersonSlice';
import MoviePlayingsReducer from '../features/movies/moviePlayingSlice';
import MovieRatesReducer from '../features/movies/movieRateSlice';
import MovieCommingsReducer from '../features/movies/movieCommingSlice';
import TVAiringTodaysReducer from '../features/tvs/tvAiringTodaySlice';
import TVOnTheAirsReducer from '../features/tvs/tvOnTheAirSlice';
import TVTopRatedsReducer from '../features/tvs/tvTopRatedSlice';
import DetailContentsReducer from '../features/detail/detailContentSlice';

const rootReducer = combineReducers({
  popularMovies: PopularMoviesReducer,
  popularTVs: PopularTVsReducer,
  popularPersons: PopularPersonsReducer,
  moviePlayings: MoviePlayingsReducer,
  movieRates: MovieRatesReducer,
  movieCommings: MovieCommingsReducer,
  tvAiringTodays: TVAiringTodaysReducer,
  tvOnTheAirs: TVOnTheAirsReducer,
  tvTopRateds: TVTopRatedsReducer,
  detailContent: DetailContentsReducer,
});

export default rootReducer;