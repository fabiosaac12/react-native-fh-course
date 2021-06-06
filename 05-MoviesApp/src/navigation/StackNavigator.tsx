import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { MovieDetails } from '../screens/MovieDetails';
import { Movie } from '../models/Movie';

export type StackPropsList = {
  home: undefined;
  movieDetails: Movie;
};

const Stack = createStackNavigator<StackPropsList>();

export const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'white' },
    }}>
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="movieDetails" component={MovieDetails} />
  </Stack.Navigator>
);
