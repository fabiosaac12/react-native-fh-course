import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import { Header } from './Header';
import { PokemonInfo } from './PokemonInfo';
import { useFullPokemon } from '../../hooks/useFullPokemon';
import { ActivityIndicator, StyleSheet } from 'react-native';

interface Props extends StackScreenProps<RootStackParams, 'pokemon'> {}

export const PokemonScreen = ({
  route: {
    params: { pokemon, backgroundColor },
  },
}: Props) => {
  const { pokemon: fullPokemon } = useFullPokemon(pokemon.id);

  return (
    <>
      <Header pokemon={pokemon} backgroundColor={backgroundColor} />
      {!fullPokemon ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size={30}
          color={backgroundColor}
        />
      ) : (
        <PokemonInfo pokemon={fullPokemon} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
