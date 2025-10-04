import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";

import { setBackgroundLocation } from '@/features/location/locationSlice';
import { Skeleton } from '@/components/Skeleton';
import { useHomeFeed } from './useHomeFeed';
import './homeFeed.css';

export const HomeFeed = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { homeFeeds, loading, error } = useHomeFeed();
console.log(homeFeeds)
  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
  <>
    {homeFeeds.map((homeFeed) => {
      const isPlayable = homeFeed.trailers.length > 0;
      
      return (
        <div key={homeFeed.id} className={`feed-div ${isPlayable ? 'playable' : ''}`}> 
          <motion.div key={homeFeed.id} layoutId={`feed-${homeFeed.id}`} transition={{ duration: .3 }} className="motion-div">
            <NavLink className="feed-link" state={{type: 'movie', trailer: homeFeed}} to={`${isPlayable ? '/Trailer/':`/Detail/`}${homeFeed.id}`} onClick={() => dispatch(setBackgroundLocation(location))}>
              <figure className="feed-fig"><Skeleton loading={loading} className="feed-img" src={homeFeed.backdrop_path ? `https://image.tmdb.org/t/p/w1280${homeFeed.backdrop_path}` : null} alt={homeFeed.title} /></figure>
            </NavLink>
          </motion.div>

          <div className="feed-info">
            <NavLink state={{type: 'movie'}} to={`/Detail/${homeFeed.id}`} onClick={() => dispatch(setBackgroundLocation(location))}>
              <div className="feed-tit ellipsis-line2"><Skeleton loading={loading} text={homeFeed.title} /></div>
              <div className="feed-date ellipsis-line"><Skeleton loading={loading} text={`公開日 ${homeFeed.release_date_current}`} /></div>
              <div className="feed-detail">詳細を見る &gt;</div>
            </NavLink>
          </div>
        </div>
      )
    })}
  </>
  );
};