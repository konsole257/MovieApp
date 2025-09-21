import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

import BottomNav from './BottomNav';
import Detail from '@/pages/Detail';

import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const showDetail = location.pathname.includes("/Detail");

  return (
  <>
    <main id="main">
      <Outlet />
    </main>
    
    <hr id="main-end" />

    <BottomNav />

    <AnimatePresence>
      {showDetail && (
        <motion.div
          key={location.pathname}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="page-overlay"
        >
          <Detail />
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
}

export default Layout;