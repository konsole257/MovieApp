import { createSlice } from '@reduxjs/toolkit';

import fetchPopularPersons from './popularPersonThunk';

export interface PopularPerson {
  id: number;
  name: string;
  profile_path: string;
}

interface PopularPersonState {
  items: PopularPerson[];
  loading: boolean;
  error: string | null;
}

const initialState: PopularPersonState = {
  items: Array.from({length: 11}, (_, i) => ({
      id: i,
      name: '',
      profile_path: ''
    })),
  loading: true,
  error: null,
};

const PopularPersonsSlice = createSlice({
  name: 'popularPersons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularPersons.pending, (state) => {
        state.items = Array.from({length: 11}, (_, i) => ({
          id: i,
          name: '',
          profile_path: ''
        }));
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularPersons.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPopularPersons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch';
      });
  },
});

export default PopularPersonsSlice.reducer;