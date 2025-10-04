import { Skeleton } from '@/components/Skeleton';

import { useDetailContent } from './useDetailContent';
import './detailContent.css';

export const DetailContents = () => {
  const { detailContent, loading, error } = useDetailContent();
  
  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!detailContent) return <p>No data found.</p>;

  return (
  <>
    <figure className="cover-fig"><Skeleton loading={loading} className="cover-img" src={detailContent.backdrop_path ? `https://image.tmdb.org/t/p/w1280${detailContent.backdrop_path}` : null} alt="" /></figure>
    <div className="tit"><Skeleton loading={loading} text={detailContent.title ? detailContent.title : detailContent.name} /></div>
    <div className="overview">
      <div><Skeleton loading={loading} text="概要" /></div>
      <Skeleton loading={loading} text={detailContent.overview ? detailContent.overview : '概要がまだ翻訳されていません。'} />
    </div>
  </>
  )
};