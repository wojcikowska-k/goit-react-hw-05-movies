import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
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

  const getGenres = () => {
    const genres = details.genres.map(genre => genre.name).join(' ');
    return genres;
  };

  const { title, release_date, poster_path, vote_average, overview, genres } =
    details;

  return (
    <main>
      <div>
        <h1>Movie details</h1>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          width={250}
        />
        <h2>
          {title}({release_date ? release_date.slice(0, 4) : ''})
        </h2>
        <span>User score: {Math.round(vote_average * 10)}%</span>

        <h3>Overview</h3>
        <p>{overview}</p>

        <h3>Genres</h3>
        {genres ? getGenres() : ''}
      </div>
      <div>
        <span>Additional information</span>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </main>
  );
};
