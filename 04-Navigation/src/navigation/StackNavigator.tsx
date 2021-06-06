import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FirstPage } from '../screens/FirstPage';
import { SecondPage } from '../screens/SecondPage';
import { ThirdPage } from '../screens/ThirdPage';
import { PersonPage } from '../screens/PersonPage';
import { Person } from '../models/Person';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button } from 'react-native';

export type RootStackParamList = {
  firstPage: undefined;
  secondPage: undefined;
  thirdPage: undefined;
  personPage: Person;
};

const Stack = createStackNavigator<RootStackParamList>();

interface Props extends DrawerScreenProps<any, any> {}

export const StackNavigator = ({ navigation }: Props) => (
  <Stack.Navigator>
    <Stack.Screen
      name="firstPage"
      component={FirstPage}
      options={{
        headerLeft: () => (
          <Button onPress={() => navigation.toggleDrawer()} title="Menu" />
        ),
      }}
    />
    <Stack.Screen name="secondPage" component={SecondPage} />
    <Stack.Screen name="thirdPage" component={ThirdPage} />
    <Stack.Screen
      name="personPage"
      component={PersonPage}
      options={{ title: 'Loading...' }}
    />
  </Stack.Navigator>
);
