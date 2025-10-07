import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTMDB } from '@/api/tmdb';
import { DetailContent, Trailer, ReleaseResponse } from './trailerContentSlice';

export const fetchTrailerContents = createAsyncThunk(
	'trailer/fetchTrailerContents',
	async (id: string, { rejectWithValue }) => {
		try {
			const detailResponse: DetailContent = await fetchTMDB(
				`/movie/${id}?language=ja-JP`
			);

			let trailerContent: DetailContent;

			try {
				const trailerResponse: { results: Trailer[] } = await fetchTMDB(
					`/movie/${id}/videos?language=ja-JP`
				);
				const releaseResponse: ReleaseResponse = await fetchTMDB(
					`/movie/${id}/release_dates?`
				);
				const releaseJpResponse = releaseResponse.results.find(
					item => item.iso_3166_1 === 'JP'
				);
				const releaseTypeResponse = releaseJpResponse?.release_dates
					.filter(item => item.type === 3)
					.pop();
				const releaseCurrent = releaseTypeResponse?.release_date.split('T')[0];

				trailerContent = {
					...detailResponse,
					trailers: trailerResponse.results || [],
					release_date_current: releaseCurrent || ''
				};
			} catch (err: unknown) {
				return rejectWithValue(err);
			}

			return trailerContent;
		} catch (err: unknown) {
			if (err instanceof Error) {
				return rejectWithValue(err.message);
			}

			return rejectWithValue('Network error');
		}
	}
);
