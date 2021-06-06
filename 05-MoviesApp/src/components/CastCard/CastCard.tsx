import React from 'react';
import { Cast } from '../../models/Cast';
import { View, Text, Image } from 'react-native';
import { styles } from './CastCardStyles';

interface Props {
  cast: Cast;
}

export const CastCard = ({ cast }: Props) => (
  <View style={styles.container}>
    {cast.profile_path && (
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${cast.profile_path}`,
          }}
        />
      </View>
    )}
    <View>
      <Text style={styles.title}>{cast.name}</Text>
      <Text style={styles.subtitle}>{cast.character}</Text>
    </View>
  </View>
);
