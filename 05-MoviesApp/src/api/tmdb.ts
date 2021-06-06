import axios from 'axios';

export const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: { api_key: 'ff1cbe06063098d4f3ee8570fe614f89', language: 'es-ES' },
});
