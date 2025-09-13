import { NavLink } from 'react-router-dom';

import MovieNow from '../features/movies/movieNow';
import MovieTop from '../features/movies/movieTop';
import MovieUp from '../features/movies/movieUp';

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
        <h2 className="block-tit movie-tit">Now Playing</h2>

        <ul className="movie-list">
          <MovieNow />
        </ul>
      </section>

      <section className="block movie">
        <h2 className="block-tit movie-tit">Top Rated</h2>

        <ul className="movie-list">
          <MovieTop />
        </ul>
      </section>

      <section className="block movie">
        <h2 className="block-tit movie-tit">Upcoming</h2>

        <ul className="movie-list">
          <MovieUp />
        </ul>
      </section>
    </div>
  </>
  );
};

export default Home;