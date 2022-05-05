import axios from 'axios';

const baseURL = 'https://kinopoiskapiunofficial.tech/api';
const api = axios.create({
  baseURL,
  headers: {
    'X-API-KEY': 'a2110103-f272-4efb-ba49-47120aa58317',
    'Content-Type': 'application/json',
  },
});

api.fetchMovies = () => {
    return api.get('/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1')
}

export default api;
