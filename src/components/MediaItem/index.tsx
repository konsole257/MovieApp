import { NavLink } from 'react-router-dom';

import './MediaItem.css';

interface Media {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
}

interface MediasProps {
  medias: Media[];
}

const MediaItem = ({medias}: MediasProps) => {
  return (
  <>
    {medias.map((media) => (
      <li className="media-item" key={media.id}>
        <NavLink className="media-link" to="/Popular/Detail">
          <figure className="media-fig"><img className="media-img" loading="lazy" src={`https://image.tmdb.org/t/p/w200${media.poster_path}`} alt={media.title ? media.title : media.name} /></figure>
          <div className="media-tit ellipsis-line2">{media.title ? media.title : media.name}</div>
        </NavLink>
      </li>
    ))}
  </>
  )
};

export default MediaItem;
