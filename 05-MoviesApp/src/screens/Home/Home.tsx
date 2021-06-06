import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import { useMovies } from './hooks/useMovies';
import { Poster } from '../../components/Poster';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../../components/HorizontalSlider';
import { GradientBackground } from '../../components/GradientBackground/GradientBackground';
import { useGradient } from '../../context/Gradient';
import { extractImageColors } from '../../utils/helpers';
import { useStyles } from './HomeStyles';

export const Home = () => {
  const { width: windowWidth } = useWindowDimensions();
  const styles = useStyles();

  const { loading, movies } = useMovies();

  const { setCurrentColors } = useGradient();

  const handleSnapToItem = async (index: number) => {
    const movie = movies.nowPlaying[index];
    const imageUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const colors = await extractImageColors(imageUri);

    setCurrentColors(colors);
  };

  return (
    <GradientBackground>
      <ScrollView>
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={30} color="black" />
          ) : (
            <>
              <View>
                <Carousel
                  inactiveSlideOpacity={0.9}
                  data={movies.nowPlaying}
                  sliderWidth={windowWidth}
                  itemWidth={260}
                  renderItem={({ item }: any) => <Poster movie={item} />}
                  onSnapToItem={handleSnapToItem}
                />
              </View>
              <HorizontalSlider movies={movies.popular} title="En cartelera" />
              <HorizontalSlider
                movies={movies.topRated}
                title="Las mas valoradas"
              />
              <HorizontalSlider movies={movies.upcoming} title="Proximamente" />
            </>
          )}
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
