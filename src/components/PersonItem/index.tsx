import { NavLink } from 'react-router-dom';

import './PersonItem.css';

interface Person {
  id: number;
  name: string;
  profile_path: string;
}

interface PersonsProps {
  persons: Person[];
}

const PersonItem = ({persons}: PersonsProps) => {
  return (
  <>
    {persons.map((person) => (
      <li className="person-item" key={person.id}>
        <NavLink className="person-link" to="/Person/Detail">
          <figure className="person-fig"><img className="person-img" loading="lazy" src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} alt={person.name} /></figure>
          <div className="person-name">{person.name}</div>
        </NavLink>
      </li>
    ))}
  </>
  )
}

export default PersonItem;