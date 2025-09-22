import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/store';

import Skeleton from '@/components/Skeleton';

import fetchHomeHeros from './homeHeroThunk';

import 'swiper/css';
import 'swiper/css/pagination';

const HomeVideos = () => {
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
    {homeHeros.map((homeHero, idx) => (
      <div key={idx} className={`video-div ${homeHero.videos.length > 0 ? 'playable' : ''}`}>
        <NavLink className="video-link" to="">
          <figure className="video-fig"><Skeleton loading={loading} className="video-img" src={`https://image.tmdb.org/t/p/w1280${homeHero.backdrop_path}`} alt={homeHero.title} /></figure>
        </NavLink>

        <div className="video-info">
          <div className="video-tit ellipsis-line2"><Skeleton loading={loading} text={homeHero.videos[0]?.name ? homeHero.videos[0]?.name : homeHero.title} /></div>
          <div className="video-date ellipsis-line`"><Skeleton loading={loading} text={homeHero.release_date} /></div>
          
          {/* {homeHero.videos.map((video) => (
            <div key={video.id}>
              <div>id: {video.id}</div>
              <div>key: {video.key}</div>
              <div>name: {video.name}</div>
              <iframe
              src={`https://www.youtube.com/embed/${video.key}`} 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
            </div>
          ))} */}
        </div>
      </div>
    ))}
  </>
  );
};

export default HomeVideos;