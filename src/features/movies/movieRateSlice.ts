import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface MovieRate {
  id: number;
  title: string;
  poster_path: string;
};

interface MovieRatesState {
  items: MovieRate[];
  loading: boolean;
  error: string | null;
};

const initialState: MovieRatesState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchMovieRates = createAsyncThunk('movies/fetchMovieRate',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=ja-JP&page=1',
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZkMTliYzZjMTdjMWEwYmRjNjBiZmU3NDlkNjA3MyIsIm5iZiI6MTc1Njk3NjM4MC4yMjg5OTk5LCJzdWIiOiI2OGI5NTRmYzU1ZmY1NWI1ZTU4Y2RjYzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upYdoeXCbkJz1BBUhnYx0eTYrOPVITTwzNU7AuB0hcw',
          },
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.status_message || 'Failed to fetch');
      }
      
      const data = await res.json();

      return data.results as MovieRate[];

    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);

const MovieRatesSlice = createSlice({
  name: 'movieRates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieRates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieRates.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMovieRates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch movies';
      });
  },
});

export default MovieRatesSlice.reducer;