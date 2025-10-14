import { useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { setBackgroundLocation } from '@/features/common/locationSlice';
import { Skeleton } from '@/components/Skeleton';
import { useHomeFeed } from './useHomeFeed';
import './homeFeed.css';

export const HomeFeed = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const { homeFeeds, loading, error } = useHomeFeed();
	const handleNavClick = useCallback(() => {
		dispatch(setBackgroundLocation(location));
	}, [dispatch, location]);

	// if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<>
			{homeFeeds.map(homeFeed => {
				const isPlayable = homeFeed.trailers.length > 0;

				return (
					<div
						key={homeFeed.discover.id}
						className={`feed-div ${isPlayable ? 'playable' : ''}`}
					>
						<motion.div
							layoutId={`feed-${homeFeed.discover.id}`}
							transition={{ duration: 0.3 }}
							className="motion-div"
						>
							<NavLink
								className="feed-link"
								state={{ trailer: homeFeed }}
								to={`${isPlayable ? '/Trailer/' : `/Detail/movie/`}${homeFeed.discover.id}`}
								onClick={handleNavClick}
							>
								<figure className="feed-fig">
									<Skeleton
										loading={loading}
										className="feed-img"
										src={`https://image.tmdb.org/t/p/w1280${homeFeed.discover.backdrop_path}`}
										alt={homeFeed.discover.title}
									/>
								</figure>
							</NavLink>
						</motion.div>

						<div className="feed-info">
							<NavLink
								to={`/Detail/movie/${homeFeed.discover.id}`}
								onClick={handleNavClick}
							>
								<div className="feed-tit ellipsis-line2">
									<Skeleton loading={loading} text={homeFeed.discover.title} />
								</div>
								<div className="feed-date ellipsis-line">
									<Skeleton
										loading={loading}
										text={`公開日 ${homeFeed.release_date_current.latest}`}
									/>
								</div>
								<div className="feed-detail">
									<Skeleton loading={loading} text="詳細を見る &gt;" />
								</div>
							</NavLink>
						</div>
					</div>
				);
			})}
		</>
	);
};
