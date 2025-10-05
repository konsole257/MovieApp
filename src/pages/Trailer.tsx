import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";

import { RootState } from '@/app/store';
import { TrailerContent } from '@/features/trailer/trailerContent';
import { Icon } from '@/components/Icon';
import './Trailer.css';

export const Trailer = () => {
  const navigate = useNavigate();
  const backgroundLocation = useSelector(
    (state: RootState) => state.location.backgroundLocation
  );
  const close = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!backgroundLocation) return navigate('/');
    navigate(backgroundLocation.pathname);
  }

  return (
  <>
    <motion.div className="page-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .3 }} onClick={e => close(e)}>
      <div className="page tarailer">
        <h1 className="page-tit">Trailer</h1>

        <header className="page-header">
          <button className="btn-close" onClick={e => close(e)}><Icon name="close" /><span className="hidden">戻る</span></button>
        </header>

        <div className="page-contents">
          <TrailerContent />
        </div>
      </div>
    </motion.div>
  </>
  )
};