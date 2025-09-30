import { Outlet } from 'react-router-dom';

import { BottomNav } from './BottomNav';
import './Layout.css';

export const Layout = () => {

  return (
  <>
    <main id="main">
      <Outlet />
    </main>
    
    <hr id="main-end" />

    <BottomNav />
  </>
  )
};