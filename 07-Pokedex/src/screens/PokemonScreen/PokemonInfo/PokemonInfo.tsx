import React from 'react';
import { View, Text } from 'react-native';
import { FullPokemon } from '../../../models/FullPokemon';
import { Stat } from './Stat';
import { useStyles } from './PokemonInfoStyles';

interface Props {
  pokemon: FullPokemon;
}

export const PokemonInfo = ({ pokemon }: Props) => {
  const { stats } = pokemon;
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        {stats.map(stat => (
          <Stat name={stat.stat.name} stat={stat.base_stat} />
        ))}
      </View>
      <View>
        <Text>Types: {pokemon.types.map(type => type.type.name)}</Text>
      </View>
    </View>
  );
};
