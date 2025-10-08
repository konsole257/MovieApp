import { useEffect, useState, useRef } from 'react';

import { Tabs, Tab } from '@/components/Tabs';

import { HomeFeed } from '@/features/home/homeFeed';
// import PopularMovies from '@/features/populars/popularMovie';
// import PopularTVs from '@/features/populars/popularTV';
// import PopularPersons from '@/features/populars/popularPerson';

import './Home.css';

export const Home = () => {
	const [tabShow, setTabShow] = useState(true);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;

			if (currentY === 0) {
				setTabShow(true);
			} else if (currentY > 0) {
				setTabShow(currentY < lastScrollY.current);
			}

			lastScrollY.current = currentY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<div className="page home">
				<h1 className="page-tit">ホーム</h1>

				<div className={`tabs ${tabShow ? 'sticky' : ''}`}>
					<Tabs>
						<Tab label="ホーム" link="/" />
						<Tab label="ムービー" link="/Movie" />
						<Tab label="TVショー" link="/TV" />
					</Tabs>
				</div>

				<div className="block feed">
					<h2 className="block-tit">近日公開の映画の予告編</h2>

					<HomeFeed />
				</div>
			</div>
		</>
	);
};
