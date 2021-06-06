import { useState, useEffect } from 'react';
import { tmdb } from '../../../api/tmdb';
import { MoviesResponse } from '../../../models/MoviesResponse';
import { Movie } from '../../../models/Movie';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  useEffect(() => {
    (async () => {
      const nowPlayingPromise = tmdb.get<MoviesResponse>('now_playing');
      const popularPromise = tmdb.get<MoviesResponse>('popular');
      const topRatedPromise = tmdb.get<MoviesResponse>('top_rated');
      const upcomingPromise = tmdb.get<MoviesResponse>('upcoming');

      const response = await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

      setMovies({
        nowPlaying: response[0].data.results,
        popular: response[1].data.results,
        topRated: response[2].data.results,
        upcoming: response[3].data.results,
      });

      setLoading(false);
    })();
  }, []);

  return { loading, movies };
};
