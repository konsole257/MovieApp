import Tabs from '../components/Tabs';
import MoviePlaying from '../features/movies/moviePlaying';
import MovieRate from '../features/movies/movieRate';
import MovieComming from '../features/movies/movieComming';

import './Home.css';

const Home = () => {
  const tabData = [
    { label: 'Popular', link: '/' },
    { label: 'Movie', link: '/Movie' },
    { label: 'TV Show', link: '/TV' },
  ];
  
  return (
  <>
    <div className="page home">
      <h1 className="page-tit">Home</h1>

      <Tabs tabs={tabData} />

      <div className="block hero">
        <div className="hero-div">
          <figure className="hero-fig"><img  className="hero-img" src="/images/temp/screen@2x.png" alt="" /></figure>
          <div className="hero-tit ellipsis-line2">Wanda Vision</div>
        </div>
      </div>

      <section className="block plaing">
        <h2 className="block-tit plaing-tit">Now Playing</h2>

        <ul className="media-list plaing-list">
          <MoviePlaying />
        </ul>
      </section>

      <section className="block rate">
        <h2 className="block-tit rate-tit">Top Rated</h2>

        <ul className="media-list rate-list">
          <MovieRate />
        </ul>
      </section>

      <section className="block comming">
        <h2 className="block-tit comming-tit">Upcoming</h2>

        <ul className="media-list comming-list">
          <MovieComming />
        </ul>
      </section>
    </div>
  </>
  );
};

export default Home;