import React from 'react';
import { Pokemon } from '../../../models/Pokemon';
import { View, Image, Text } from 'react-native';
import { useStyles } from './HeaderStyles';
import { FadeInImage } from '../../../components/FadeInImage';
import {GoBack} from '../../../components/GoBack';

interface Props {
  pokemon: Pokemon;
  backgroundColor: string;
}

export const Header = ({ pokemon, backgroundColor }: Props) => {
  const styles = useStyles({ backgroundColor });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <GoBack />
        <Text style={styles.text}>{pokemon.name}</Text>
        <Text style={styles.text}># {pokemon.id}</Text>
      </View>
      <View style={styles.pokeballContainer}>
        <Image
          style={styles.pokeball}
          source={require('../../../assets/pokebola-blanca.png')}
        />
      </View>
      <View style={styles.pokemonContainer}>
        <FadeInImage style={styles.pokemon} source={{ uri: pokemon.imageUrl }} />
      </View>
    </View>
  );
};
