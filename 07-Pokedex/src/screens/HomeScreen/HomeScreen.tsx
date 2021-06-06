import React, { FC } from 'react';
import { Image, FlatList, ActivityIndicator } from 'react-native';
import { useStyles } from './HomeScreenStyles';
import { usePokemons } from '../../hooks/usePokemons';
import { PokemonCard } from '../../components/PokemonCard';

export const HomeScreen: FC = () => {
  const styles = useStyles();
  const { pokemons, loadPokemons } = usePokemons();

  return (
    <>
      <Image
        style={styles.pokeballImage}
        source={require('../../assets/pokebola.png')}
      />
      {/* <Text style={styles.text}>Pokedex</Text> */}
      <FlatList
        contentContainerStyle={styles.flatList}
        data={pokemons}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        ListFooterComponent={
          <ActivityIndicator style={{ height: 100 }} size={30} color="#ccc" />
        }
        onEndReachedThreshold={0.4}
        onEndReached={loadPokemons}
      />
    </>
  );
};
