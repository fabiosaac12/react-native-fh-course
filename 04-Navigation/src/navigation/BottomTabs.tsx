import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FirstBottomTab } from '../screens/FirstBottomTab';
import { StackNavigator } from './StackNavigator';
import { TopTabs } from './TopTabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tabs.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let icon: string = '';

          switch (route.name) {
            case 'firstBottomTab':
              icon = 'bandage-outline';
              break;
            case 'secondBottomTab':
              icon = 'analytics-outline';
              break;
            case 'stackNavigator':
              icon = 'car-sport-outline';
              break;
          }

          return <Icon name={icon} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'purple',
        style: { borderTopWidth: 0, elevation: 0 },
      }}>
      <Tabs.Screen
        name="firstBottomTab"
        options={{ title: 'First' }}
        component={FirstBottomTab}
      />
      <Tabs.Screen
        name="secondBottomTab"
        options={{ title: 'Second' }}
        component={TopTabs}
      />
      <Tabs.Screen
        name="stackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </Tabs.Navigator>
  );
};
