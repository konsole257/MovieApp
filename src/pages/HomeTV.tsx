import { NavLink } from 'react-router-dom';

import TVAiringTodays from '../features/tvs/tvAiringToday';
import TVOnTheAirs from '../features/tvs/tvOnTheAir';
import TVTops from '../features/tvs/tvTop';

import './Home.css';

const Home = () => {

  return (
  <>
    <div className="page home">
      <h1 className="page-tit">Home</h1>

      <ul className="tab-list">
        <li><NavLink className="tab-link" to="/">Popular</NavLink></li>
        <li><NavLink className="tab-link" to="/Movie">Movie</NavLink></li>
        <li><NavLink className="tab-link" to="/TV">TV Show</NavLink></li>
      </ul>

      <div className="visual">
        <img  className="visual-img" src="/images/temp/screen@2x.png" alt="" />
        <div className="visual-txt">Wanda Vision</div>
      </div>

      <section className="block movie">
        <h2 className="block-tit movie-tit">Airing Todays</h2>

        <ul className="movie-list">
          <TVAiringTodays />
        </ul>
      </section>

      <section className="block movie">
        <h2 className="block-tit movie-tit">On The Airs</h2>

        <ul className="movie-list">
          <TVOnTheAirs />
        </ul>
      </section>

      <section className="block movie">
        <h2 className="block-tit movie-tit">Top Rated</h2>

        <ul className="movie-list">
          <TVTops />
        </ul>
      </section>
      
    </div>
  </>
  );
};

export default Home;