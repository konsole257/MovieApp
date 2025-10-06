import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";

import { RootState } from '@/app/store';
import { DetailContents } from '@/features/detail/detailContent';
import { Icon } from '@/components/Icon';
import './Detail.css';

export const Detail = () => {
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
    <motion.div className="page-overlay" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: .3 }}>
      <div className="page detail">
        <header className="page-header">
          <button className="btn-back" onClick={e => close(e)}><Icon name="arrow" /><span className="hidden">戻る</span></button>
        </header>

        <div className="page-cotents">
          <DetailContents />
        </div>
      </div>
    </motion.div>
  </>
  )
};