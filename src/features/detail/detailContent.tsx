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
    <figure className="cover-fig"><Skeleton loading={loading} className="cover-img" src={`https://image.tmdb.org/t/p/w1280${detailContent.backdrop_path}`} alt="" /></figure>
    <div className="tit"><Skeleton loading={loading} text={detailContent.title ? detailContent.title : detailContent.name} /></div>
    <div className="overview"><Skeleton loading={loading} text={detailContent.overview} /></div>
  </>
  )
};