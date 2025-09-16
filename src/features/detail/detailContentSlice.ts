import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface DetailContent {
  id: number;
  title: string;
  name: string;
  backdrop_path: string;
};

interface DetailContentsState {
  item: DetailContent | null;
  loading: boolean;
  error: string | null;
};

const initialState: DetailContentsState = {
  item: null,
  loading: false,
  error: null,
};

export const fetchDetailContents = createAsyncThunk('movies/fetchDetailContent',
  async ({type, id}: {type: string, id: string}, { rejectWithValue }) => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}?language=ja-JP`,
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

      return data as DetailContent;

    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue('Network error');
    }
  }
);

const DetailContentsSlice = createSlice({
  name: 'movieContents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailContents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDetailContents.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchDetailContents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch movies';
      });
  },
});

export default DetailContentsSlice.reducer;