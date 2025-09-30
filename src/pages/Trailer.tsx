import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion";

import { RootState } from '@/app/store';
import { TrailerContent } from '@/features/trailer/trailerContent';

import './Trailer.css';

export const Trailer = () => {
  const navigate = useNavigate();

  return (
  <>
    <motion.div className="page-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .3 }} onClick={() => {navigate(-1);}}>
      <div className="page tarailer">
        <header className="page-header">
          <button className="btn-close" onClick={(e) => {e.stopPropagation();navigate(-1);}}><i className="icon-close"></i><span className="hidden">戻る</span></button>
        </header>

        <div className="page-contents">
          <TrailerContent />
        </div>
      </div>
    </motion.div>
  </>
  )
};