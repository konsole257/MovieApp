import PopularMovies from '../features/populars/popularMovie';
import PopularTVs from '../features/populars/popularTV';
import PopularPersons from '../features/populars/popularPerson';

import Tab from '../components/Tab';

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

      <Tab tabs={tabData} />

      <div className="visual">
        <img  className="visual-img" src="/images/temp/screen@2x.png" alt="" />
        <div className="visual-txt">Wanda Vision</div>
      </div>

      <section className="block movie">
        <h2 className="block-tit movie-tit">Movies</h2>

        <ul className="movie-list">
          <PopularMovies />
        </ul>
      </section>

      <section className="block tv">
        <h2 className="block-tit tv-tit">TV Show</h2>

        <ul className="tv-list">
          <PopularTVs />
        </ul>
      </section>

      <section className="block person">
        <h2 className="block-tit person-tit">Person</h2>

        <ul className="person-list">
          <PopularPersons />
        </ul>
      </section>
    </div>
  </>
  );
};

export default Home;