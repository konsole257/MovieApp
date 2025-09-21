import './Skeleton.css';

interface SkeletonProps {
  loading: boolean;
  className?: string;
  src?: string;
  alt?: string;
  text?: string;
}

const Skeleton = ({loading, className, src, alt, text}: SkeletonProps) => {
  return (
  <>
    {loading
    ? <div className="skeleton"></div>
    : text
    ? <span className="skelton-txt">{text}</span>
    : <img className={`skelton-img ${className ?? ''}`} loading="lazy" src={src} alt={alt ?? ''} onError={(e) => {e.currentTarget.src = '/images/img-error.png';}} />
    }
  </>
  )
}

export default Skeleton;