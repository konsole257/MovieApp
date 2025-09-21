import { useEffect, useState } from 'react';
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import Skeleton from '@/components/Skeleton';

import Tabs from '@/components/Tabs';
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

const [info, setInfo] = useState<any>([])
const [loading, setLoading] = useState(true);
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
  }
};

useEffect(() => {
  const fetchInfo = async () => {
    try {
      const res = await fetch('https://api.themoviedb.org/3/tv/119051?language=ja-JP',options);
      
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setInfo(data);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false)
    }
  };

  fetchInfo();
}, []);
// === :Temp

  return (
  <>
    <div className="page home">
      <h1 className="page-tit">Home</h1>

      <Tabs tabs={tabData} />

      <div className="block hero">
        <Swiper modules={[Pagination, A11y, Autoplay]} slidesPerView={1} pagination autoplay={{ delay: 3000, disableOnInteraction: false }}>
          <SwiperSlide className="hero-div">
            <figure className="hero-fig"><Skeleton loading={loading} className="hero-img" src={`https://image.tmdb.org/t/p/w1280${info.backdrop_path}`} alt={info.name} /></figure>
            <div className="hero-tit ellipsis-line2"><Skeleton loading={loading} text={info.name} /></div>
          </SwiperSlide>
        </Swiper>
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