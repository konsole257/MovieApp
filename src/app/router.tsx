import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import { RootState } from '@/app/store';
import { Layout } from '@/layouts/Layout';
import { clearBackgroundLocation } from '@/features/location/locationSlice';
import { Home } from '@/pages/Home';
import { HomeMovie } from '@/pages/HomeMovie';
import { HomeTV } from '@/pages/HomeTV';
import { Detail } from '@/pages/Detail';
import { Trailer } from '@/pages/Trailer';
import { Favorite } from '@/pages/Favorite';
import { Search } from '@/pages/Search';
import { Mypage } from '@/pages/Mypage';

export const AppRouter = () => {
	const location = useLocation();
	const pathname = location.pathname;
	const dispatch = useDispatch();
	const backgroundLocation = useSelector(
		(state: RootState) => state.location.backgroundLocation
	);
	const isTrailer = pathname.includes('/Trailer');
	const isDetail = pathname.includes('/Detail');

	useEffect(() => {
		if (!pathname.includes('/Trailer') && !pathname.includes('/Detail')) {
			dispatch(clearBackgroundLocation());
		}
	}, [pathname, dispatch]);

	return (
		<>
			<AnimatePresence>
				{backgroundLocation && isTrailer && (
					<Routes location={location} key={location.pathname}>
						<Route path="/Trailer/:id" element={<Trailer />} />
					</Routes>
				)}

				{backgroundLocation && isDetail && (
					<Routes location={location} key={location.pathname}>
						<Route path="/Detail/:id" element={<Detail />} />
					</Routes>
				)}
			</AnimatePresence>

			<Routes location={backgroundLocation || location}>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/Trailer/:id" element={<Trailer />} />
					<Route path="/Detail/:id" element={<Detail />} />

					<Route path="/Movie" element={<HomeMovie />} />
					<Route path="/TV" element={<HomeTV />} />
					<Route path="/Favorite" element={<Favorite />} />
					<Route path="/Search" element={<Search />} />
					<Route path="/Mypage" element={<Mypage />} />
				</Route>
			</Routes>
		</>
	);
};
