import { NavLink, useLocation } from 'react-router-dom';

import { handlePreparing } from '@/utils/common';
import { Icon } from '@/components/Icon';
import './BottomNav.css';

export const BottomNav = () => {
	const location = useLocation();

	return (
		<>
			<nav id="bottomnav">
				<h2 className="hidden">下部メニュー</h2>

				<ul className="nav-list">
					<li className="nav-item">
						<NavLink
							className={`nav-link  ${location.pathname.includes('/Movie') || location.pathname.includes('/TV') ? 'active' : ''}`}
							to="/"
						>
							<Icon name="home" />
							<span className="hidden">Home</span>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className={`nav-link`} to=" " onClick={handlePreparing}>
							<Icon name="favorite" />
							<span className="hidden">Favorite</span>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className={`nav-link`} to=" " onClick={handlePreparing}>
							<Icon name="search" />
							<span className="hidden">Search</span>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className={`nav-link`} to=" " onClick={handlePreparing}>
							<Icon name="mypage" />
							<span className="hidden">Mypage</span>
						</NavLink>
					</li>
				</ul>
			</nav>

			<hr id="bottomnav-end" />
		</>
	);
};
