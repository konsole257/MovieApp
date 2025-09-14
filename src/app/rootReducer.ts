import { combineReducers } from '@reduxjs/toolkit';

import PopularMoviesReducer from '../features/populars/popularMovieSlice';
import PopularTVsReducer from '../features/populars/popularTVSlice';
import PopularPersonsReducer from '../features/populars/popularPersonSlice';
import MovieNowsReducer from '../features/movies/movieNowSlice';
import MovieTopsReducer from '../features/movies/movieTopSlice';
import MovieUpsReducer from '../features/movies/movieUpSlice';
import TvAiringTodaysReducer from '../features/tvs/tvAiringTodaySlice';
import TvOnTheAirsReducer from '../features/tvs/tvOnTheAirSlice';
import TvTopsReducer from '../features/tvs/tvTopSlice';

const rootReducer = combineReducers({
  popularMovies: PopularMoviesReducer,
  popularTVs: PopularTVsReducer,
  popularPersons: PopularPersonsReducer,
  movieNows: MovieNowsReducer,
  movieTops: MovieTopsReducer,
  movieUps: MovieUpsReducer,
  tvAiringTodays: TvAiringTodaysReducer,
  tvOnTheAirs: TvOnTheAirsReducer,
  tvTops: TvTopsReducer,
});

export default rootReducer;