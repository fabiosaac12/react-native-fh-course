import React from 'react';
import { Pokemon } from '../../models/Pokemon';
import { useStyles } from './PokemonCardStyles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FadeInImage } from '../FadeInImage';
import { useNavigation } from '@react-navigation/native';

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { navigate } = useNavigation();

  const styles = useStyles({ imageUrl: pokemon.imageUrl });

  return (
    <TouchableOpacity
      onPress={() =>
        navigate('pokemon', {
          pokemon,
          backgroundColor: styles.container.backgroundColor,
        })
      }
      activeOpacity={0.9}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{pokemon.name}</Text>
          <Text style={styles.text}># {pokemon.id}</Text>
        </View>
        <View style={styles.pokeballContainer}>
          <Image
            source={require('../../assets/pokebola-blanca.png')}
            style={styles.pokeball}
          />
        </View>
        <View style={styles.pokemonContainer}>
          <FadeInImage
            source={{ uri: pokemon.imageUrl }}
            style={styles.pokemon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
