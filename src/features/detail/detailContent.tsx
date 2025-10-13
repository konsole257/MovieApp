import { Skeleton } from '@/components/Skeleton';
import { PersonItem } from '@/components/PersonItem';
import { useDetailContent } from './useDetailContent';
import './detailContent.css';

export const DetailContents = () => {
	const { detailContent, loading, error } = useDetailContent();

	// if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;
	if (!detailContent) return <p>No data found.</p>;

	return (
		<>
			<h1 className="page-tit">
				{detailContent.details.title
					? detailContent.details.title
					: detailContent.details.name}
			</h1>

			<figure className="cover-fig">
				<Skeleton
					loading={loading}
					className="cover-img"
					src={`https://image.tmdb.org/t/p/w1280${detailContent.details.backdrop_path}`}
					alt=""
				/>
			</figure>

			<div className="info">
				<div className="header">
					<div className="tit">
						<Skeleton
							loading={loading}
							text={
								detailContent.details.title
									? detailContent.details.title
									: detailContent.details.name
							}
						/>
					</div>

					<div className="date">
						<Skeleton
							loading={loading}
							text={detailContent.release_date_latest}
						/>
					</div>

					<div className="genres">
						{detailContent.details.genres.map(genre => (
							<span key={genre.id} className="genre">
								<Skeleton loading={loading} text={genre.name} />
							</span>
						))}
					</div>
				</div>

				<section className="info-block overview">
					<h2 className="tit">
						<Skeleton loading={loading} text="概要" />
					</h2>

					<div className="overview-txt">
						<Skeleton
							loading={loading}
							text={
								detailContent.details.overview
									? detailContent.details.overview
									: '概要がまだ翻訳されていません。'
							}
						/>
					</div>
				</section>
				<section className="info-block cast">
					<h2 className="tit">
						<Skeleton loading={loading} text="出演者" />
					</h2>

					<ul className="person-list">
						<PersonItem
							loading={loading}
							persons={detailContent.credits.cast}
						/>
					</ul>
				</section>
			</div>
		</>
	);
};
