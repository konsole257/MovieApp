import Tabs from '../components/Tabs';
import TVAiringToday from '../features/tvs/tvAiringToday';
import TVOnTheAir from '../features/tvs/tvOnTheAir';
import TVTopRated from '../features/tvs/tvTopRated';

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

      <section className="block movie">
        <h2 className="block-tit movie-tit">Airing Today</h2>

        <ul className="media-list movie-list">
          <TVAiringToday />
        </ul>
      </section>

      <section className="block movie">
        <h2 className="block-tit movie-tit">On The Air</h2>

        <ul className="media-list movie-list">
          <TVOnTheAir />
        </ul>
      </section>

      <section className="block movie">
        <h2 className="block-tit movie-tit">Top Rated</h2>

        <ul className="media-list movie-list">
          <TVTopRated />
        </ul>
      </section>
      
    </div>
  </>
  );
};

export default Home;