import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services';
import { CastStyle } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        setCast(await fetchMovieCast(id));
      } catch (error) {
        console.log('Error: ', error);
      }
    };
    asyncFunction();
  }, [id]);

  return (
    <section>
      <ul>
        {cast.map(member => (
          <li>
            <img
              src={`https://image.tmdb.org/t/p/original${member.profile_path}`}
              alt={member.name}
              width={100}
            ></img>
            <CastStyle>
              <span>{member.name}</span>
              <span>Character: {member.character}</span>
            </CastStyle>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
