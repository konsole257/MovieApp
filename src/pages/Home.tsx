import { useEffect, useState } from 'react';
import Tabs from '../components/Tabs';
import PopularMovies from '../features/populars/popularMovie';
import PopularTVs from '../features/populars/popularTV';
import PopularPersons from '../features/populars/popularPerson';

import './Home.css';

const Home = () => {
  const tabData = [
    { label: 'Popular', link: '/' },
    { label: 'Movie', link: '/Movie' },
    { label: 'TV Show', link: '/TV' },
  ];

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGZkMTliYzZjMTdjMWEwYmRjNjBiZmU3NDlkNjA3MyIsIm5iZiI6MTc1Njk3NjM4MC4yMjg5OTk5LCJzdWIiOiI2OGI5NTRmYzU1ZmY1NWI1ZTU4Y2RjYzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.upYdoeXCbkJz1BBUhnYx0eTYrOPVITTwzNU7AuB0hcw'
    }
  };
const [videos, setVideos] = useState<any>([])
const [info, setInfo] = useState<any>([])

useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/movie/1311031/videos?language=ja-JP',
          options
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setVideos(data.results);
      } catch (err: any) {
        console.error(err);
      } finally {
      }
    };

    fetchVideos();

    
    const fetchInfo = async () => {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/movie/1311031?language=ja-JP',
          options
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setInfo(data);
      } catch (err: any) {
        console.error(err);
      } finally {
      }
    };

    fetchInfo();
  }, []);

  return (
  <>
    <div className="page home">
      <h1 className="page-tit">Home</h1>

      <Tabs tabs={tabData} />

      {/* {videos.map((video: any) => (
        <div key={video.id}>
          <div>{video.name}</div>
          <div>{video.site}</div>
          <iframe
          src={`https://www.youtube.com/embed/${video.key}`} 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
        </div>
      ))} */}

      {/* <img src={`https://image.tmdb.org/t/p/w200${backdrops.file_path}`} alt="" /> */}

      {/* {posters.map((image: any, idx: number) => (
        <div key={idx}>
          <div><img src={`https://image.tmdb.org/t/p/w200${image.file_path}`} alt="" /></div>
        </div>
      ))} */}

      {/* {backdrops.map((backdrop: any, idx: number) => (
        <div key={idx}>
          <div><img src={`https://image.tmdb.org/t/p/w200${backdrop.file_path}`} alt="" /></div>
        </div>
      ))} */}

      <div className="visual">
        <figure className="visual-fig"><img  className="visual-img" src={`https://image.tmdb.org/t/p/w1280${info.backdrop_path}`} alt={info.title} /></figure>
        <div className="visual-tit ellipsis-line2">{info.title}</div>
      </div>

      <section className="block movie">
        <h2 className="block-tit movie-tit">Movies</h2>

        <ul className="media-list movie-list">
          <PopularMovies />
        </ul>
      </section>

      <section className="block tv">
        <h2 className="block-tit tv-tit">TV Show</h2>

        <ul className="media-list tv-list">
          <PopularTVs />
        </ul>
      </section>

      <section className="block person">
        <h2 className="block-tit person-tit">Person</h2>

        <ul className="person-list">
          <PopularPersons />
        </ul>
      </section>
    </div>
  </>
  );
};

export default Home;