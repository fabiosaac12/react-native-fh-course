import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MapScreen } from '../../screens/MapScreen';
import { PermissionsScreen } from '../../screens/PermissionsScreen';
import { usePermissions } from '../../context/Permissions';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const permissions = usePermissions();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        }}
      >
        {permissions.location?.status === 'granted' ? (
          <Stack.Screen name="map" component={MapScreen} />
        ) : (
          <Stack.Screen name="permissions" component={PermissionsScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
