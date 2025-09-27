import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { AnimatePresence, motion } from "framer-motion";

import { Layout } from '@/layouts/Layout';
import { Home } from '@/pages/Home';
import { HomeMovie } from '@/pages/HomeMovie';
import { HomeTV } from '@/pages/HomeTV';
import { Detail } from '@/pages/Detail';
import { Trailer } from '@/pages/Trailer';
import { Favorite } from '@/pages/Favorite';
import { Search } from '@/pages/Search';
import { Mypage } from '@/pages/Mypage';


export const AppRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const state: { backgroundLocation?: Location } = location.state;
  const isTrailer = location.pathname.includes("/Trailer");
  const isDetail = location.pathname.includes("/Detail");

  return (
  <>
    <AnimatePresence>
      {/* {state?.backgroundLocation && ( */}
      {isTrailer && (
        <motion.div className="page-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={() => navigate(-1)}>
            <Routes location={location} key={location.pathname}>
              <Route path="/Trailer/:id" element={<Trailer />} />
            </Routes>
        </motion.div>
      )}

      {isDetail && (
          <motion.div
            key={location.pathname}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="page-overlay"
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/Detail/:id" element={<Detail />} />
            </Routes>
          </motion.div>
        )}
    </AnimatePresence>

    {/* <Routes location={state?.backgroundLocation || location}> */}
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}>
          <Route path="Detail/:id" element={<Detail />} />
          <Route path="Trailer/:id" element={<Trailer />} />
        </Route>
        <Route path="/Movie" element={<HomeMovie />}>
          <Route path="Detail/:id" element={<Detail />} />
        </Route>
        <Route path="/TV" element={<HomeTV />}>
          <Route path="Detail/:id" element={<Detail />} />
        </Route>
        <Route path="/Person" element={<HomeTV />}>
          <Route path="Detail/:id" element={<Detail />} />
        </Route>

        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Mypage" element={<Mypage />} />
      </Route>
    </Routes>
  </>
  )
};