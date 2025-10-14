import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchTrailer } from '@/features/common/trailerThunk';
import { fetchDiscoverMovie } from '@/features/common/discoverMovieThunk';
import { fetchReleaseDate } from '@/features/common/releaseDateThunk';
import { Trailer } from '@/features/common/trailerSlice';
import { DiscoverMovie } from '@/features/common/discoverMovieSlice';
import { ReleaseDate } from '@/features/common/releaseDateSlice';
import { HomeFeed } from './homeFeedSlice';

export const fetchHomeFeeds = createAsyncThunk<
	HomeFeed[],
	void,
	{ rejectValue: string }
>('home/fetchHomeFeeds', async (_, { rejectWithValue, dispatch }) => {
	try {
		const today = new Date();
		const startDate = new Date(today);
		const endDate = new Date(today);
		startDate.setDate(today.getDate());
		endDate.setMonth(today.getMonth() + 1);

		const params = [
			'language=ja-JP',
			'page=1',
			'certification_country=JP',
			'region=JP',
			`release_date.gte=${startDate}`,
			`release_date.lte=${endDate}`,
			'show_me=everything',
			// 'sort_by=primary_release_date.asc',
			'vote_average.gte=0',
			'vote_average.lte=10',
			'vote_count.gte=0',
			'watch_region=JP',
			'with_release_type=3',
			'with_runtime.gte=0',
			'with_runtime.lte=400'
		].join('&');

		const discoverMovieAction: DiscoverMovie[] = await dispatch(
			fetchDiscoverMovie(params)
		).unwrap();

		const feeds: HomeFeed[] = await Promise.all(
			discoverMovieAction.map(async discoverMovie => {
				const trailerAction: Trailer[] = await dispatch(
					fetchTrailer(discoverMovie.id)
				).unwrap();

				const releaseDateAction: ReleaseDate = await dispatch(
					fetchReleaseDate(discoverMovie.id)
				).unwrap();

				return {
					discover: discoverMovie,
					trailers: trailerAction,
					release_date_current: releaseDateAction
				};
			})
		);

		return feeds;
	} catch (err) {
		if (err instanceof Error) return rejectWithValue(err.message);

		return rejectWithValue('Network error');
	}
});
