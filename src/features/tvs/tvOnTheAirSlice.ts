import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface TVOnTheAir {
  id: number;
  title: string;
  poster_path: string;
};

interface TVOnTheAirsState {
  items: TVOnTheAir[];
  loading: boolean;
  error: string | null;
};

const initialState: TVOnTheAirsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchTVOnTheAirs = createAsyncThunk('tvs/fetchTVOnTheAir',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=ja-JP&page=1',
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

      return data.results as TVOnTheAir[];

    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);

const TVOnTheAirsSlice = createSlice({
  name: 'tvOnTheAirs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTVOnTheAirs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTVOnTheAirs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTVOnTheAirs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch movies';
      });
  },
});

export default TVOnTheAirsSlice.reducer;