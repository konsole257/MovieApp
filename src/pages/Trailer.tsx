import { useNavigate } from 'react-router-dom';

// import './Trailer.css';

export const Trailer = () => {
  const navigate = useNavigate();
  
  return (
  <>
    <div className="page detail">
      <h1 className="page-tit">Trailer</h1>

      <header className="page-header">
        <button className="btn-back" onClick={() => navigate(-1)}><i className="icon-arrow"></i><span className="hidden">戻る</span></button>
      </header>

      <div className="page-cotents">
        Trailer
      </div>
    </div>
  </>
  )
};