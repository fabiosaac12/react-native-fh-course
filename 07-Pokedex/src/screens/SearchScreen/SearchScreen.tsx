import React, { useEffect, useState } from 'react';
import { SearchInput } from '../../components/SearchInput';
import { usePokemons } from '../../hooks/usePokemons';
import { FlatList, ActivityIndicator } from 'react-native';
import { PokemonCard } from '../../components/PokemonCard';
import { useStyles } from './SearchScreenStyles';
import { useDebouncer } from '../../hooks/useDebouncer';
import { Pokemon } from '../../models/Pokemon';

export const SearchScreen = () => {
  const styles = useStyles();
  const { pokemons } = usePokemons(false, 2000);
  const { value, setValue } = useDebouncer('');

  const [filteredPokemons, setFilteredPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (value.length < 1) setFilteredPokemon(pokemons);
    else if (!isNaN((value as unknown) as number)) {
      const pokemon = pokemons.find(pokemon => pokemon.id === value);

      pokemon ? setFilteredPokemon([pokemon]) : setFilteredPokemon([]);
    } else {
      setFilteredPokemon(pokemons.filter(pokemon => pokemon.name.includes(value)));
    }
  }, [value]);

  return (
    <>
      <SearchInput
        onChangeText={setValue}
        containerStyle={styles.searchInput}
      />
      <FlatList
        contentContainerStyle={styles.flatList}
        data={filteredPokemons}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        ListFooterComponent={
          <ActivityIndicator style={{ height: 100 }} size={30} color="#ccc" />
        }
        onEndReachedThreshold={0.4}
      />
    </>
  );
};
