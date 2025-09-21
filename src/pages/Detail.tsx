import { useNavigate } from 'react-router-dom';

import DetailContent from '@/features/detail/detailContent';

import './Detail.css';

const Detail = () => {
  const navigate = useNavigate();
  
  return (
  <>
    <div className="page detail">
      <h1 className="page-tit">Detail</h1>

      <header className="page-header">
        <button className="btn-back" onClick={() => navigate(-1)}><i className="icon-arrow"></i><span className="hidden">戻る</span></button>
      </header>

      <div className="page-cotents">
        <DetailContent />
      </div>
    </div>
  </>
  );
};

export default Detail;