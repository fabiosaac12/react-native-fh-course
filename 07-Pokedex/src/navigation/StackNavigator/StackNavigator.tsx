import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Pokemon } from '../../models/Pokemon';
import { PokemonScreen } from '../../screens/PokemonScreen';
import { BottomTabNavigator } from '../BottomTabNavigator/BottomTabNavigator';

export type RootStackParams = {
  tabs: undefined;
  pokemon: {
    pokemon: Pokemon;
    backgroundColor: string;
  };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen name="tabs" component={BottomTabNavigator} />
      <Stack.Screen name="pokemon" component={PokemonScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
