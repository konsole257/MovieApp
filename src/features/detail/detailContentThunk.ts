import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchDetails } from '@/features/common/detailsThunk';
import { fetchCredits } from '@/features/common/creditsThunk';
import { fetchReleaseDate } from '@/features/common/releaseDateThunk';
import { Detail } from '@/features/common/detailsSlice';
import { Credits } from '@/features/common/creditsSlice';
import { Details } from './detailContentSlice';

export const fetchDetailContents = createAsyncThunk<
	Details,
	{ type: string; id: string },
	{ rejectValue: string }
>(
	'detail/fetchDetailContent',
	async (
		{ type, id }: { type: string; id: string },
		{ rejectWithValue, dispatch }
	) => {
		try {
			const detailsAction: Detail = await dispatch(
				fetchDetails({ type, id })
			).unwrap();

			const creditsAction: Credits = await dispatch(
				fetchCredits({ type, id })
			).unwrap();

			const releaseDateAction: string = await dispatch(
				fetchReleaseDate(id)
			).unwrap();

			return {
				details: detailsAction,
				credits: creditsAction,
				release_date_latest: releaseDateAction
			};
		} catch (err: unknown) {
			if (err instanceof Error) {
				return rejectWithValue(err.message);
			}

			return rejectWithValue('Network error');
		}
	}
);
