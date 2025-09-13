import { configureStore } from '@reduxjs/toolkit';
import PopularMoviesReducer from "../features/populars/popularMovieSlice";
import PopularTVsReducer from "../features/populars/popularTVSlice";
import PopularPersonsReducer from "../features/populars/popularPersonSlice";
import MovieNowsReducer from "../features/movies/movieNowSlice";
import MovieTopsReducer from "../features/movies/movieTopSlice";
import MovieUpsReducer from "../features/movies/movieUpSlice";
import TvAiringTodaysReducer from "../features/tvs/tvAiringTodaySlice";
import TvOnTheAirsReducer from "../features/tvs/tvOnTheAirSlice";
import TvTopsReducer from "../features/tvs/tvTopSlice";

export const store = configureStore({
  reducer: {
    popularMovies: PopularMoviesReducer,
    popularTVs: PopularTVsReducer,
    popularPersons: PopularPersonsReducer,
    movieNows: MovieNowsReducer,
    movieTops: MovieTopsReducer,
    movieUps: MovieUpsReducer,
    tvAiringTodays: TvAiringTodaysReducer,
    tvOnTheAirs: TvOnTheAirsReducer,
    tvTops: TvTopsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

