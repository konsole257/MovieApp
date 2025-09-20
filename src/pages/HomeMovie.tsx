import { useEffect, useState } from 'react';
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import Skeleton from '@/components/Skeleton';

import Tabs from '../components/Tabs';
import MovieNowPlaying from '../features/movies/movieNowPlaying';
import MovieTopRated from '../features/movies/movieTopRated';
import MovieUpcoming from '../features/movies/movieUpcoming';

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
      const res = await fetch('https://api.themoviedb.org/3/movie/278?language=ja-JP',options);
      
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setInfo(data);
    } catch (err: any) {
      console.error(err);
    } finally {
      setTimeout(() => {setLoading(false)}, 100);
    }
  };

  fetchInfo();
});
// === :Temp

  return (
  <>
    <div className="page home">
      <h1 className="page-tit">Home</h1>

      <Tabs tabs={tabData} />

      <div className="block hero">
        <Swiper modules={[Pagination, A11y, Autoplay]} slidesPerView={1} pagination loop autoplay={{ delay: 3000, disableOnInteraction: false }}>
          <SwiperSlide className="hero-div">
            <figure className="hero-fig"><Skeleton loading={loading} className="hero-img" src={`https://image.tmdb.org/t/p/w1280${info.backdrop_path}`} alt={info.title} /></figure>
            <div className="hero-tit ellipsis-line2"><Skeleton loading={loading} text={info.title} /></div>
          </SwiperSlide>
        </Swiper>
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
  );
};

export default Home;