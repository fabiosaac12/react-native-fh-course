import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { FullPokemon } from '../models/FullPokemon';

export const useFullPokemon = (id: string) => {
  const [pokemon, setPokemon] = useState<FullPokemon>();
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);

  const loadPokemon = async () => {
    const response = await axios.get<FullPokemon>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );

    if (isMounted.current) {
      setPokemon(response.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPokemon();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    pokemon,
    loading,
  };
};
