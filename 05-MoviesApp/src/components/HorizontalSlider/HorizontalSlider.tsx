import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Poster } from '../Poster';
import { Movie } from '../../models/Movie';
import {styles} from './HorizontalSliderStyles';

interface Props {
  movies: Movie[];
  title: string;
}

export const HorizontalSlider = ({ movies, title }: Props) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <Poster movie={item} width={140} height={200} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
