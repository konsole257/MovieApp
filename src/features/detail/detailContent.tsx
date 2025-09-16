import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { fetchDetailContents } from './detailContentSlice';

const DetailContents = () => {
  const location = useLocation();
  const { type='', id='' } = useParams<{ type: string, id: string }>();
  // const type = location.pathname.split('/').filter(Boolean)[0];

  const dispatch = useDispatch<AppDispatch>();
  const { item: detailContent, loading, error } = useSelector(
    (state: RootState) => state.detailContent
  );
  
  useEffect(() => {
    if(type&&id) dispatch(fetchDetailContents({type, id}));
  }, [dispatch]);

  if (loading) return <p>Loading details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!detailContent) return <p>No details found.</p>;

  return (
  <>
    <figure className="cover-fig"><img className="cover-img" loading="lazy" src={`https://image.tmdb.org/t/p/w1280${detailContent.backdrop_path}`} alt="" /></figure>
    <div className="tit">{detailContent.title ? detailContent.title : detailContent.name}</div>
  </>
  );
};

export default DetailContents;