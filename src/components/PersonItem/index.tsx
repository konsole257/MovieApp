import { NavLink } from 'react-router-dom';

import { Skeleton } from '@/components/Skeleton';

import './PersonItem.css';

interface Person {
	id: number;
	name: string;
	profile_path: string;
}

interface PersonsProps {
	loading: boolean;
	persons: Person[];
}

export const PersonItem = ({ loading, persons }: PersonsProps) => {
	return (
		<>
			{persons.map(person => (
				<li className="person-item" key={person.id}>
					<NavLink to="">
						<div className="person-content">
							<figure className="person-fig">
								<Skeleton
									loading={loading}
									className="person-img"
									src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
									alt={person.name}
								/>
							</figure>

							<div className="person-name">
								<Skeleton loading={loading} text={person.name} />
							</div>
						</div>
					</NavLink>
				</li>
			))}
		</>
	);
};
