import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from 'react-router-dom';

interface LocationState {
  backgroundLocation: Location | null;
}

const initialState: LocationState = {
  backgroundLocation: null,
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setBackgroundLocation(state, action: PayloadAction<Location>) {
      state.backgroundLocation = action.payload;
    },
    clearBackgroundLocation(state) {
      state.backgroundLocation = null;
    },
  },
});

export const { setBackgroundLocation, clearBackgroundLocation } = locationSlice.actions;
export const locationReducer = locationSlice.reducer;