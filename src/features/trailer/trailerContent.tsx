import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

import { Skeleton } from '@/components/Skeleton';
import { useTrailerContent } from './useTrailerContent';
import './trailerContent.css';

export const TrailerContent = () => {
  const { trailerContent, loading, error } = useTrailerContent();
  const { id='' } = useParams<{ id: string }>();

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!trailerContent) return <p>No data found.</p>;

  return (
  <>
    <motion.div key={id} layoutId={`feed-${id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .3 }} onClick={e => e.stopPropagation()}>
      <figure className="trailer-fig">
        <ReactPlayer src={`https://www.youtube.com/watch?v=${trailerContent.trailers[0].key}`} light={`https://image.tmdb.org/t/p/w1280${trailerContent.backdrop_path}`} controls playing muted width="100%" height="100%"/>
      </figure>
    </motion.div>

    <div className="trailer-info">
      <div className="trailer-name"><Skeleton loading={loading} text={trailerContent.trailers[0].name} /></div>
      <div className="trailer-tit"><Skeleton loading={loading} text={trailerContent.title} /></div>
      <div className="trailer-date"><Skeleton loading={loading} text={`公開日 ${trailerContent.release_date_current}`} /></div>
    </div>
  </>
  )
};