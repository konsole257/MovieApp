import { useEffect, useState } from 'react';

import {Tabs, Tab} from '@/components/Tabs';

import HomeVideos from '@/features/home/homeVideo';
// import PopularMovies from '@/features/populars/popularMovie';
// import PopularTVs from '@/features/populars/popularTV';
// import PopularPersons from '@/features/populars/popularPerson';


import './Home.css';

const Home = () => {
  // Temp: ===
  const [tabShow, setTabShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY === 0) {
        setTabShow(true);
      } else if (currentY > 50) {
        setTabShow(currentY < lastScrollY);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, [lastScrollY]);
  // === :Temp

  return (
  <>
    <div className="page home">
      <h1 className="page-tit">Home</h1>

      <div className={`tabs ${tabShow ? 'sticky':''}`}>
        <Tabs>
          <Tab label="Home" link="/" />
          <Tab label="Movie" link="/Movie" />
          <Tab label="TV Show" link="/TV" />
        </Tabs>
      </div>

      <div className="block video">
        <HomeVideos />
      </div>

      {/* <section className="block movie">
        <h2 className="block-tit movie-tit">Movies</h2>

        <ul className="media-list movie-list">
          <PopularMovies />
        </ul>
      </section>

      <section className="block tv">
        <h2 className="block-tit tv-tit">TV Show</h2>

        <ul className="media-list tv-list">
          <PopularTVs />
        </ul>
      </section>

      <section className="block person">
        <h2 className="block-tit person-tit">Person</h2>

        <ul className="person-list">
          <PopularPersons />
        </ul>
      </section> */}
    </div>
  </>
  );
};

export default Home;