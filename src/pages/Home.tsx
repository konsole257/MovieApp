import { useEffect, useState } from 'react';
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import Skeleton from '@/components/Skeleton';

import Tabs from '@/components/Tabs';
import PopularMovies from '@/features/populars/popularMovie';
import PopularTVs from '@/features/populars/popularTV';
import PopularPersons from '@/features/populars/popularPerson';

import './Home.css';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
// Temp: ===
const tabData = [
  { label: 'Popular', link: '/' },
  { label: 'Movie', link: '/Movie' },
  { label: 'TV Show', link: '/TV' },
];

const [videos, setVideos] = useState<any>([])
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
  const fetchVideos = async () => {
    try {
      const res = await fetch('https://api.themoviedb.org/3/movie/1311031/videos?language=ja-JP', options);

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setVideos(data.results);
    } catch (err: any) {
      console.error(err);
    } finally {
      
    }
  };

  fetchVideos();
  
  const fetchInfo = async () => {
    try {
      const res = await fetch('https://api.themoviedb.org/3/movie/1311031?language=ja-JP',options);
      
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
}, []);
// === :Temp

  return (
  <>
    <div className="page home">
      <h1 className="page-tit">Home</h1>

      <Tabs tabs={tabData} />

      {/* {videos.map((video: any) => (
        <div key={video.id}>
          <iframe
          src={`https://www.youtube.com/embed/${video.key}`} 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
        </div>
      ))} */}

      <div className="block hero">
        <Swiper modules={[Pagination, A11y, Autoplay]} slidesPerView={1} pagination loop autoplay={{ delay: 3000, disableOnInteraction: false }}>
          <SwiperSlide className="hero-div">
            <figure className="hero-fig"><Skeleton loading={loading} className="hero-img" src={`https://image.tmdb.org/t/p/w1280${info.backdrop_path}`} alt={info.title} /></figure>
            <div className="hero-tit ellipsis-line2"><Skeleton loading={loading} text={info.title} /></div>
          </SwiperSlide>
          <SwiperSlide className="hero-div">
            <figure className="hero-fig"><Skeleton loading={loading} className="hero-img" src={`https://image.tmdb.org/t/p/w1280${info.backdrop_path}`} alt={info.title} /></figure>
            <div className="hero-tit ellipsis-line2"><Skeleton loading={loading} text={info.title} /></div>
          </SwiperSlide>
        </Swiper>
      </div>

      <section className="block movie">
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
      </section>
    </div>
  </>
  );
};

export default Home;