import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export const store = configureStore({
	reducer: rootReducer
});

export function createStore(preloadedState?: RootState) {
	return configureStore({
		reducer: rootReducer,
		preloadedState
	});
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
