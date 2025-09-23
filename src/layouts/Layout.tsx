import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

import { BottomNav } from './BottomNav';
import { Detail } from '@/pages/Detail';
import { Trailer } from '@/pages/Trailer';

import './Layout.css';

export const Layout = () => {
  const location = useLocation();
  const isDetail = location.pathname.includes("/Detail");
  const isTrailer = location.pathname.includes("/Trailer");

  return (
  <>
    <main id="main">
      <Outlet />
    </main>
    
    <hr id="main-end" />

    <BottomNav />

    <AnimatePresence>
      {isDetail && (
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

    <AnimatePresence>
      {isTrailer && (
        <motion.div
          key={location.pathname}
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.3 }}
          className="page-overlay"
        >
          <Trailer />
        </motion.div>
      )}
    </AnimatePresence>
  </>
  )
};