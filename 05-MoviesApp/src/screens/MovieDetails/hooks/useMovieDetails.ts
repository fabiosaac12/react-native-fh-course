import { useEffect, useState } from 'react';
import { FullMovie } from '../../../models/FullMovie';
import { tmdb } from '../../../api/tmdb';
import { CreditsResponse } from '../../../models/CreditsResponse';
import { Cast } from '../../../models/Cast';

export const useMovieDetails = (movieId: number) => {
  const [loading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    (async () => {
      const movieDetailsPromise = tmdb.get<FullMovie>(`/${movieId}`);
      const creditsPromise = tmdb.get<CreditsResponse>(`/${movieId}/credits`);

      const response = await Promise.all([movieDetailsPromise, creditsPromise]);

      setMovieDetails(response[0].data);
      setCast(response[1].data.cast);
      setLoading(false);
    })();
  }, []);

  return { movieDetails, cast, loading };
};
