import { Skeleton } from '@/components/Skeleton';
import { PersonItem } from '@/components/PersonItem';
import { useDetailContent } from './useDetailContent';
import './detailContent.css';

export const DetailContents = () => {
	const { detailContent, loading, error } = useDetailContent();

	// if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;
	if (!detailContent) return <p>No data found.</p>;

	const runtime = {
		HH: Math.floor(detailContent.details.runtime / 60),
		MM: detailContent.details.runtime % 60
	};

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

					<div className="row">
						<div className="date">
							<Skeleton
								loading={loading}
								text={`${detailContent.release_date_current.latest} ${detailContent.release_date_current.first && `(初公開日：${detailContent.release_date_current.first})`}`}
							/>
						</div>

						<div className="runtime">
							<Skeleton
								loading={loading}
								text={`${runtime.HH}時間 ${runtime.MM}分`}
							/>
						</div>
					</div>

					<div className="genres">
						{detailContent.details.genres.map(genre => (
							<span key={genre.id} className="genre">
								<Skeleton loading={loading} text={genre.name} />
							</span>
						))}
					</div>
				</div>

				<section className="info-content overview">
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

				<section className="info-content overview">
					<h2 className="tit">
						<Skeleton loading={loading} text="ユーザースコア" />
					</h2>

					<div className="overview-txt">
						<Skeleton
							loading={loading}
							text={`${detailContent.details.vote_average}点 / 10点`}
						/>
					</div>
				</section>

				<section className="info-content review">
					<h2 className="tit">
						<Skeleton loading={loading} text="レビュー" />
					</h2>

					<div className="overview-txt">レビューがまだ翻訳されていません。</div>
				</section>

				<section className="info-content cast">
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
