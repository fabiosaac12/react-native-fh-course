import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { useStyles } from './PosterStyles';
import { useNavigation } from '@react-navigation/native';
import { Movie } from '../../models/Movie';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

export const Poster = ({ movie, ...props }: Props) => {
  const navigation = useNavigation();
  const styles = useStyles(props);

  const imageUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const onPress = () => navigation.navigate('movieDetails', movie);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUri }} />
      </View>
    </TouchableOpacity>
  );
};
