import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { useDispatch, useSelector, Provider } from "react-redux";
import { createAsyncThunk, createSlice, configureStore } from "@reduxjs/toolkit";
import { useLocation, NavLink, Outlet, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const initialState$8 = {
  items: [],
  loading: false,
  error: null
};
const fetchPopularMovies = createAsyncThunk(
  "populars/fetchPopularMovie",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=ja-JP&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZkMTliYzZjMTdjMWEwYmRjNjBiZmU3NDlkNjA3MyIsIm5iZiI6MTc1Njk3NjM4MC4yMjg5OTk5LCJzdWIiOiI2OGI5NTRmYzU1ZmY1NWI1ZTU4Y2RjYzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upYdoeXCbkJz1BBUhnYx0eTYrOPVITTwzNU7AuB0hcw"
          }
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.status_message || "Failed to fetch");
      }
      const data = await res.json();
      return data.results;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Network error");
    }
  }
);
const PopularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: initialState$8,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchPopularMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    }).addCase(fetchPopularMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message || "Failed to fetch movies";
    });
  }
});
const PopularMoviesReducer = PopularMoviesSlice.reducer;
const initialState$7 = {
  items: [],
  loading: false,
  error: null
};
const fetchPopularTVs = createAsyncThunk(
  "populars/fetchPopularTV",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=ja-JP&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZkMTliYzZjMTdjMWEwYmRjNjBiZmU3NDlkNjA3MyIsIm5iZiI6MTc1Njk3NjM4MC4yMjg5OTk5LCJzdWIiOiI2OGI5NTRmYzU1ZmY1NWI1ZTU4Y2RjYzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upYdoeXCbkJz1BBUhnYx0eTYrOPVITTwzNU7AuB0hcw"
          }
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.status_message || "Failed to fetch");
      }
      const data = await res.json();
      return data.results;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Network error");
    }
  }
);
const PopularTVsSlice = createSlice({
  name: "popularTVs",
  initialState: initialState$7,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularTVs.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchPopularTVs.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    }).addCase(fetchPopularTVs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message || "Failed to fetch movies";
    });
  }
});
const PopularTVsReducer = PopularTVsSlice.reducer;
const initialState$6 = {
  items: [],
  loading: false,
  error: null
};
const fetchPopularPersons = createAsyncThunk(
  "populars/fetchPopularPerson",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/person/popular?language=ja-JP&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZkMTliYzZjMTdjMWEwYmRjNjBiZmU3NDlkNjA3MyIsIm5iZiI6MTc1Njk3NjM4MC4yMjg5OTk5LCJzdWIiOiI2OGI5NTRmYzU1ZmY1NWI1ZTU4Y2RjYzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upYdoeXCbkJz1BBUhnYx0eTYrOPVITTwzNU7AuB0hcw"
          }
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.status_message || "Failed to fetch");
      }
      const data = await res.json();
      return data.results;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Network error");
    }
  }
);
const PopularPersonsSlice = createSlice({
  name: "popularPersons",
  initialState: initialState$6,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularPersons.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchPopularPersons.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    }).addCase(fetchPopularPersons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message || "Failed to fetch movies";
    });
  }
});
const PopularPersonsReducer = PopularPersonsSlice.reducer;
const initialState$5 = {
  items: [],
  loading: false,
  error: null
};
const fetchMovieNows = createAsyncThunk(
  "movies/fetchMovieNow",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=ja-JP&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZkMTliYzZjMTdjMWEwYmRjNjBiZmU3NDlkNjA3MyIsIm5iZiI6MTc1Njk3NjM4MC4yMjg5OTk5LCJzdWIiOiI2OGI5NTRmYzU1ZmY1NWI1ZTU4Y2RjYzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upYdoeXCbkJz1BBUhnYx0eTYrOPVITTwzNU7AuB0hcw"
          }
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.status_message || "Failed to fetch");
      }
      const data = await res.json();
      return data.results;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Network error");
    }
  }
);
const MovieNowsSlice = createSlice({
  name: "movieNows",
  initialState: initialState$5,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieNows.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchMovieNows.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    }).addCase(fetchMovieNows.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message || "Failed to fetch movies";
    });
  }
});
const MovieNowsReducer = MovieNowsSlice.reducer;
const initialState$4 = {
  items: [],
  loading: false,
  error: null
};
const fetchMovieTops = createAsyncThunk(
  "movies/fetchMovieTop",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=ja-JP&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZkMTliYzZjMTdjMWEwYmRjNjBiZmU3NDlkNjA3MyIsIm5iZiI6MTc1Njk3NjM4MC4yMjg5OTk5LCJzdWIiOiI2OGI5NTRmYzU1ZmY1NWI1ZTU4Y2RjYzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upYdoeXCbkJz1BBUhnYx0eTYrOPVITTwzNU7AuB0hcw"
          }
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.status_message || "Failed to fetch");
      }
      const data = await res.json();
      return data.results;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Network error");
    }
  }
);
const MovieTopsSlice = createSlice({
  name: "movieTops",
  initialState: initialState$4,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieTops.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchMovieTops.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    }).addCase(fetchMovieTops.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message || "Failed to fetch movies";
    });
  }
});
const MovieTopsReducer = MovieTopsSlice.reducer;
const initialState$3 = {
  items: [],
  loading: false,
  error: null
};
const fetchMovieUps = createAsyncThunk(
  "movies/fetchMovieUp",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=ja-JP&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZkMTliYzZjMTdjMWEwYmRjNjBiZmU3NDlkNjA3MyIsIm5iZiI6MTc1Njk3NjM4MC4yMjg5OTk5LCJzdWIiOiI2OGI5NTRmYzU1ZmY1NWI1ZTU4Y2RjYzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upYdoeXCbkJz1BBUhnYx0eTYrOPVITTwzNU7AuB0hcw"
          }
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.status_message || "Failed to fetch");
      }
      const data = await res.json();
      return data.results;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Network error");
    }
  }
);
const MovieUpsSlice = createSlice({
  name: "movieUps",
  initialState: initialState$3,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieUps.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchMovieUps.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    }).addCase(fetchMovieUps.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message || "Failed to fetch movies";
    });
  }
});
const MovieUpsReducer = MovieUpsSlice.reducer;
const initialState$2 = {
  items: [],
  loading: false,
  error: null
};
const fetchTVAiringTodays = createAsyncThunk(
  "tvs/fetchTVAiringToday",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/tv/airing_today?language=ja-JP&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZkMTliYzZjMTdjMWEwYmRjNjBiZmU3NDlkNjA3MyIsIm5iZiI6MTc1Njk3NjM4MC4yMjg5OTk5LCJzdWIiOiI2OGI5NTRmYzU1ZmY1NWI1ZTU4Y2RjYzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upYdoeXCbkJz1BBUhnYx0eTYrOPVITTwzNU7AuB0hcw"
          }
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.status_message || "Failed to fetch");
      }
      const data = await res.json();
      return data.results;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Network error");
    }
  }
);
const TVAiringTodaysSlice = createSlice({
  name: "tvAiringTodays",
  initialState: initialState$2,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTVAiringTodays.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchTVAiringTodays.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    }).addCase(fetchTVAiringTodays.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message || "Failed to fetch movies";
    });
  }
});
const TvAiringTodaysReducer = TVAiringTodaysSlice.reducer;
const initialState$1 = {
  items: [],
  loading: false,
  error: null
};
const fetchTVOnTheAirs = createAsyncThunk(
  "tvs/fetchTVOnTheAir",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?language=ja-JP&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZkMTliYzZjMTdjMWEwYmRjNjBiZmU3NDlkNjA3MyIsIm5iZiI6MTc1Njk3NjM4MC4yMjg5OTk5LCJzdWIiOiI2OGI5NTRmYzU1ZmY1NWI1ZTU4Y2RjYzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upYdoeXCbkJz1BBUhnYx0eTYrOPVITTwzNU7AuB0hcw"
          }
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.status_message || "Failed to fetch");
      }
      const data = await res.json();
      return data.results;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Network error");
    }
  }
);
const TVOnTheAirsSlice = createSlice({
  name: "tvOnTheAirs",
  initialState: initialState$1,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTVOnTheAirs.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchTVOnTheAirs.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    }).addCase(fetchTVOnTheAirs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message || "Failed to fetch movies";
    });
  }
});
const TvOnTheAirsReducer = TVOnTheAirsSlice.reducer;
const initialState = {
  items: [],
  loading: false,
  error: null
};
const fetchTVTops = createAsyncThunk(
  "tvs/fetchTVTop",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?language=ja-JP&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZkMTliYzZjMTdjMWEwYmRjNjBiZmU3NDlkNjA3MyIsIm5iZiI6MTc1Njk3NjM4MC4yMjg5OTk5LCJzdWIiOiI2OGI5NTRmYzU1ZmY1NWI1ZTU4Y2RjYzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upYdoeXCbkJz1BBUhnYx0eTYrOPVITTwzNU7AuB0hcw"
          }
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.status_message || "Failed to fetch");
      }
      const data = await res.json();
      return data.results;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("Network error");
    }
  }
);
const TVTopsSlice = createSlice({
  name: "tvTops",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTVTops.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchTVTops.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    }).addCase(fetchTVTops.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message || "Failed to fetch movies";
    });
  }
});
const TvTopsReducer = TVTopsSlice.reducer;
const store = configureStore({
  reducer: {
    popularMovies: PopularMoviesReducer,
    popularTVs: PopularTVsReducer,
    popularPersons: PopularPersonsReducer,
    movieNows: MovieNowsReducer,
    movieTops: MovieTopsReducer,
    movieUps: MovieUpsReducer,
    tvAiringTodays: TvAiringTodaysReducer,
    tvOnTheAirs: TvOnTheAirsReducer,
    tvTops: TvTopsReducer
  }
});
const BottomNav = () => {
  const location = useLocation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("nav", { id: "bottomnav", children: [
      /* @__PURE__ */ jsx("h2", { className: "hidden", children: "下部メニュー" }),
      /* @__PURE__ */ jsxs("ul", { className: "nav-list", children: [
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxs(NavLink, { className: `nav-link  ${location.pathname.includes("/Movie") || location.pathname.includes("/TV") ? "active" : ""}`, to: "/", children: [
          /* @__PURE__ */ jsx("i", { className: "icon-home" }),
          /* @__PURE__ */ jsx("span", { className: "hidden", children: "Home" })
        ] }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxs(NavLink, { className: `nav-link`, to: "/Favorite", children: [
          /* @__PURE__ */ jsx("i", { className: "icon-favorite" }),
          /* @__PURE__ */ jsx("span", { className: "hidden", children: "Favorite" })
        ] }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxs(NavLink, { className: `nav-link`, to: "/Search", children: [
          /* @__PURE__ */ jsx("i", { className: "icon-search" }),
          /* @__PURE__ */ jsx("span", { className: "hidden", children: "Search" })
        ] }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxs(NavLink, { className: `nav-link`, to: "/Mypage", children: [
          /* @__PURE__ */ jsx("i", { className: "icon-mypage" }),
          /* @__PURE__ */ jsx("span", { className: "hidden", children: "Mypage" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { id: "bottomnav-end" })
  ] });
};
const Detail = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "page-wrapper", children: /* @__PURE__ */ jsxs("div", { className: "page detail", children: [
    /* @__PURE__ */ jsx("h1", { className: "page-tit", children: "Detail" }),
    /* @__PURE__ */ jsx("header", { className: "page-header", children: /* @__PURE__ */ jsxs(NavLink, { className: "btn-back", to: "/", children: [
      /* @__PURE__ */ jsx("i", { className: "icon-arrow" }),
      /* @__PURE__ */ jsx("span", { className: "hidden", children: "戻る" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "page-cotents", children: [
      /* @__PURE__ */ jsx("figure", { className: "cover-fig", children: /* @__PURE__ */ jsx("img", { className: "cover-img", src: "/images/temp/detail@2x.png", alt: "" }) }),
      /* @__PURE__ */ jsx("figure", { className: "cover-fig", children: /* @__PURE__ */ jsx("img", { className: "cover-img", src: "/images/temp/detail@2x.png", alt: "" }) }),
      /* @__PURE__ */ jsx("figure", { className: "cover-fig", children: /* @__PURE__ */ jsx("img", { className: "cover-img", src: "/images/temp/detail@2x.png", alt: "" }) }),
      /* @__PURE__ */ jsx("figure", { className: "cover-fig", children: /* @__PURE__ */ jsx("img", { className: "cover-img", src: "/images/temp/detail@2x.png", alt: "" }) })
    ] })
  ] }) }) });
};
const Layout = () => {
  const location = useLocation();
  const showDetail = location.pathname.includes("/Detail");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("main", { id: "main", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx("hr", { id: "main-end" }),
    /* @__PURE__ */ jsx(BottomNav, {}),
    /* @__PURE__ */ jsx(AnimatePresence, { children: showDetail && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { duration: 0.3 },
        className: "page-overlay",
        children: /* @__PURE__ */ jsx(Detail, {})
      },
      location.pathname
    ) })
  ] });
};
const PopularMovies = () => {
  const dispatch = useDispatch();
  const { items: popularMovies, loading, error } = useSelector(
    (state) => state.popularMovies
  );
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);
  if (loading) return /* @__PURE__ */ jsx("p", { children: "Loading movies..." });
  if (error) return /* @__PURE__ */ jsxs("p", { children: [
    "Error: ",
    error
  ] });
  return /* @__PURE__ */ jsx(Fragment, { children: popularMovies.map((popularMovie) => /* @__PURE__ */ jsx("li", { className: "movie-item", children: /* @__PURE__ */ jsx(NavLink, { className: "movie-link", to: "/Popular/Detail", children: /* @__PURE__ */ jsx("img", { className: "movie-img", loading: "lazy", src: `https://image.tmdb.org/t/p/w200${popularMovie.poster_path}`, alt: popularMovie.title }) }) }, popularMovie.id)) });
};
const PopularTVs = () => {
  const dispatch = useDispatch();
  const { items: popularTVs, loading, error } = useSelector(
    (state) => state.popularTVs
  );
  useEffect(() => {
    dispatch(fetchPopularTVs());
  }, [dispatch]);
  if (loading) return /* @__PURE__ */ jsx("p", { children: "Loading movies..." });
  if (error) return /* @__PURE__ */ jsxs("p", { children: [
    "Error: ",
    error
  ] });
  return /* @__PURE__ */ jsx(Fragment, { children: popularTVs.map((popularTV) => /* @__PURE__ */ jsx("li", { className: "movie-item", children: /* @__PURE__ */ jsx(NavLink, { className: "movie-link", to: "/Popular/Detail", children: /* @__PURE__ */ jsx("img", { className: "movie-img", loading: "lazy", src: `https://image.tmdb.org/t/p/w200${popularTV.poster_path}`, alt: popularTV.title }) }) }, popularTV.id)) });
};
const PopularPersons = () => {
  const dispatch = useDispatch();
  const { items: popularPersons, loading, error } = useSelector(
    (state) => state.popularPersons
  );
  useEffect(() => {
    dispatch(fetchPopularPersons());
  }, [dispatch]);
  if (loading) return /* @__PURE__ */ jsx("p", { children: "Loading movies..." });
  if (error) return /* @__PURE__ */ jsxs("p", { children: [
    "Error: ",
    error
  ] });
  return /* @__PURE__ */ jsx(Fragment, { children: popularPersons.map((popularPerson) => /* @__PURE__ */ jsx("li", { className: "person-item", children: /* @__PURE__ */ jsxs(NavLink, { className: "person-link", to: "/Popular/Detail", children: [
    /* @__PURE__ */ jsx("figure", { className: "person-fig", children: /* @__PURE__ */ jsx("img", { className: "person-img", loading: "lazy", src: `https://image.tmdb.org/t/p/w200${popularPerson.profile_path}`, alt: popularPerson.name }) }),
    /* @__PURE__ */ jsx("div", { className: "person-name", children: popularPerson.name })
  ] }) }, popularPerson.id)) });
};
const Home$2 = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "page home", children: [
    /* @__PURE__ */ jsx("h1", { className: "page-tit", children: "Home" }),
    /* @__PURE__ */ jsxs("ul", { className: "tab-list", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { className: "tab-link", to: "/", children: "Popular" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { className: "tab-link", to: "/Movie", children: "Movie" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { className: "tab-link", to: "/TV", children: "TV Show" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "visual", children: [
      /* @__PURE__ */ jsx("img", { className: "visual-img", src: "/images/temp/screen@2x.png", alt: "" }),
      /* @__PURE__ */ jsx("div", { className: "visual-txt", children: "Wanda Vision" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "block movie", children: [
      /* @__PURE__ */ jsx("h2", { className: "block-tit movie-tit", children: "Movies" }),
      /* @__PURE__ */ jsx("ul", { className: "movie-list", children: /* @__PURE__ */ jsx(PopularMovies, {}) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "block tv", children: [
      /* @__PURE__ */ jsx("h2", { className: "block-tit tv-tit", children: "TV Show" }),
      /* @__PURE__ */ jsx("ul", { className: "tv-list", children: /* @__PURE__ */ jsx(PopularTVs, {}) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "block person", children: [
      /* @__PURE__ */ jsx("h2", { className: "block-tit person-tit", children: "Person" }),
      /* @__PURE__ */ jsx("ul", { className: "person-list", children: /* @__PURE__ */ jsx(PopularPersons, {}) })
    ] })
  ] }) });
};
const MovieNows = () => {
  const dispatch = useDispatch();
  const { items: movieNows, loading, error } = useSelector(
    (state) => state.movieNows
  );
  useEffect(() => {
    dispatch(fetchMovieNows());
  }, [dispatch]);
  if (loading) return /* @__PURE__ */ jsx("p", { children: "Loading movies..." });
  if (error) return /* @__PURE__ */ jsxs("p", { children: [
    "Error: ",
    error
  ] });
  return /* @__PURE__ */ jsx(Fragment, { children: movieNows.map((movieNow) => /* @__PURE__ */ jsx("li", { className: "movie-item", children: /* @__PURE__ */ jsx(NavLink, { className: "movie-link", to: "/Detail", children: /* @__PURE__ */ jsx("img", { className: "movie-img", loading: "lazy", src: `https://image.tmdb.org/t/p/w200${movieNow.poster_path}`, alt: movieNow.title }) }) }, movieNow.id)) });
};
const MovieTops = () => {
  const dispatch = useDispatch();
  const { items: movieTops, loading, error } = useSelector(
    (state) => state.movieTops
  );
  useEffect(() => {
    dispatch(fetchMovieTops());
  }, [dispatch]);
  if (loading) return /* @__PURE__ */ jsx("p", { children: "Loading movies..." });
  if (error) return /* @__PURE__ */ jsxs("p", { children: [
    "Error: ",
    error
  ] });
  return /* @__PURE__ */ jsx(Fragment, { children: movieTops.map((movieTop) => /* @__PURE__ */ jsx("li", { className: "movie-item", children: /* @__PURE__ */ jsx(NavLink, { className: "movie-link", to: "/Detail", children: /* @__PURE__ */ jsx("img", { className: "movie-img", loading: "lazy", src: `https://image.tmdb.org/t/p/w200${movieTop.poster_path}`, alt: movieTop.title }) }) }, movieTop.id)) });
};
const MovieUps = () => {
  const dispatch = useDispatch();
  const { items: movieUps, loading, error } = useSelector(
    (state) => state.movieUps
  );
  useEffect(() => {
    dispatch(fetchMovieUps());
  }, [dispatch]);
  if (loading) return /* @__PURE__ */ jsx("p", { children: "Loading movies..." });
  if (error) return /* @__PURE__ */ jsxs("p", { children: [
    "Error: ",
    error
  ] });
  return /* @__PURE__ */ jsx(Fragment, { children: movieUps.map((movieUp) => /* @__PURE__ */ jsx("li", { className: "movie-item", children: /* @__PURE__ */ jsx(NavLink, { className: "movie-link", to: "/Detail", children: /* @__PURE__ */ jsx("img", { className: "movie-img", loading: "lazy", src: `https://image.tmdb.org/t/p/w200${movieUp.poster_path}`, alt: movieUp.title }) }) }, movieUp.id)) });
};
const Home$1 = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "page home", children: [
    /* @__PURE__ */ jsx("h1", { className: "page-tit", children: "Home" }),
    /* @__PURE__ */ jsxs("ul", { className: "tab-list", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { className: "tab-link", to: "/", children: "Popular" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { className: "tab-link", to: "/Movie", children: "Movie" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { className: "tab-link", to: "/TV", children: "TV Show" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "visual", children: [
      /* @__PURE__ */ jsx("img", { className: "visual-img", src: "/images/temp/screen@2x.png", alt: "" }),
      /* @__PURE__ */ jsx("div", { className: "visual-txt", children: "Wanda Vision" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "block movie", children: [
      /* @__PURE__ */ jsx("h2", { className: "block-tit movie-tit", children: "Now Playing" }),
      /* @__PURE__ */ jsx("ul", { className: "movie-list", children: /* @__PURE__ */ jsx(MovieNows, {}) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "block movie", children: [
      /* @__PURE__ */ jsx("h2", { className: "block-tit movie-tit", children: "Top Rated" }),
      /* @__PURE__ */ jsx("ul", { className: "movie-list", children: /* @__PURE__ */ jsx(MovieTops, {}) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "block movie", children: [
      /* @__PURE__ */ jsx("h2", { className: "block-tit movie-tit", children: "Upcoming" }),
      /* @__PURE__ */ jsx("ul", { className: "movie-list", children: /* @__PURE__ */ jsx(MovieUps, {}) })
    ] })
  ] }) });
};
const TVAiringTodays = () => {
  const dispatch = useDispatch();
  const { items: tvAiringTodays, loading, error } = useSelector(
    (state) => state.tvAiringTodays
  );
  useEffect(() => {
    dispatch(fetchTVAiringTodays());
  }, [dispatch]);
  if (loading) return /* @__PURE__ */ jsx("p", { children: "Loading movies..." });
  if (error) return /* @__PURE__ */ jsxs("p", { children: [
    "Error: ",
    error
  ] });
  return /* @__PURE__ */ jsx(Fragment, { children: tvAiringTodays.map((tvAiringToday) => /* @__PURE__ */ jsx("li", { className: "movie-item", children: /* @__PURE__ */ jsx(NavLink, { className: "movie-link", to: "/Detail", children: /* @__PURE__ */ jsx("img", { className: "movie-img", loading: "lazy", src: `https://image.tmdb.org/t/p/w200${tvAiringToday.poster_path}`, alt: tvAiringToday.title }) }) }, tvAiringToday.id)) });
};
const TVOnTheAirs = () => {
  const dispatch = useDispatch();
  const { items: tvOnTheAirs, loading, error } = useSelector(
    (state) => state.tvOnTheAirs
  );
  useEffect(() => {
    dispatch(fetchTVOnTheAirs());
  }, [dispatch]);
  if (loading) return /* @__PURE__ */ jsx("p", { children: "Loading movies..." });
  if (error) return /* @__PURE__ */ jsxs("p", { children: [
    "Error: ",
    error
  ] });
  return /* @__PURE__ */ jsx(Fragment, { children: tvOnTheAirs.map((tvOnTheAir) => /* @__PURE__ */ jsx("li", { className: "movie-item", children: /* @__PURE__ */ jsx(NavLink, { className: "movie-link", to: "/Detail", children: /* @__PURE__ */ jsx("img", { className: "movie-img", loading: "lazy", src: `https://image.tmdb.org/t/p/w200${tvOnTheAir.poster_path}`, alt: tvOnTheAir.title }) }) }, tvOnTheAir.id)) });
};
const TVTops = () => {
  const dispatch = useDispatch();
  const { items: tvTops, loading, error } = useSelector(
    (state) => state.tvTops
  );
  useEffect(() => {
    dispatch(fetchTVTops());
  }, [dispatch]);
  if (loading) return /* @__PURE__ */ jsx("p", { children: "Loading movies..." });
  if (error) return /* @__PURE__ */ jsxs("p", { children: [
    "Error: ",
    error
  ] });
  return /* @__PURE__ */ jsx(Fragment, { children: tvTops.map((tvTop) => /* @__PURE__ */ jsx("li", { className: "movie-item", children: /* @__PURE__ */ jsx(NavLink, { className: "movie-link", to: "/Detail", children: /* @__PURE__ */ jsx("img", { className: "movie-img", loading: "lazy", src: `https://image.tmdb.org/t/p/w200${tvTop.poster_path}`, alt: tvTop.title }) }) }, tvTop.id)) });
};
const Home = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "page home", children: [
    /* @__PURE__ */ jsx("h1", { className: "page-tit", children: "Home" }),
    /* @__PURE__ */ jsxs("ul", { className: "tab-list", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { className: "tab-link", to: "/", children: "Popular" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { className: "tab-link", to: "/Movie", children: "Movie" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { className: "tab-link", to: "/TV", children: "TV Show" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "visual", children: [
      /* @__PURE__ */ jsx("img", { className: "visual-img", src: "/images/temp/screen@2x.png", alt: "" }),
      /* @__PURE__ */ jsx("div", { className: "visual-txt", children: "Wanda Vision" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "block movie", children: [
      /* @__PURE__ */ jsx("h2", { className: "block-tit movie-tit", children: "Airing Todays" }),
      /* @__PURE__ */ jsx("ul", { className: "movie-list", children: /* @__PURE__ */ jsx(TVAiringTodays, {}) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "block movie", children: [
      /* @__PURE__ */ jsx("h2", { className: "block-tit movie-tit", children: "On The Airs" }),
      /* @__PURE__ */ jsx("ul", { className: "movie-list", children: /* @__PURE__ */ jsx(TVOnTheAirs, {}) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "block movie", children: [
      /* @__PURE__ */ jsx("h2", { className: "block-tit movie-tit", children: "Top Rated" }),
      /* @__PURE__ */ jsx("ul", { className: "movie-list", children: /* @__PURE__ */ jsx(TVTops, {}) })
    ] })
  ] }) });
};
const Favorite = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("h1", { children: "Favorite" }) });
};
const Search = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("h1", { children: "Search" }) });
};
const Mypage = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("h1", { children: "Mypage" }) });
};
const AppRouter = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, { element: /* @__PURE__ */ jsx(Layout, {}), children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home$2, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/Popular", element: /* @__PURE__ */ jsx(Home$2, {}), children: /* @__PURE__ */ jsx(Route, { path: "Detail", element: /* @__PURE__ */ jsx(Detail, {}) }) }),
    /* @__PURE__ */ jsx(Route, { path: "/Movie", element: /* @__PURE__ */ jsx(Home$1, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/TV", element: /* @__PURE__ */ jsx(Home, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/Favorite", element: /* @__PURE__ */ jsx(Favorite, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/Search", element: /* @__PURE__ */ jsx(Search, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/Mypage", element: /* @__PURE__ */ jsx(Mypage, {}) })
  ] }) }) });
};
const App = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(AppRouter, {}) });
};
function render(_url) {
  const html = renderToString(
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(StaticRouter, { location: _url, children: /* @__PURE__ */ jsx(App, {}) }) }) })
  );
  return {
    html
    // head:`<style>${Init}</style>`
  };
}
export {
  render
};
