import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackPropsList } from '../../navigation/StackNavigator';
import { useStyles } from './MovieDetailsStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from './hooks/useMovieDetails';
import { format } from 'currency-formatter';
import { CastCard } from '../../components/CastCard/CastCard';

interface Props extends StackScreenProps<StackPropsList, 'movieDetails'> {}

export const MovieDetails = ({ route, navigation }: Props) => {
  const { params: movie } = route;
  const imageUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const styles = useStyles();

  const { movieDetails, cast, loading } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.pop()}
        style={styles.goBackButton}>
        <Icon name="arrow-back-outline" size={40} color="#fafafa" />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUri }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.subtitle}>{movie.original_title}</Text>
          <Text style={styles.title}>{movie.title}</Text>
        </View>
        {loading ? (
          <ActivityIndicator size={30} color="black" />
        ) : (
          movieDetails && (
            <View style={styles.extraInfoContainer}>
              <View style={styles.row}>
                <Icon
                  style={styles.subtitle}
                  name="star-outline"
                  size={25}
                  color="black"
                />
                <Text style={styles.subtitle}>{movieDetails.vote_average}</Text>
                <Text style={styles.subtitle}>
                  {movieDetails.genres.map(genre => genre.name).join(', ')}
                </Text>
              </View>
              <View style={styles.marginTop}>
                <Text style={styles.title}>Presupuesto</Text>
                <Text style={styles.subtitle}>
                  {format(movieDetails.budget, { code: 'USD' })}
                </Text>
              </View>
              <View style={styles.marginTop}>
                <Text style={styles.title}>Historia</Text>
                <Text style={styles.subtitle}>{movieDetails.overview}</Text>
              </View>
              <View style={styles.castContainer}>
                <FlatList
                  data={cast}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  renderItem={({ item }) => <CastCard cast={item} />}
                />
              </View>
            </View>
          )
        )}
      </View>
    </ScrollView>
  );
};
