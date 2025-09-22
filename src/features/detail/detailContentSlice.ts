import { createSlice } from '@reduxjs/toolkit';

import fetchDetailContents from './detailContentThunk';

export interface DetailContent {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string;
  overview?: string;
};

interface DetailContentsState {
  item: DetailContent | null;
  loading: boolean;
  error: string | null;
};

const initialState: DetailContentsState = {
  item: null,
  loading: true,
  error: null,
};

const DetailContentsSlice = createSlice({
  name: 'movieContents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailContents.pending, (state) => {
        state.item = {
          id: 0,
          title: '',
          name: '',
          backdrop_path: '',
          overview: ''
        };
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDetailContents.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchDetailContents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch';
      });
  },
});

export default DetailContentsSlice.reducer;