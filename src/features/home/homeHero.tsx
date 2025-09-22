import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/store';

import { Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

import Skeleton from '@/components/Skeleton';

import fetchHomeHeros from './homeHeroThunk';

import 'swiper/css';
import 'swiper/css/pagination';

const HomeHeros = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: homeHeros, loading, error } = useSelector(
    (state: RootState) => state.homeHeros
  );
  
  useEffect(() => {
    dispatch(fetchHomeHeros());
  }, [dispatch]);

  // if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error}</p>;

  return (
  <>
    <Swiper modules={[Pagination, A11y, Autoplay]} slidesPerView={1} pagination loop autoplay={{ delay: 3000, disableOnInteraction: false }}>
      {homeHeros.map((homeHero) => (
      <SwiperSlide className="hero-div">
        <figure className="hero-fig"><Skeleton loading={loading} className="hero-img" src={`https://image.tmdb.org/t/p/w1280${homeHero.backdrop_path}`} alt={homeHero.title} /></figure>
        <div className="hero-tit ellipsis-line2"><Skeleton loading={loading} text={homeHero.title} /></div>
        <div className="hero-date ellipsis-line`"><Skeleton loading={loading} text={homeHero.release_date} /></div>
      </SwiperSlide>
      ))}
    </Swiper>
  </>
  );
};

export default HomeHeros;