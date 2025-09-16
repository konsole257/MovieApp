import { NavLink, useLocation } from 'react-router-dom';

import './MediaItem.css';

interface Media {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
}

interface MediasProps {
  type: string;
  medias: Media[];
}

const MediaItem = ({type, medias}: MediasProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  const mediaType = pathname === '/' ? '/Popular' : pathname;

  return (
  <>
    {medias.map((media) => (
      <li className="media-item" key={media.id}>
        <NavLink className="media-link" to={`${mediaType}/Detail/${type}/${media.id}`}>
          <figure className="media-fig"><img className="media-img" loading="lazy" src={`https://image.tmdb.org/t/p/w200${media.poster_path}`} alt={media.title ? media.title : media.name} /></figure>
          <div className="media-tit ellipsis-line2">{media.title ? media.title : media.name}</div>
        </NavLink>
      </li>
    ))}
  </>
  )
};

export default MediaItem;
