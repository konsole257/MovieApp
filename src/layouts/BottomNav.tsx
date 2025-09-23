import { NavLink, useLocation } from 'react-router-dom';

import './BottomNav.css';

export const BottomNav = () => {
  const location = useLocation();

  return (
  <>
    <nav id="bottomnav">
      <h2 className="hidden">下部メニュー</h2>

      <ul className="nav-list">
        <li className="nav-item"><NavLink className={`nav-link  ${location.pathname.includes('/Movie')||location.pathname.includes('/TV') ? 'active' : ''}`} to="/"><i className="icon-home"></i><span className="hidden">Home</span></NavLink></li>
        <li className="nav-item"><NavLink className={`nav-link`} to="/Favorite"><i className="icon-favorite"></i><span className="hidden">Favorite</span></NavLink></li>
        <li className="nav-item"><NavLink className={`nav-link`} to="/Search"><i className="icon-search"></i><span className="hidden">Search</span></NavLink></li>
        <li className="nav-item"><NavLink className={`nav-link`} to="/Mypage"><i className="icon-mypage"></i><span className="hidden">Mypage</span></NavLink></li>
      </ul>
    </nav>

    <hr id="bottomnav-end" />
  </>
  )
};