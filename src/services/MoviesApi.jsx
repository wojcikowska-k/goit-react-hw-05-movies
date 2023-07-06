import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '898bf11e68646ee6f0a56e9a336e03b4';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(API_URL + 'trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data.results;
};

export const fetchMovieDetailsWithId = async id => {
  const response = await axios.get(API_URL + 'movie/' + id, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
};
