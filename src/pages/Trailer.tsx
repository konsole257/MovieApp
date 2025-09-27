import { useNavigate, useLocation } from "react-router-dom";

import { motion } from "framer-motion";

import { TrailerContent } from '@/features/trailer/trailerContent';
import './Trailer.css';

export const Trailer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.backgroundLocation;
  
  return (
  <>
    {/* <motion.div className="page-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={() => navigate(background.pathname)}> */}
      <div className="page tarailer">
        <header className="page-header">
          <button className="btn-close" onClick={(e) => {navigate(background.pathname); e.stopPropagation();}}><i className="icon-close"></i><span className="hidden">戻る</span></button>
        </header>
  
        <div className="page-contents">
          <TrailerContent />
        </div>
      </div>
    {/* </motion.div> */}
  </>
  )
};