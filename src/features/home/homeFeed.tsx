import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBackgroundLocation } from '@/features/location/locationSlice';

import { motion } from "framer-motion";

import { Skeleton } from '@/components/Skeleton';

import { useHomeFeed } from './useHomeFeed';
import './homeFeed.css';

export const HomeFeed = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { homeFeeds, loading, error } = useHomeFeed();


  // if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error}</p>;
  
  return (
  <>
    {homeFeeds.map((homeFeed) => {
      const isPlayable = homeFeed.trailers.length > 0;
      
      return (
        <div key={homeFeed.id} className={`feed-div ${isPlayable ? 'playable' : ''}`}> 
          <motion.div key={homeFeed.id} layoutId={`feed-${homeFeed.id}`} transition={{ duration: .3 }} className="motion-div">
            <NavLink className="feed-link" state={{type: 'movie', trailer: homeFeed}} to={`${isPlayable ? '/Trailer/':`/Detail/`}${homeFeed.id}`} onClick={() => dispatch(setBackgroundLocation(location))}>
              <figure className="feed-fig"><Skeleton loading={loading} className="feed-img" src={`https://image.tmdb.org/t/p/w1280${homeFeed.backdrop_path}`} alt={homeFeed.title} /></figure>
            </NavLink>
          </motion.div>

          <div className="feed-info">
            <NavLink state={{type: 'movie'}} to={`/Detail/${homeFeed.id}`} onClick={() => dispatch(setBackgroundLocation(location))}>
              <div className="feed-tit ellipsis-line2"><Skeleton loading={loading} text={homeFeed.title} /></div>
              <div className="feed-date ellipsis-line"><Skeleton loading={loading} text={`公開日 ${homeFeed.release_date}`} /></div>
            </NavLink>
          </div>
        </div>
      )
    })}
  </>
  );
};

{/* <div key={idx} className={`feed-div ${isPlayable ? 'playable' : ''}`}> 
            <NavLink className="feed-link" state={{type: 'movie', trailer: homeFeed.trailers}} to={`${isPlayable ? '':`/Detail/${homeFeed.id}`}`}>
              <figure className="feed-fig"><Skeleton loading={loading} className="feed-img" src={`https://image.tmdb.org/t/p/w1280${homeFeed.backdrop_path}`} alt={homeFeed.title} /></figure>
            </NavLink>

            <div className="feed-info">
              <NavLink state={{type: 'movie'}} to={`/Detail/${homeFeed.id}`}>
                <div className="feed-tit ellipsis-line2"><Skeleton loading={loading} text={isPlayable ? homeFeed.trailers[0]?.name : homeFeed.title} /></div>
                <div className="feed-date ellipsis-line"><Skeleton loading={loading} text={`公開日 ${homeFeed.release_date}`} /></div>
              </NavLink>
            </div>
          </div> */}
{/* { isPlayable
  ? (
    <figure className="feed-fig">
      <ReactPlayer
        src={`https://www.youtube.com/watch?v=${homeFeed.trailers[0]?.key}`}
        controls
        playing
        muted
        light={true}
        width="100%"
        height="100%"
      />
    </figure>
  )
  : (
    <NavLink className="feed-link" state={{type: 'movie', trailer: homeFeed.trailers}} to={`/Detail/${homeFeed.id}`}>
      <figure className="feed-fig"><Skeleton loading={loading} className="feed-img" src={`https://image.tmdb.org/t/p/w1280${homeFeed.backdrop_path}`} alt={homeFeed.title} /></figure>
    </NavLink>
  )
} */}