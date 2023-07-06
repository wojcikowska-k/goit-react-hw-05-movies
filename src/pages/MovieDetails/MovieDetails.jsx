import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailsWithId } from 'services';

export const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        setDetails(await fetchMovieDetailsWithId(id));
      } catch (error) {
        console.log('Error: ', error);
      }
    };
    asyncFunction();
  }, [id]);

  const { title, release_date, poster_path } = details;

  return (
    <main>
      <h1>Movie details</h1>
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
        width={250}
      />
      <h2>
        {title} ({release_date}){/* ({release_date.slice(0, 4)}) */}
      </h2>
    </main>
  );
};
