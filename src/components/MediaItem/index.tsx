import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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

	return (
		<>
			{medias.map(media => (
				<li className="media-item" key={media.id}>
					<NavLink
						className="media-link"
						to={`/Detail/${type}/${media.id}`}
						onClick={() => dispatch(setBackgroundLocation(location))}
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
