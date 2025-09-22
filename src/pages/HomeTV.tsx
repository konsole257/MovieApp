import { useEffect, useState } from 'react';

import { Tabs } from '@/components/Tabs';

import HomeHeros from '@/features/home/homeHero';
import TVAiringToday from '@/features/tvs/tvAiringToday';
import TVOnTheAir from '@/features/tvs/tvOnTheAir';
import TVTopRated from '@/features/tvs/tvTopRated';


import './Home.css';

const Home = () => {
  // Temp: ===
  const tabData = [
    { label: 'Popular', link: '/' },
    { label: 'Movie', link: '/Movie' },
    { label: 'TV Show', link: '/TV' },
  ];

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
        <Tabs tabs={tabData} />
      </div>

      <div className="block hero">
        <HomeHeros />
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