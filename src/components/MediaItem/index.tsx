import { useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/app/store';
import { setBackgroundLocation } from '@/features/common/locationSlice';
import { Skeleton } from '@/components/Skeleton';
import './MediaItem.css';

interface Media {
	id: number;
	title?: string;
	name?: string;
	poster_path: string;
}

interface MediasProps {
	type: string;
	loading: boolean;
	medias: Media[];
}

export const MediaItem = ({ type, loading, medias }: MediasProps) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const backgroundLocation = useSelector(
		(state: RootState) => state.location.backgroundLocation
	);
	const handleNavClick = useCallback(() => {
		if (!backgroundLocation) return dispatch(setBackgroundLocation(location));
	}, [dispatch, backgroundLocation, location]);

	return (
		<>
			{medias.map(media => (
				<li className="media-item" key={media.id}>
					<NavLink
						className="media-link"
						to={`/Detail/${type}/${media.id}`}
						onClick={handleNavClick}
					>
						<figure className="media-fig">
							<Skeleton
								loading={loading}
								className="media-img"
								src={`https://image.tmdb.org/t/p/w200${media.poster_path}`}
								alt={media.title ? media.title : media.name}
							/>
						</figure>
						<div className="media-tit ellipsis-line2">
							<Skeleton
								loading={loading}
								text={media.title ? media.title : media.name}
							/>
						</div>
					</NavLink>
				</li>
			))}
		</>
	);
};
