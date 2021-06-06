import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { PokemonsResponse } from '../models/PokemonsResponse';
import { Pokemon } from '../models/Pokemon';

export const usePokemons = (paginated = true, limit = 40) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const nextPageUrl = useRef(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
  );

  const loadPokemons = async () => {
    const response = await axios.get<PokemonsResponse>(nextPageUrl.current);

    if (paginated) {
      nextPageUrl.current = response.data.next;
    }

    const newPokemons = response.data.results.map<Pokemon>(pokemon => {
      const pokemonId = pokemon.url.split('/')[6];

      return {
        name: pokemon.name,
        id: pokemonId,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
      };
    });

    setPokemons(pokemons =>
      paginated ? newPokemons : [...pokemons, ...newPokemons],
    );
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    pokemons,
    loadPokemons,
  };
};
