import { useNavigate } from 'react-router-dom';

import { motion } from "framer-motion";

import { DetailContents } from '@/features/detail/detailContent';

import './Detail.css';

export const Detail = () => {
  const navigate = useNavigate();
  
  return (
  <>
    {/* <motion.div
            key={location.pathname}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="page-overlay"
          > */}
      <div className="page detail">
        <h1 className="page-tit">Detail</h1>

        <header className="page-header">
          <button className="btn-back" onClick={() => navigate(-1)}><i className="icon-arrow"></i><span className="hidden">戻る</span></button>
        </header>

        <div className="page-cotents">
          <DetailContents />
        </div>
      </div>
    {/* </motion.div> */}
  </>
  )
};