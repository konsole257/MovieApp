import { useEffect, useState, useRef } from 'react';

import { Tabs } from '@/components/Tabs';

import { HomeHero } from '@/features/home/homeHero';
import { MovieNowPlaying } from '@/features/movies/movieNowPlaying';
import { MovieTopRated } from '@/features/movies/movieTopRated';
import { MovieUpcoming } from '@/features/movies/movieUpcoming';


import './Home.css';

export const HomeMovie = () => {
  // Temp: ===
  const tabData = [
    { label: 'ホーム', link: '/' },
    { label: 'ムービー', link: '/Movie' },
    { label: 'TVショー', link: '/TV' },
  ];

  const [tabShow, setTabShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY === 0) {
        setTabShow(true);
      } else if (currentY > 50) {
        setTabShow(currentY < lastScrollY.current);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // === :Temp

  return (
  <>
    <div className="page home">
      <h1 className="page-tit">ホーム</h1>

      <div className={`tabs ${tabShow ? 'sticky':''}`}>
        <Tabs tabs={tabData} />
      </div>

      <div className="block hero">
        <HomeHero />
      </div>

      <section className="block plaing">
        <h2 className="block-tit plaing-tit">Now Playing</h2>

        <ul className="media-list plaing-list">
          <MovieNowPlaying />
        </ul>
      </section>

      <section className="block rate">
        <h2 className="block-tit rate-tit">Top Rated</h2>

        <ul className="media-list rate-list">
          <MovieTopRated />
        </ul>
      </section>

      <section className="block comming">
        <h2 className="block-tit comming-tit">Upcoming</h2>

        <ul className="media-list comming-list">
          <MovieUpcoming />
        </ul>
      </section>
    </div>
  </>
  )
};