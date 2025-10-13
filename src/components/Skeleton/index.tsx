import './Skeleton.css';

interface SkeletonProps {
	loading: boolean;
	className?: string;
	src?: string;
	alt?: string;
	text?: string | number;
}

const isImage = (src: string) => {
	return /\.(jpe?g|png|gif|svg|webp|avif)$/i.test(src);
};

export const Skeleton = ({
	loading,
	className,
	src,
	alt,
	text
}: SkeletonProps) => {
	let imgError: boolean = false;

	if (src && isImage(src)) imgError = true;

	return (
		<>
			{loading ? (
				<div className="skeleton"></div>
			) : text ? (
				<span className="skelton-txt">{text}</span>
			) : (
				<img
					className={imgError ? `skelton-img ${className ?? ''}` : 'img-error'}
					loading="lazy"
					src={imgError ? src : '/images/img-error.svg'}
					alt={alt ?? ''}
				/>
			)}
		</>
	);
};
