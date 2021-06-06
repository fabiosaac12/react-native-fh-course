import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../screens/HomeScreen';
import { SearchScreen } from '../../screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => (
  <Tab.Navigator
    sceneContainerStyle={{ backgroundColor: 'white' }}
    tabBarOptions={{
      activeTintColor: 'purple',
      style: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.89)',
        elevation: 0,
        borderWidth: 0,
        minHeight: 52
      },
      tabStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      labelStyle: {
        fontSize: 13,
      },
    }}
  >
    <Tab.Screen
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon color={color} size={20} name="home-outline" />
        ),
      }}
      name="home"
      component={HomeScreen}
    />
    <Tab.Screen
      name="search"
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => (
          <Icon color={color} size={20} name="search-outline" />
        ),
      }}
      component={SearchScreen}
    />
  </Tab.Navigator>
);
