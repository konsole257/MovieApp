import './Skeleton.css';

interface SkeletonProps {
  loading: boolean;
  className?: string;
  src?: string | null;
  alt?: string;
  text?: string;
}

export const Skeleton = ({loading, className, src, alt, text}: SkeletonProps) => {
  return (
  <>
    {loading
    ? <div className="skeleton"></div>
    : text
    ? <span className="skelton-txt">{text}</span>
    : <img className={src ? `skelton-img ${className ?? ''}` : 'img-error'} loading="lazy" src={src ? src : '/images/img-error.svg'} alt={alt ?? ''} />
    }
  </>
  )
};