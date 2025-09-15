import { NavLink } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
  return (
  <>
    <div className="page-wrapper">
      <div className="page detail">
        <h1 className="page-tit">Detail</h1>

        <header className="page-header">
          <NavLink className="btn-back" to="/"><i className="icon-arrow"></i><span className="hidden">戻る</span></NavLink>
        </header>

        <div className="page-cotents">
          <figure className="cover-fig"><img className="cover-img" src="/images/temp/detail@2x.png" alt="" /></figure>
        </div>
      </div>
    </div>
  </>
  );
};

export default Detail;