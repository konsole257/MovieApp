import './Icon.css';

interface iconProps {
	name: string;
}

export const Icon = ({ name }: iconProps) => {
	return (
		<>
			<i className={`icon-${name}`}></i>
		</>
	);
};
