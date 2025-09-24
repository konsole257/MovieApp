import { NavLink } from 'react-router-dom';

import { Skeleton } from '@/components/Skeleton';

import { useHomeFeed } from './useHomeFeed';
import './homeFeed.css';

export const HomeFeed = () => {
  const { homeFeeds, loading, error } = useHomeFeed();

  // if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error}</p>;
  
  return (
  <>
    {homeFeeds.map((homeFeed, idx) => {
      const isPlayable = homeFeed.trailers.length > 0;
      // Trailer

      return (
        <div key={idx} className={`feed-div ${isPlayable ? 'playable' : ''}`}> 
          <NavLink className="feed-link" state={{type: 'movie', trailer: homeFeed.trailers}} to={`${isPlayable ? '':`/Detail/${homeFeed.id}`}`}>
            <figure className="feed-fig"><Skeleton loading={loading} className="feed-img" src={`https://image.tmdb.org/t/p/w1280${homeFeed.backdrop_path}`} alt={homeFeed.title} /></figure>
          </NavLink>

          <div className="feed-info">
            <NavLink state={{type: 'movie'}} to={`/Detail/${homeFeed.id}`}>
              <div className="feed-tit ellipsis-line2"><Skeleton loading={loading} text={isPlayable ? homeFeed.trailers[0]?.name : homeFeed.title} /></div>
              <div className="feed-date ellipsis-line`"><Skeleton loading={loading} text={`公開日 ${homeFeed.release_date}`} /></div>
            </NavLink>
          </div>
        </div>
      )
    })}

    {/* {homeFeed.trailers.map((video) => (
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
  </>
  );
};