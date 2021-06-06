import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FirstTopTab } from '../screens/FirstTopTab';
import { SecondTopTab } from '../screens/SecondTopTab';
import { ThirdTopTab } from '../screens/ThirdTopTab';
import { Text } from 'react-native';

const Tabs = createMaterialTopTabNavigator();

export const TopTabs = () => {
  return (
    <Tabs.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let icon: string = '';

          switch (route.name) {
            case 'firstTopTab':
              icon = 'FB';
              break;
            case 'secondTopTab':
              icon = 'SB';
              break;
            case 'thirdTopTab':
              icon = 'TT';
              break;
          }

          return <Text style={{ color }}>{icon}</Text>;
        },
      })}
      tabBarOptions={{
        showIcon: true,
        activeTintColor: 'purple',
        pressColor: 'transparent',
        indicatorStyle: { backgroundColor: '#80008020' },
        style: { elevation: 0, shadowOpacity: 0 },
      }}>
      <Tabs.Screen
        name="firstTopTab"
        options={{ title: 'First' }}
        component={FirstTopTab}
      />
      <Tabs.Screen
        name="secondTopTab"
        options={{ title: 'Second' }}
        component={SecondTopTab}
      />
      <Tabs.Screen
        name="thirdTopTab"
        options={{ title: 'Stack' }}
        component={ThirdTopTab}
      />
    </Tabs.Navigator>
  );
};
